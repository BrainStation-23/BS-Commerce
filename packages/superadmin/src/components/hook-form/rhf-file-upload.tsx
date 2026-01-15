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
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useCallback, useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Iconify from 'src/components/iconify';
import { MAX_FILE_SIZE_KB, MAX_IMAGE_SIZE_KB } from 'src/config-global';
import {
  compressImageIfNeeded,
  CompressionMode,
  ImageType,
  isImageFile,
} from 'src/utils/compress-image';

// ----------------------------------------------------------------------

type PreviewEntry = { title: string; value: string };

interface FileUploadProps extends Omit<FormControlLabelProps, 'control'> {
  name: string;
  label: string;
  accept?: string;
  disabled?: boolean;
  helperText?: string;
  maxSizeKB?: number;
  isRequired?: boolean;
  // Optional callback when file is selected
  onFileSelect?: (file: File) => void;

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

  /** Only compress images larger than this threshold (in MB) */
  compressThresholdMB?: number;

  /** Image type for intelligent compression */
  imageType?: ImageType;

  /** Preview data to display on top of image preview */
  previewData?: PreviewEntry[];
}

export default function FileUpload({
  name,
  label,
  accept = 'image/*,.pdf',
  disabled = false,
  helperText,
  maxSizeKB = MAX_FILE_SIZE_KB, // Use global config (5MB default)
  isRequired = false,
  onFileSelect,
  enableCompression = true,
  compressionQuality = 0.8,
  scalePercentage = 80,
  maxWidth,
  maxHeight,
  compressionMode = CompressionMode.PERCENTAGE,
  compressThresholdMB = 1,
  imageType = ImageType.PHOTO,
  previewData,
}: FileUploadProps) {
  const { control } = useFormContext();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [blobUrl, setBlobUrl] = useState<string>(''); // For file preview
  const [compressing, setCompressing] = useState(false);
  const [uploadError, setUploadError] = useState<string>(''); // For file upload errors

  // Clean up blob URL to prevent memory leaks
  useEffect(
    () => () => {
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
      }
    },
    [blobUrl]
  );

  const handleFileSelect = useCallback(
    async (file: File, onChange: (value: File) => void) => {
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

        // Compress if it's an image and compression is enabled
        if (enableCompression && isImageFile(file)) {
          console.log('Compressing image...');

          try {
            const compressionOptions: any = {
              imageType,
              quality: compressionQuality,
              scalePercentage,
              mode: compressionMode,
            };

            // Add dimension limits if provided
            if (maxWidth !== undefined) compressionOptions.maxWidth = maxWidth;
            if (maxHeight !== undefined) compressionOptions.maxHeight = maxHeight;

            processedFile = await compressImageIfNeeded(
              file,
              compressThresholdMB,
              compressionOptions
            );

            // Log compression stats (for debugging only)
            if (processedFile.size !== originalSize) {
              const savedPercentage = ((1 - processedFile.size / originalSize) * 100).toFixed(1);
              console.log(`Image compressed: ${savedPercentage}% size reduction`);
            }
          } catch (compressionError) {
            console.error('Compression failed, using original file:', compressionError);
            // processedFile remains as original file
          }
        }

        // Create blob URL for immediate preview
        const newBlobUrl = URL.createObjectURL(processedFile);
        setBlobUrl(newBlobUrl);

        // Store the file in the form
        onChange(processedFile);

        // Call optional callback
        if (onFileSelect) {
          onFileSelect(processedFile);
        }
      } catch (error) {
        console.error('File processing failed:', error);
        alert('Failed to process file. Please try again.');
      } finally {
        setCompressing(false);
      }
    },
    [
      imageType,
      onFileSelect,
      enableCompression,
      compressionQuality,
      scalePercentage,
      maxWidth,
      maxHeight,
      compressionMode,
      compressThresholdMB,
    ]
  );

  const getFileTypeFromExtension = (file: File | string | null) => {
    if (!file) return 'other'; // Default to other if no file

    let extension: string;
    if (file instanceof File) {
      extension = file.name.split('.').pop()?.toLowerCase() || '';
    } else {
      // For URL strings, remove query parameters before extracting extension
      const urlWithoutParams = file.split('?')[0];
      extension = urlWithoutParams.split('.').pop()?.toLowerCase() || '';
    }

    const imageExts = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'];
    const excelExts = ['xlsx', 'xls', 'csv'];

    if (imageExts.includes(extension)) return 'image';
    if (extension === 'pdf') return 'pdf';
    if (excelExts.includes(extension)) return 'excel';
    return 'other';
  };

  const handleFilePreview = (fieldValue: File | string | null) => {
    if (!fieldValue) return;
    setPreviewOpen(true);
  };

  const closePreview = () => {
    setPreviewOpen(false);
  };

  const getPreviewUrl = (fieldValue: File | string | null) => {
    if (!fieldValue) return null;

    // If it's a File object, use blob URL for preview
    if (fieldValue instanceof File) {
      return blobUrl || URL.createObjectURL(fieldValue);
    }
    // If it's a string (existing file URL), use it directly
    return fieldValue;
  };

  const renderPreviewButton = (fieldValue: File | string | null) => {
    if (compressing) {
      return (
        <Stack direction="row" alignItems="center" spacing={1}>
          <CircularProgress size={16} />
          <Typography variant="caption" color="text.secondary">
            Compressing...
          </Typography>
        </Stack>
      );
    }

    if (!fieldValue) {
      return (
        // <Typography
        //   variant="caption"
        //   sx={{
        //     color: uploadError ? 'error.main' : 'text.secondary',
        //   }}
        // >
        //   Max size: Images (No limit), Documents (5MB)
        // </Typography>
        null
      );
    }

    const fileType = getFileTypeFromExtension(fieldValue);
    if (fileType === 'image' || fileType === 'pdf') {
      return (
        <Button
          onClick={() => handleFilePreview(fieldValue)}
          variant="outlined"
          size="small"
          sx={{ width: 110, fontWeight: 600 }}
        >
          Preview
        </Button>
      );
    }

    return (
      <Typography
        variant="caption"
        sx={{
          color: 'text.secondary',
        }}
      >
        {fieldValue instanceof File ? fieldValue.name : 'File selected'}
      </Typography>
    );
  };

  const renderFileName = (fieldValue: File | string | null) => {
    if (!fieldValue) return null;
    const fileName =
      fieldValue instanceof File
        ? fieldValue.name
        : fieldValue.split('/').pop()?.split('?')[0] || 'File selected';

    return (
      <Typography
        variant="caption"
        sx={{ mt: 0.75, display: 'block', textAlign: 'left', color: 'text.secondary' }}
        noWrap
      >
        Selected file: {fileName}
      </Typography>
    );
  };

  const renderDialogContent = (fieldValue: File | string | null) => {
    if (!fieldValue) return null;

    const previewUrl = getPreviewUrl(fieldValue);
    if (!previewUrl) return null;

    const fileType = getFileTypeFromExtension(fieldValue);

    // Image Preview
    if (fileType === 'image') {
      const entries = previewData || [];
      const hasPreviewData = entries.length > 0;
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
                {hasPreviewData && (
                  <Card
                    sx={{
                      backgroundColor: 'background.paper',
                      boxShadow: 2,
                      width: '100%',
                      maxWidth: { xs: '100%', sm: '600px' },
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
                      <Grid container spacing={1}>
                        {entries.map(({ title, value }, idx) => (
                          <Grid item xs={12} sm={6} key={`${title}-${idx}`}>
                            <Box
                              sx={{
                                p: 0.75,
                                borderRadius: 0.5,
                                backgroundColor: (theme) => alpha(theme.palette.grey[500], 0.04),
                                border: (theme) =>
                                  `1px solid ${alpha(theme.palette.grey[500], 0.12)}`,
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                  backgroundColor: (theme) =>
                                    alpha(theme.palette.primary.main, 0.04),
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
                          </Grid>
                        ))}
                      </Grid>
                    </CardContent>
                  </Card>
                )}
                <Box
                  sx={{
                    height: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    overflow: 'hidden',
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
            height: '80vh',
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
                  <Grid container spacing={1}>
                    {(previewData || []).map(({ title, value }, idx) => (
                      <Grid item xs={6} key={`${title}-${idx}`}>
                        <Box
                          sx={{
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
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            )}
            <Box
              sx={{
                width: '100%',
                height: (previewData || []).length > 0 ? 'calc(80vh - 120px)' : '80vh',
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
                  {renderPreviewButton(field.value)}

                  <Button
                    variant="outlined"
                    component="label"
                    disabled={disabled || compressing}
                    size="small"
                    startIcon={<Iconify icon="eva:cloud-upload-outline" width={16} />}
                    sx={{ width: 110, fontWeight: 600 }}
                  >
                    {field.value ? 'Change' : 'Select File'}
                    <input
                      type="file"
                      hidden
                      accept={accept}
                      value=""
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleFileSelect(file, field.onChange);
                        }
                      }}
                    />
                  </Button>
                </Box>
              </Stack>
            </Box>

            {(!!uploadError || !!error || helperText) && (
              <FormHelperText error={!!(uploadError || error)} sx={{ mx: 0, fontSize: '0.75rem' }}>
                {uploadError || error?.message || helperText}
              </FormHelperText>
            )}
            {/* {renderFileName(field.value)} */}
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
            fullWidth={getFileTypeFromExtension(field.value) === 'pdf'}
            maxWidth={getFileTypeFromExtension(field.value) === 'pdf' ? 'lg' : false}
            PaperProps={{
              sx: {
                ...(getFileTypeFromExtension(field.value) === 'pdf' && {
                  maxHeight: '90vh',
                  height: '80vh',
                }),
                ...(getFileTypeFromExtension(field.value) === 'image' && {
                  width: 'fit-content',
                  height: 'fit-content',
                  maxWidth: '90vw',
                  maxHeight: '90vh',
                  overflow: 'hidden',
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
