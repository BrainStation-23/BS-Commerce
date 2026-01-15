/* eslint-disable react/jsx-no-useless-fragment */
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Box,
  Button,
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
import { MAX_FILE_SIZE_KB, MAX_IMAGE_SIZE_KB } from 'src/config-global';
import { compressImageIfNeeded, ImageType, isImageFile } from 'src/utils/compress-image';

// ----------------------------------------------------------------------

interface FileUploadWithCompressionProps extends Omit<FormControlLabelProps, 'control'> {
  name: string;
  label: string;
  accept?: string;
  disabled?: boolean;
  helperText?: string;
  maxSizeKB?: number;
  isRequired?: boolean;

  /** Enable automatic image compression */
  enableCompression?: boolean;

  /** Compression quality (0-1) */
  compressionQuality?: number;

  /** Maximum width for compressed image */
  maxWidth?: number;

  /** Maximum height for compressed image */
  maxHeight?: number;

  /** Only compress images larger than this threshold (in MB) */
  compressThresholdMB?: number;

  /** Image type for intelligent compression */
  imageType?: ImageType;

  onFileSelect?: (file: File) => void;
}

export default function FileUploadWithCompression({
  name,
  label,
  accept = 'image/*,.pdf',
  disabled = false,
  helperText,
  maxSizeKB = 5120, // 5MB default
  isRequired = false,
  enableCompression = true,
  compressionQuality = 0.8,
  maxWidth = 1920,
  maxHeight = 1080,
  compressThresholdMB = 1,
  imageType = ImageType.PHOTO,
  onFileSelect,
}: FileUploadWithCompressionProps) {
  const { control } = useFormContext();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [blobUrl, setBlobUrl] = useState<string>('');
  const [compressing, setCompressing] = useState(false);

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
      setCompressing(true);

      // Determine max size based on file type
      const isImage = isImageFile(file);
      const fileMaxSizeKB = isImage ? MAX_IMAGE_SIZE_KB : MAX_FILE_SIZE_KB;

      // Step 1: Validate original file size before compression (only for non-images)
      if (!isImage && file.size > fileMaxSizeKB * 1024) {
        const fileSizeMB = (file.size / 1024 / 1024).toFixed(2);
        const maxSizeMB = (fileMaxSizeKB / 1024).toFixed(2);
        console.warn(
          `Original file size (${fileSizeMB} MB) exceeds maximum allowed size (${maxSizeMB} MB)`
        );
        alert(
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
            processedFile = await compressImageIfNeeded(file, compressThresholdMB, {
              imageType,
              quality: compressionQuality,
              maxWidth,
              maxHeight,
            });

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
      onFileSelect,
      enableCompression,
      compressionQuality,
      maxWidth,
      maxHeight,
      compressThresholdMB,
      imageType,
    ]
  );

  const getFileTypeFromExtension = (file: File | string | null): 'image' | 'pdf' | 'unknown' => {
    if (!file) return 'unknown';

    const fileName = typeof file === 'string' ? file : file.name;
    const extension = fileName.split('.').pop()?.toLowerCase();

    if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'].includes(extension || '')) {
      return 'image';
    }
    if (extension === 'pdf') {
      return 'pdf';
    }
    return 'unknown';
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / k ** i).toFixed(2))} ${sizes[i]}`;
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const { value, onChange } = field;
        const fileType = getFileTypeFromExtension(value);

        return (
          <Box>
            <Stack spacing={1}>
              {/* Label */}
              <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                {label}
                {isRequired && (
                  <Typography component="span" sx={{ color: 'error.main', ml: 0.5 }}>
                    *
                  </Typography>
                )}
              </Typography>

              {/* Upload Area */}
              <Box
                sx={{
                  position: 'relative',
                  border: '1px dashed',
                  borderColor: error ? 'error.main' : 'divider',
                  borderRadius: 1,
                  p: 2,
                  bgcolor: disabled ? 'action.disabledBackground' : 'background.paper',
                  '&:hover': {
                    borderColor: disabled ? 'divider' : 'primary.main',
                    bgcolor: disabled ? 'action.disabledBackground' : alpha('#919EAB', 0.08),
                  },
                }}
              >
                {(() => {
                  if (compressing) {
                    return (
                      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                        <CircularProgress size={40} />
                        <Typography variant="body2" color="text.secondary">
                          Processing...
                        </Typography>
                      </Box>
                    );
                  }

                  if (value) {
                    return (
                      /* File Selected */
                      <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <UploadFileIcon sx={{ color: 'text.secondary' }} />
                          <Box>
                            <Typography variant="body2" noWrap>
                              {typeof value === 'string' ? value.split('/').pop() : value.name}
                            </Typography>
                            {typeof value !== 'string' && (
                              <Typography variant="caption" color="text.secondary">
                                {formatFileSize(value.size)}
                              </Typography>
                            )}
                          </Box>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                          {fileType !== 'unknown' && (
                            <IconButton
                              size="small"
                              onClick={() => setPreviewOpen(true)}
                              disabled={disabled}
                            >
                              <VisibilityIcon fontSize="small" />
                            </IconButton>
                          )}
                          <IconButton
                            size="small"
                            color="error"
                            onClick={() => {
                              onChange(null);
                              setBlobUrl('');
                            }}
                            disabled={disabled}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Stack>
                      </Stack>
                    );
                  }

                  return (
                    /* No File Selected */
                    <Button
                      component="label"
                      variant="text"
                      disabled={disabled}
                      fullWidth
                      sx={{ justifyContent: 'flex-start' }}
                    >
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <UploadFileIcon />
                        <Typography variant="body2">Click to upload or drag and drop</Typography>
                      </Stack>
                      <input
                        type="file"
                        accept={accept}
                        hidden
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleFileSelect(file, onChange);
                          }
                        }}
                        disabled={disabled}
                      />
                    </Button>
                  );
                })()}
              </Box>

              {/* Helper Text / Error Message */}
              {(helperText || error) && (
                <FormHelperText error={!!error}>
                  {error ? error.message : helperText}
                </FormHelperText>
              )}
            </Stack>

            {/* Preview Dialog */}
            <Dialog
              open={previewOpen}
              onClose={() => setPreviewOpen(false)}
              fullWidth={fileType === 'pdf'}
              maxWidth={fileType === 'pdf' ? 'lg' : false}
              PaperProps={{
                sx: {
                  ...(fileType === 'pdf' && {
                    maxHeight: '90vh',
                    height: '80vh',
                  }),
                  ...(fileType === 'image' && {
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
              {fileType === 'image' ? (
                <Box sx={{ position: 'relative', p: 2, height: 'auto', overflow: 'auto' }}>
                  <IconButton
                    aria-label="close"
                    onClick={() => setPreviewOpen(false)}
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
                    <CloseIcon />
                  </IconButton>
                  <Box sx={{ display: 'inline-block', height: 'auto' }}>
                    <Stack spacing={2}>
                      <Box sx={{ height: 'auto', display: 'flex', justifyContent: 'center' }}>
                        <Box
                          component="img"
                          src={blobUrl || (typeof value === 'string' ? value : '')}
                          alt="Preview"
                          sx={{
                            display: 'block',
                            height: 'auto',
                            width: 'auto',
                            maxWidth: '90vw',
                            maxHeight: '90vh',
                            objectFit: 'contain',
                          }}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              ) : (
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
                      onClick={() => setPreviewOpen(false)}
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
                      <CloseIcon />
                    </IconButton>
                    <Box sx={{ overflow: 'auto', flex: 1, px: 2, pb: 2, pt: 0 }}>
                      <Box
                        sx={{
                          width: '100%',
                          height: '80vh',
                        }}
                      >
                        <Box
                          component="iframe"
                          src={blobUrl || (typeof value === 'string' ? value : '')}
                          title="Document Preview"
                          sx={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            display: 'block',
                          }}
                        />
                      </Box>
                    </Box>
                  </DialogContent>
                </>
              )}
            </Dialog>
          </Box>
        );
      }}
    />
  );
}
