/* eslint-disable react/jsx-no-useless-fragment */
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabelProps,
  FormHelperText,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useCallback, useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import { MAX_FILE_SIZE_KB, MAX_IMAGE_SIZE_KB } from 'src/config-global';
import { useUploadOcrAttachment } from 'src/query/hooks/ocr';
import { DocumentType, OCRResponse } from 'src/types/ocr-attachments';
import {
  compressImageIfNeeded,
  CompressionMode,
  ImageType,
  isImageFile,
} from 'src/utils/compress-image';
import { formatErrorMessage } from 'src/utils/format-error-message';

// ----------------------------------------------------------------------

interface FieldMapping {
  [ocrKey: string]: {
    formField: string; // Form field name (supports nested paths like 'investor.name')
    transform?: (value: any) => any; // Optional value transformation
  };
}

type PreviewEntry = { title: string; value: string };

interface OCRFileUploadProps extends Omit<FormControlLabelProps, 'control'> {
  name: string;
  label: string;
  documentType: DocumentType;
  fieldMapping?: FieldMapping; // Field mapping configuration (optional)
  accept?: string;
  disabled?: boolean;
  helperText?: string;
  maxSizeKB?: number;
  isRequired?: boolean;
  isUploadFile?: boolean; // Whether to upload file to S3 (default: true). If false, returns File object instead of AWS key.
  isNeedOcrResponse?: boolean; // Whether to return OCR response (default: true)
  // Optional callback when OCR completes
  onOcrComplete?: (ocrData: any) => void;
  onProcessingChange?: (isProcessing: boolean) => void;

  /** Enable automatic image compression */
  enableCompression?: boolean;

  /** Compression quality (0-1) */
  compressionQuality?: number;

  /** Scale percentage (1-100). Images will be scaled to this percentage of their original size */
  scalePercentage?: number;

  /** Maximum width for compressed image (used in DIMENSIONS or HYBRID mode) */
  maxWidth?: number;

  /** Maximum height for compressed image (used in DIMENSIONS or HYBRID mode) */
  maxHeight?: number;

  /** Compression mode: 'percentage' (default), 'dimensions', or 'hybrid' */
  compressionMode?: CompressionMode;

  /** Image type for intelligent compression */
  imageType?: ImageType;

  /** Only compress images larger than this threshold (in MB) */
  compressThresholdMB?: number;

  /** Preview data to display on top of image preview */
  previewData?: PreviewEntry[];
  previewLoading?: boolean;
  onPreview?: () => void | Promise<void>;
}

