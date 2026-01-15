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
import { useSnackbar } from 'src/components/snackbar';
import { MAX_FILE_SIZE_KB, MAX_IMAGE_SIZE_KB } from 'src/config-global';
import { useUploadMedia } from 'src/query/hooks/configuration/media';
import {
  compressImageIfNeeded,
  CompressionMode,
  ImageType,
  isImageFile,
} from 'src/utils/compress-image';
import { formatErrorMessage } from 'src/utils/format-error-message';

// ----------------------------------------------------------------------

type PreviewEntry = { title: string; value: string };

export enum FeatureName {
  MEDIA = 'media',
  PROFILE = 'profile',
  INVESTOR_PROFILE = 'profile', // TODO: change to investor/profile
  INVESTOR_DOCUMENT = 'investor/nid', // TODO: change to investor/document
  INVESTMENT = 'investment',
  SURRENDER_DP40_FILE = 'surrender/dp40_file',
}

interface AWSFileUploadProps extends Omit<FormControlLabelProps, 'control'> {
  name: string;
  label: string;
  featureName: FeatureName;
  accept?: string;
  disabled?: boolean;
  helperText?: React.ReactNode | string;
  maxSizeKB?: number;
  isRequired?: boolean;

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
  imageType?: ImageType;

  /** Preview data to display on top of image preview */
  previewData?: PreviewEntry[];
}

export default function AWSFileUpload({
  name,
  label,
  featureName,
  accept = '*/*',
  disabled = false,
  helperText,
  maxSizeKB = MAX_FILE_SIZE_KB, // Use global config (5MB default)
  isRequired = false,
  enableCompression = true,
  compressionQuality = 0.8,
  scalePercentage = 80,
  maxWidth,
  maxHeight,
  compressionMode = CompressionMode.PERCENTAGE,
  compressThresholdMB = 1,
  imageType = ImageType.PHOTO,
  previewData,
}: AWSFileUploadProps) {
  const { control } = useFormContext();
  const { enqueueSnackbar } = useSnackbar();
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | string[]>('');
  const [previewOpen, setPreviewOpen] = useState(false);
  const [blobUrl, setBlobUrl] = useState<string>(''); // For newly uploaded files
  const [blobIsImage, setBlobIsImage] = useState<boolean | null>(null); // Minimal flag for blob type
  const [compressing, setCompressing] = useState(false);
  const [imageZoom, setImageZoom] = useState(100);
  const uploadMediaMutation = useUploadMedia();

  // Clean up blob URL to prevent memory leaks
  useEffect(
    () => () => {
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
      }
    },
    [blobUrl]
  );

  const handleFileUpload = useCallback(
    async (file: File, onChange: (value: string) => void) => {
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
          console.log('Compressing image before AWS upload...');

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
        setBlobIsImage((processedFile.type || '').startsWith('image/'));

        setCompressing(false);
        setUploading(true);

        const response = await uploadMediaMutation.mutateAsync({
          file: processedFile,
          feature_name: featureName,
        });

        if (response.data && response.data.key) {
          onChange(response.data.key); // Store the file key
          // enqueueSnackbar('File uploaded successfully', { variant: 'success' });
        } else {
          throw new Error('No file data returned from upload');
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
      }
    },
    [
      imageType,
      uploadMediaMutation,
      enqueueSnackbar,
      featureName,
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

  const getFileTypeFromExtension = (url: string) => {
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

  const handleFilePreview = (fieldValue: string) => {
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

  const getPreviewUrl = (fieldValue: string) => {
    // If newly uploaded file, use blob URL for preview
    if (blobUrl) return blobUrl;
    // If existing file (from form), use it directly as complete URL
    return fieldValue;
  };

  const renderDialogContent = (fieldValue: string) => {
    const previewUrl = getPreviewUrl(fieldValue);
    if (!previewUrl) return null;

    const fileType = getFileTypeFromExtension(previewUrl);

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
              {compressing || uploading ? (
                <Stack flexDirection="row" alignItems="center" justifyContent="center" spacing={2}>
                  <CircularProgress size={18} />
                  <Typography variant="body2" color="text.secondary">
                    Uploading...
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
                        onClick={field.value ? () => handleFilePreview(field.value) : undefined}
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
                  maxHeight: '90vh',
                  height: '80vh',
                }),
                ...(getFileTypeFromExtension(getPreviewUrl(field.value)) === 'image' && {
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