export default function OCRFileUpload({
  name,
  label,
  documentType,
  fieldMapping,
  accept = 'image/*,.pdf',
  disabled = false,
  helperText,
  maxSizeKB = MAX_FILE_SIZE_KB, // Use global config (5MB default)
  isRequired = false,
  isUploadFile = true,
  isNeedOcrResponse = true,
  onOcrComplete,
  onProcessingChange,
  enableCompression = true,
  compressionQuality = 0.8,
  scalePercentage = 80,
  maxWidth,
  maxHeight,
  compressionMode = CompressionMode.PERCENTAGE,
  compressThresholdMB = 1,
  imageType = ImageType.DOCUMENT,
  previewData,
  previewLoading = false,
  onPreview,
}: OCRFileUploadProps) {
  const { control, setValue } = useFormContext();
  const { enqueueSnackbar } = useSnackbar();
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | string[]>('');
  const [previewOpen, setPreviewOpen] = useState(false);
  const [blobUrl, setBlobUrl] = useState<string>(''); // For newly uploaded files
  const [blobIsImage, setBlobIsImage] = useState<boolean | null>(null); // Minimal flag for blob type
  const [compressing, setCompressing] = useState(false);
  const [imageZoom, setImageZoom] = useState(100);
  // const [ocrData, setOcrData] = useState<any>(null);

  const uploadOcrMutation = useUploadOcrAttachment();

  // Clean up blob URL to prevent memory leaks
  useEffect(
    () => () => {
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
      }
    },
    [blobUrl]
  );

  // Function to set form field value (simplified)
  const setFormFieldValue = useCallback(
    (fieldPath: string, value: any) => {
      // Use RHF native dot-path support to avoid mutating roots/arrays
      setValue(fieldPath, value, { shouldValidate: true, shouldDirty: true });
    },
    [setValue]
  );

  // Function to auto-populate form fields based on OCR response and field mapping
  const autoPopulateFormFields = useCallback(
    (ocrResponse: OCRResponse) => {
      if (!ocrResponse.details) return;

      const { details } = ocrResponse;
      //   console.log('OCR Response details:', details);

      // Only populate fields if field mapping is provided
      if (fieldMapping) {
        // Use the provided field mapping to populate form fields
        Object.entries(fieldMapping).forEach(([ocrKey, mapping]) => {
          const ocrValue = (details as Record<string, unknown>)[ocrKey];

          // Only set field value if OCR value exists, is not undefined, not null, and not empty string
          if (
            ocrValue !== undefined &&
            ocrValue !== null &&
            ocrValue !== '' &&
            String(ocrValue).trim() !== ''
          ) {
            // Apply transformation if provided
            const finalValue = mapping.transform ? mapping.transform(ocrValue) : ocrValue;
            setFormFieldValue(mapping.formField, finalValue);
          } else {
            console.log(`⚠️ Skipped ${ocrKey} - value is empty or invalid:`, ocrValue);
          }
        });
      } else {
        console.log('⚠️ No field mapping provided');
      }

      // Store OCR data for potential use
      // setOcrData(details);

      // Call optional callback
      if (onOcrComplete) {
        onOcrComplete(details);
      }
    },
    [fieldMapping, setFormFieldValue, onOcrComplete]
  );

  /**
   * File Upload Flow:
   * 1. Input file received
   * 2. Compress image (if enabled and is image)
   * 3. Validate file size after compression
   * 4. Create preview blob URL
   * 5. Upload compressed/processed file to OCR
   */
  const handleFileUpload = useCallback(
    async (file: File, onChange: (value: string | File) => void) => {
      setUploadError('');
      setCompressing(true);

      // Determine max size based on file type
      const isImage = isImageFile(file);
      const fileMaxSizeKB = isImage ? MAX_IMAGE_SIZE_KB : MAX_FILE_SIZE_KB;

      // Step 1: Validate original file size before compression (only for non-images)
      if (!isImage && file.size > fileMaxSizeKB * 1024) {
        const fileSizeMB = (file.size / 1024 / 1024).toFixed(2);
        const maxSizeMB = (fileMaxSizeKB / 1024).toFixed(2);
        setUploadError(
          `Original file size (${fileSizeMB} MB) exceeds maximum allowed size (${maxSizeMB} MB)`
        );
        setCompressing(false);
        return;
      }

      try {
        let processedFile = file;
        const originalSize = file.size;

        // Step 2: Input received (after validation)
        console.log(
          '📥 [OCR Upload] Input file received:',
          file.name,
          `(${(originalSize / 1024 / 1024).toFixed(2)} MB)`
        );

        // Step 3: Compress if it's an image and compression is enabled
        if (enableCompression && isImageFile(file)) {
          console.log('📦 [OCR Upload] Compressing image before OCR processing...');

          try {
            // For large files, adjust compression settings
            const fileSizeMB = originalSize / 1024 / 1024;
            const adjustedOptions: any = {
              imageType,
              quality: compressionQuality,
              scalePercentage,
              mode: compressionMode,
            };

            // Add dimension limits if provided
            if (maxWidth !== undefined) adjustedOptions.maxWidth = maxWidth;
            if (maxHeight !== undefined) adjustedOptions.maxHeight = maxHeight;

            // More aggressive compression for files >5MB
            if (fileSizeMB > 5) {
              console.log(
                `⚠️ [OCR Upload] Large file detected (${fileSizeMB.toFixed(
                  2
                )} MB), using aggressive compression`
              );
              adjustedOptions.scalePercentage = Math.min(scalePercentage, 70); // Scale to 70% max
              adjustedOptions.quality = Math.min(compressionQuality, 0.7);
            }

            processedFile = await compressImageIfNeeded(file, compressThresholdMB, adjustedOptions);

            // Log compression stats (for debugging only, not shown to user)
            if (processedFile.size !== originalSize) {
              const savedPercentage = ((1 - processedFile.size / originalSize) * 100).toFixed(1);
              console.log(
                `✅ [OCR Upload] Image compressed: ${savedPercentage}% size reduction (${(
                  processedFile.size /
                  1024 /
                  1024
                ).toFixed(2)} MB)`
              );
            } else {
              console.log('✅ [OCR Upload] Image within limits, no compression needed');
            }
          } catch (compressionError: any) {
            console.error(
              '❌ [OCR Upload] Compression failed, using original file:',
              compressionError?.message || compressionError
            );
            // processedFile remains as original file
          }
        } else if (!isImageFile(file)) {
          console.log('⏭️ [OCR Upload] File is not an image, skipping compression');
        }

        // Step 4: Create blob URL for preview
        const newBlobUrl = URL.createObjectURL(processedFile);
        setBlobUrl(newBlobUrl);
        setBlobIsImage((processedFile.type || '').startsWith('image/'));
        setCompressing(false);

        // Step 5: Upload to OCR with compressed/processed file
        console.log('📤 [OCR Upload] Sending file to OCR processing...');
        setUploading(true);
        onProcessingChange?.(true);

        const response = await uploadOcrMutation.mutateAsync({
          payload: { type: documentType, file: processedFile },
          queryParams: { isUploadFile, isNeedOcrResponse },
        });

        console.log('✅ [OCR Upload] OCR processing completed');
        console.log('OCR Response:', response);

        if (!isUploadFile) {
          // If not uploading to S3, store the File object
          onChange(processedFile);
          enqueueSnackbar('File processed successfully', { variant: 'success' });

          // Auto-populate form fields using the provided mapping
          if (response) {
            console.log('Auto-populating fields with response:', response);
            autoPopulateFormFields(response);
          } else {
            console.log('⚠️ No response received for field mapping');
          }
        } else if (response.key) {
          // If uploading to S3, store the AWS key
          onChange(response.key);
          enqueueSnackbar('File uploaded and OCR processed successfully', { variant: 'success' });

          // Auto-populate form fields using the provided mapping
          autoPopulateFormFields(response);
        } else {
          throw new Error('No file data returned from OCR upload');
        }
      } catch (error: any) {
        setUploadError(formatErrorMessage(error.message));
        enqueueSnackbar(formatErrorMessage(error.message), { variant: 'error' });
        // Clean up blob URL on error
        if (blobUrl) {
          URL.revokeObjectURL(blobUrl);
          setBlobUrl('');
          setBlobIsImage(null);
        }
      } finally {
        setCompressing(false);
        setUploading(false);
        onProcessingChange?.(false);
      }
    },
    [
      imageType,
      uploadOcrMutation,
      enqueueSnackbar,
      documentType,
      autoPopulateFormFields,
      onProcessingChange,
      isUploadFile,
      isNeedOcrResponse,
      enableCompression,
      compressionQuality,
      scalePercentage,
      maxWidth,
      maxHeight,
      compressionMode,
      compressThresholdMB,
      blobUrl,
    ]
  );

  const getFileTypeFromExtension = (url: string | File): 'image' | 'pdf' => {
    // If it's a File object, check its type
    if (url instanceof File) {
      if (url.type.startsWith('image/')) return 'image';
      return 'pdf';
    }
    if (!url) return 'pdf';
    if (url.startsWith('blob:')) {
      if (blobIsImage !== null) return blobIsImage ? 'image' : 'pdf';
      return 'image';
    }
    const cleanUrl = url.split('?')[0].split('#')[0];
    const extension = cleanUrl.split('.').pop()?.toLowerCase() || '';
    const imageExts = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'];
    if (imageExts.includes(extension)) return 'image';
    if (extension === 'pdf') return 'pdf';
    return 'pdf';
  };

  const handleFilePreview = (fieldValue: string | File | null) => {
    setPreviewOpen(true);
  };

  const closePreview = () => {
    setPreviewOpen(false);
  };

  const handleImageZoomChange = (direction: 'in' | 'out') => {
    setImageZoom((prev) => {
      const delta = 25;
      const next = direction === 'in' ? prev + delta : prev - delta;
      return Math.min(300, Math.max(25, next));
    });
  };

  useEffect(() => {
    if (previewOpen) {
      setImageZoom(100);
    }
  }, [previewOpen]);

  // const getFileName = (value: string) => {
  //   if (!value) return '';
  //   const fileName = value.split('/').pop() || value;
  //   // Truncate to 100 characters and add ellipsis if longer
  //   if (fileName.length > 50) {
  //     return `${fileName.substring(0, 47)}...`;
  //   }
  //   return fileName;
  // };

  const getPreviewUrl = (fieldValue: string | File | null): string => {
    // If field value is a File object, create blob URL
    if (fieldValue instanceof File) {
      return URL.createObjectURL(fieldValue);
    }
    // If newly uploaded file, use blob URL for preview
    if (blobUrl) return blobUrl;
    // If existing file (from form), use it directly as complete URL
    return fieldValue || '';
  };

  const renderLoadingPreview = (type: 'image' | 'pdf') => (
    <Box
      sx={{
        position: 'relative',
        p: type === 'image' ? { xs: 1, sm: 2 } : 0,
        width: '80vw',
        maxWidth: '80vw',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: type === 'pdf' ? '100%' : '100%',
          maxWidth: '100%',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: type === 'pdf' ? 0 : 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            justifyContent: 'center',
          }}
        >
          <CircularProgress size={20} />
          <Typography
            variant="caption"
            sx={{ fontSize: '0.7rem', color: 'text.secondary', fontWeight: 500 }}
          >
            Loading information...
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  const renderDialogContent = (fieldValue: string | File | null) => {
    const previewUrl = getPreviewUrl(fieldValue);
    if (!previewUrl) return null;

    const fileType = getFileTypeFromExtension(previewUrl);

    if (previewLoading) {
      return renderLoadingPreview(fileType);
    }

    // Image Preview
    if (fileType === 'image') {
      const entries = previewData || [];
      const hasPreviewData = entries.length > 0;
      const showPreviewCard = hasPreviewData;
      return (
        <>
          <Box sx={{ position: 'relative', p: { xs: 1, sm: 2 } }}>
            <IconButton
              aria-label="close"
              onClick={closePreview}
              sx={{
                position: 'absolute',
                top: { xs: 4, sm: 8 },
                right: { xs: 4, sm: 8 },
                zIndex: 20,
                color: (theme) => theme.palette.grey[700],
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                },
              }}
            >
              <Iconify icon="eva:close-fill" />
            </IconButton>
            <Box sx={{ display: 'inline-block', height: 'auto', width: '100%', maxWidth: '100%' }}>
              <Stack spacing={2}>
                {showPreviewCard && (
                  <Card
                    sx={{
                      backgroundColor: 'background.paper',
                      boxShadow: 2,
                      width: '100%',
                      maxWidth: '100%',
                      position: 'sticky',
                      top: 0,
                      zIndex: 10,
                      mx: 'auto',
                      my: { xs: 1, sm: 2 },
                      px: { xs: 1, sm: 2 },
                      border: (theme) => `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
                    }}
                  >
                    <CardContent
                      sx={{ p: { xs: 1, sm: 1.5 }, '&:last-child': { pb: { xs: 1, sm: 1.5 } } }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'block',
                          mb: 1,
                          fontWeight: 600,
                          color: 'text.secondary',
                          fontSize: '0.7rem',
                        }}
                      >
                        Information Preview
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          columnGap: 1,
                          rowGap: 1,
                          width: '100%',
                        }}
                      >
                        {entries.map(({ title, value }, idx) => (
                          <Box
                            key={`${title}-${idx}`}
                            sx={{
                              flex: '1 1 220px',
                              minWidth: { xs: '100%', sm: 220 },
                              maxWidth: '100%',
                              p: 0.75,
                              borderRadius: 0.5,
                              backgroundColor: (theme) => alpha(theme.palette.grey[500], 0.04),
                              border: (theme) =>
                                `1px solid ${alpha(theme.palette.grey[500], 0.12)}`,
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.04),
                                borderColor: (theme) => alpha(theme.palette.primary.main, 0.2),
                              },
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'text.primary',
                                fontSize: '0.75rem',
                                lineHeight: 1.4,
                              }}
                            >
                              <Typography
                                component="span"
                                sx={{
                                  fontWeight: 600,
                                  color: 'text.secondary',
                                  fontSize: '0.75rem',
                                  mr: 0.75,
                                }}
                              >
                                {title}:
                              </Typography>
                              <Typography
                                component="span"
                                sx={{
                                  fontWeight: 500,
                                  wordBreak: 'break-word',
                                  fontSize: '0.75rem',
                                }}
                              >
                                {value || '-'}
                              </Typography>
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                )}
                <Box
                  sx={{
                    height: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    overflow: 'auto',
                    maxHeight: hasPreviewData ? 'calc(95vh - 180px)' : '95vh',
                    px: 1,
                  }}
                >
                  <Box
                    sx={{
                      transform: `scale(${imageZoom / 100})`,
                      transformOrigin: 'top center',
                      transition: 'transform 0.15s ease-out',
                      display: 'inline-block',
                    }}
                  >
                    <img
                      src={previewUrl}
                      alt="File Preview"
                      style={{
                        display: 'block',
                        height: 'auto',
                        width: '100%',
                        maxWidth: '100%',
                        maxHeight: 'calc(90vh - 200px)',
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                </Box>
                {!previewLoading && (
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 1,
                      px: 1,
                      py: 0.5,
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => handleImageZoomChange('out')}
                      sx={{
                        borderRadius: 0.75,
                        backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.9),
                        '&:hover': {
                          backgroundColor: (theme) => alpha(theme.palette.background.paper, 1),
                        },
                      }}
                    >
                      <Iconify icon="eva:minus-outline" width={18} height={18} />
                    </IconButton>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 600,
                        color: 'text.secondary',
                        minWidth: 52,
                        textAlign: 'center',
                        fontSize: '0.7rem',
                      }}
                    >
                      {imageZoom}%
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => handleImageZoomChange('in')}
                      sx={{
                        borderRadius: 0.75,
                        backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.9),
                        '&:hover': {
                          backgroundColor: (theme) => alpha(theme.palette.background.paper, 1),
                        },
                      }}
                    >
                      <Iconify icon="eva:plus-outline" width={18} height={18} />
                    </IconButton>
                  </Box>
                )}
              </Stack>
            </Box>
          </Box>
        </>
      );
    }

    // PDF Preview (default case)
    return (
      <>
        <DialogTitle sx={{ m: 0, p: 0, display: 'none' }} />
        <DialogContent
          dividers
          sx={{
            p: 0,
            height: 'auto',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <IconButton
            aria-label="close"
            onClick={closePreview}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 20,
              color: (theme) => theme.palette.grey[700],
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 1)',
              },
            }}
          >
            <Iconify icon="eva:close-fill" />
          </IconButton>
          <Box sx={{ overflow: 'auto', flex: 1, px: 2, pb: 2, pt: 0 }}>
            {(previewData || []).length > 0 && (
              <Card
                sx={{
                  backgroundColor: 'background.paper',
                  boxShadow: 2,
                  width: '100%',
                  maxWidth: '100%',
                  position: 'sticky',
                  top: 0,
                  zIndex: 10,
                  my: 2,
                  px: 2,
                  border: (theme) => `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
                }}
              >
                <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      mb: 1,
                      fontWeight: 600,
                      color: 'text.secondary',
                      fontSize: '0.7rem',
                    }}
                  >
                    Information Preview
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      columnGap: 1,
                      rowGap: 1,
                      width: '100%',
                    }}
                  >
                    {(previewData || []).map(({ title, value }, idx) => (
                      <Box
                        key={`${title}-${idx}`}
                        sx={{
                          flex: '1 1 220px',
                          minWidth: { xs: '100%', sm: 220 },
                          maxWidth: '100%',
                          p: 0.75,
                          borderRadius: 0.5,
                          backgroundColor: (theme) => alpha(theme.palette.grey[500], 0.04),
                          border: (theme) => `1px solid ${alpha(theme.palette.grey[500], 0.12)}`,
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.04),
                            borderColor: (theme) => alpha(theme.palette.primary.main, 0.2),
                          },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.primary',
                            fontSize: '0.75rem',
                            lineHeight: 1.4,
                          }}
                        >
                          <Typography
                            component="span"
                            sx={{
                              fontWeight: 600,
                              color: 'text.secondary',
                              fontSize: '0.75rem',
                              mr: 0.75,
                            }}
                          >
                            {title}:
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              fontWeight: 500,
                              wordBreak: 'break-word',
                              fontSize: '0.75rem',
                            }}
                          >
                            {value || '-'}
                          </Typography>
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            )}
            <Box
              sx={{
                width: '100%',
                height: (previewData || []).length > 0 ? 'calc(95vh - 120px)' : '95vh',
              }}
            >
              <iframe
                src={previewUrl}
                width="100%"
                height="100%"
                title="Document Preview"
                style={{
                  border: 'none',
                  display: 'block',
                }}
              />
            </Box>
          </Box>
        </DialogContent>
      </>
    );
  };

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Stack spacing={0}>
            <Box
              sx={{
                borderRadius: 1.5,
                border: uploadError || error ? '1px solid' : '2px dashed',
                borderColor: uploadError || error ? 'error.main' : 'grey.300',
                backgroundColor: (theme) => alpha(theme.palette.grey[500], 0.04),
                color: uploadError || error ? 'error.main' : 'inherit',

                p: '10px',
                textAlign: 'center',
                transition: 'all 0.2s ease',
                ...(!disabled && {
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.04),
                  },
                }),
              }}
            >
              {compressing || uploading ? (
                <Stack flexDirection="row" alignItems="center" justifyContent="center" spacing={2}>
                  <CircularProgress size={18} />
                  <Typography variant="body2" color="text.secondary">
                    Processing...
                  </Typography>
                </Stack>
              ) : (
                <Stack
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={1.5}
                >
                  <Typography variant="body2">
                    {isRequired && label ? `${label} *` : label}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} gap={2}>
                    {field.value ? (
                      <Button
                        onClick={
                          field.value
                            ? async () => {
                                handleFilePreview(field.value);
                                if (onPreview) {
                                  try {
                                    await onPreview();
                                  } catch (previewError) {
                                    console.error(previewError);
                                  }
                                }
                              }
                            : undefined
                        }
                        variant="outlined"
                        size="small"
                        sx={{ width: 110, fontWeight: 600 }}
                      >
                        Preview
                      </Button>
                    ) : // <Typography
                    //   variant="caption"
                    //   sx={{
                    //     color: error || uploadError ? 'error.main' : 'text.secondary',
                    //   }}
                    // >
                    //   Max size: Images (No limit), Documents (5MB)
                    // </Typography>
                    null}

                    <Button
                      variant="outlined"
                      component="label"
                      disabled={disabled || uploading || compressing}
                      size="small"
                      startIcon={<Iconify icon="eva:cloud-upload-outline" width={16} />}
                      sx={{ width: 110, fontWeight: 600 }}
                    >
                      {field.value ? 'Re-upload' : 'Upload'}
                      <input
                        type="file"
                        hidden
                        accept={accept}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleFileUpload(file, field.onChange);
                          }
                        }}
                      />
                    </Button>
                  </Box>

                  {/* Show OCR data if available */}
                  {/* {ocrData && (
                    <Box
                      sx={{
                        mt: 1,
                        p: 1,
                        bgcolor: 'success.light',
                        borderRadius: 1,
                        maxWidth: '100%',
                      }}
                    >
                      <Typography variant="caption" color="success.dark" sx={{ fontWeight: 600 }}>
                        OCR Data Extracted:
                      </Typography>
                      <Typography
                        variant="caption"
                        color="success.dark"
                        sx={{ display: 'block', mt: 0.5 }}
                      >
                        {Object.entries(ocrData)
                          .map(([key, value]) => `${key}: ${value}`)
                          .join(', ')}
                      </Typography>
                    </Box>
                  )} */}
                </Stack>
              )}
            </Box>

            {(!!uploadError || !!error || helperText) && (
              <FormHelperText error={!!(uploadError || error)} sx={{ mx: 0, fontSize: '0.75rem' }}>
                {uploadError || error?.message || helperText}
              </FormHelperText>
            )}
          </Stack>
        )}
      />

      {/* File Preview Dialog */}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Dialog
            open={previewOpen}
            onClose={closePreview}
            fullWidth={getFileTypeFromExtension(getPreviewUrl(field.value)) === 'pdf'}
            maxWidth={getFileTypeFromExtension(getPreviewUrl(field.value)) === 'pdf' ? 'lg' : false}
            PaperProps={{
              sx: {
                ...(getFileTypeFromExtension(getPreviewUrl(field.value)) === 'pdf' && {
                  maxHeight: '95vh',
                  height: '95vh',
                }),
                ...(getFileTypeFromExtension(getPreviewUrl(field.value)) === 'image' && {
                  width: { xs: '95vw', sm: 'fit-content' },
                  height: 'fit-content',
                  maxWidth: { xs: '95vw', sm: '90vw' },
                  maxHeight: '95vh',
                  overflow: 'visible',
                  margin: 'auto',
                }),
              },
            }}
          >
            {renderDialogContent(field.value)}
          </Dialog>
        )}
      />
    </>
  );
}
