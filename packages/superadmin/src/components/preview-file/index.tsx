import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  CircularProgress,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useMemo, useState, useEffect } from 'react';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

interface FilePreviewProps {
  fileUrl?: string;
  fileName?: string;
  disabled?: boolean;
  buttonVariant?: 'outlined' | 'contained' | 'text';
  buttonSize?: 'small' | 'medium' | 'large';
  buttonSx?: object;
  buttonLabel?: string;
  buttonColor?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  buttonBackgroundColor?: string;
  showButton?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  icon?: string; // New optional icon prop
  iconPosition?: 'start' | 'end'; // New prop for icon position
  // Optional metadata to display above the preview (like OCRFileUpload)
  previewData?: Record<string, string>;
  loading?: boolean;
}

const DEFAULT_PREVIEW_KEYS = ['investor_name', 'units', 'bo_id', 'broker_name', 'fund_symbol'];

export default function FilePreview({
  fileUrl,
  fileName = 'File Preview',
  disabled = false,
  buttonVariant = 'outlined',
  buttonSize = 'small',
  buttonSx = { width: 110, fontWeight: 600 },
  buttonLabel = 'Preview',
  buttonColor = 'primary',
  buttonBackgroundColor,
  showButton = true,
  open: externalOpen,
  onOpenChange,
  icon, // New icon prop
  iconPosition = 'start', // Default icon position
  previewData,
  loading = false,
}: FilePreviewProps) {
  const [internalPreviewOpen, setInternalPreviewOpen] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [imageZoom, setImageZoom] = useState(100);
  const [contentLoading, setContentLoading] = useState(false);

  // Use external open state if provided, otherwise use internal state
  const previewOpen = externalOpen !== undefined ? externalOpen : internalPreviewOpen;

  const previewEntries = useMemo(() => {
    if (!previewData) return [] as { key: string; title: string; value: string }[];

    const entries: { key: string; title: string; value: string }[] = [];

    DEFAULT_PREVIEW_KEYS.forEach((key) => {
      if (key in previewData) {
        const rawValue = previewData[key];
        entries.push({
          key,
          title: key
            .replace(/_/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase()),
          value:
            rawValue !== undefined && rawValue !== null && String(rawValue).trim() !== ''
              ? String(rawValue)
              : '-',
        });
      }
    });

    Object.keys(previewData)
      .filter((key) => !DEFAULT_PREVIEW_KEYS.includes(key))
      .forEach((key) => {
        const rawValue = previewData[key];
        entries.push({
          key,
          title: key
            .replace(/_/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase()),
          value:
            rawValue !== undefined && rawValue !== null && String(rawValue).trim() !== ''
              ? String(rawValue)
              : '-',
        });
      });

    return entries;
  }, [previewData]);

  const hasPreviewEntries = previewEntries.length > 0;

  const renderInfoCard = () => (
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
      <CardContent sx={{ p: { xs: 1, sm: 1.5 }, '&:last-child': { pb: { xs: 1, sm: 1.5 } } }}>
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
          {previewEntries.map(({ key, title, value }, idx) => (
            <Box
              key={`${key}-${idx}`}
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
                  {value}
                </Typography>
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );

  const getFileTypeFromExtension = (url: string) => {
    if (!url) return 'unknown';

    // Remove query parameters and hash fragments first
    const cleanUrl = url.split('?')[0].split('#')[0];

    // Get the file extension from the clean URL
    const extension = cleanUrl.split('.').pop()?.toLowerCase() || '';

    const imageExts = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'];
    const pdfExts = ['pdf'];

    if (imageExts.includes(extension)) return 'image';
    if (pdfExts.includes(extension)) return 'pdf';
    return 'unknown';
  };

  const handlePreview = () => {
    if (fileUrl) {
      setContentError(false);
      if (onOpenChange) {
        onOpenChange(true);
      } else {
        setInternalPreviewOpen(true);
      }
    }
  };

  const closePreview = () => {
    if (onOpenChange) {
      onOpenChange(false);
    } else {
      setInternalPreviewOpen(false);
    }
    setContentError(false);
    setImageZoom(100);
  };

  const handleImageZoomChange = (direction: 'in' | 'out') => {
    setImageZoom((prev) => {
      const delta = 25;
      const next = direction === 'in' ? prev + delta : prev - delta;
      return Math.min(300, Math.max(25, next));
    });
  };

  useEffect(() => {
    // Reset zoom when file changes or dialog is reopened from outside
    setImageZoom(100);
  }, [fileUrl, previewOpen]);

  useEffect(() => {
    // When dialog opens with a file, assume content is loading until we get onLoad/onError
    if (previewOpen && fileUrl) {
      setContentLoading(true);
      setContentError(false);
    } else {
      // When dialog is closed or file is cleared, reset loading/error state
      setContentLoading(false);
      setContentError(false);
    }
  }, [previewOpen, fileUrl]);
  const renderLoadingPreview = (type: 'image' | 'pdf') => (
    <Box
      sx={{
        width: '100%',
        height: '95vh', // make it take most of the dialog height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          justifyContent: 'center',
          p: 2,
          borderRadius: 1,
          boxShadow: type === 'pdf' ? 'none' : 2,
          backgroundColor: (theme) => theme.palette.background.paper,
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
  );
  const renderDialogContent = () => {
    if (!fileUrl) return null;

    const fileType = getFileTypeFromExtension(fileUrl);

    if (loading) {
      return renderLoadingPreview(fileType as 'image' | 'pdf');
    }

    // Unsupported file type or content loading error
    if (fileType === 'unknown' || contentError) {
      return (
        <>
          <DialogTitle sx={{ m: 0, p: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton
              aria-label="close"
              onClick={closePreview}
              sx={{
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <Iconify icon="eva:close-fill" />
            </IconButton>
          </DialogTitle>
          <DialogContent
            dividers
            sx={{
              px: 3,
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Preview not available
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {fileType === 'unknown'
                ? 'This file type is not supported for preview.'
                : 'The file could not be loaded. Please check the URL or try again later.'}
            </Typography>
          </DialogContent>
        </>
      );
    }

    // Image Preview
    if (fileType === 'image') {
      return (
        <Box
          sx={{
            position: 'relative',
            p: { xs: 1, sm: 2 },
            // Ensure a fixed minimum area so the loader can be truly centered
            minWidth: contentLoading ? 360 : undefined,
            minHeight: contentLoading ? 360 : undefined,
          }}
        >
          {contentLoading && (
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 30,
                mt: 5,
                backgroundColor: (theme) => alpha(theme.palette.background.default, 0.6),
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  justifyContent: 'center',
                  p: 2,
                  // borderRadius: 1,
                  // boxShadow: 2,
                  backgroundColor: (theme) => theme.palette.background.paper,
                }}
              >
                <CircularProgress size={20} />
                <Typography
                  variant="caption"
                  sx={{ fontSize: '0.7rem', color: 'text.secondary', fontWeight: 500 }}
                >
                  Loading ...
                </Typography>
              </Box>
            </Box>
          )
          }
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
              {hasPreviewEntries && renderInfoCard()}
              <Box
                sx={{
                  height: 'auto',
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  overflow: 'auto',
                  maxHeight: hasPreviewEntries ? 'calc(95vh - 180px)' : '95vh',
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
                    src={fileUrl}
                    alt={fileName}
                    style={{
                      display: 'block',
                      height: 'auto',
                      width: '100%',
                      maxWidth: '100%',
                      maxHeight: 'calc(90vh - 200px)',
                      objectFit: 'contain',
                    }}
                    onLoad={() => {
                      setContentError(false);
                      setContentLoading(false);
                    }}
                    onError={() => {
                      setContentError(true);
                      setContentLoading(false);
                    }}
                  />
                </Box>
              </Box>
              {!contentLoading && (
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
        </Box >
      );
    }

    // PDF Preview
    if (fileType === 'pdf') {
      return (
        <>
          <DialogTitle sx={{ m: 0, p: 0, display: 'none' }} />
          <DialogContent
            dividers
            sx={{
              p: 0,
              height: 'auto',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              position: 'relative',
              // Give the PDF container a consistent area while loading
              minHeight: contentLoading ? '60vh' : undefined,
              minWidth: contentLoading ? 480 : undefined,
            }}
          >
            {contentLoading && (
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 30,
                  backgroundColor: (theme) => alpha(theme.palette.background.default, 0.6),
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    justifyContent: 'center',
                    p: 2,
                    // borderRadius: 1,
                    // boxShadow: 2,
                    backgroundColor: (theme) => theme.palette.background.paper,
                  }}
                >
                  <CircularProgress size={20} />
                  <Typography
                    variant="caption"
                    sx={{ fontSize: '0.7rem', color: 'text.secondary', fontWeight: 500 }}
                  >
                    Loading ...
                  </Typography>
                </Box>
              </Box>
            )}
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
            <Box sx={{ overflow: 'auto', flex: 1, px: { xs: 1, sm: 2 }, pb: 2, pt: 0 }}>
              <Stack spacing={2}>
                {hasPreviewEntries && renderInfoCard()}
                <Box
                  sx={{
                    width: '100%',
                    height: hasPreviewEntries ? 'calc(95vh - 120px)' : '95vh',
                  }}
                >
                  <iframe
                    src={fileUrl}
                    width="100%"
                    height="100%"
                    title="Document Preview"
                    style={{
                      border: 'none',
                      display: 'block',
                    }}
                    onLoad={() => {
                      setContentError(false);
                      setContentLoading(false);
                    }}
                    onError={() => {
                      setContentError(true);
                      setContentLoading(false);
                    }}
                  />
                </Box>
              </Stack>
            </Box>
          </DialogContent>
        </>
      );
    }

    return null;
  };

  const getDialogProps = () => {
    if (!fileUrl) return {};

    const fileType = getFileTypeFromExtension(fileUrl);

    if (fileType === 'pdf') {
      return {
        fullWidth: true,
        maxWidth: 'lg' as const,
        PaperProps: {
          sx: {
            maxHeight: '95vh',
            height: '95vh',
          },
        },
      };
    }

    if (fileType === 'image') {
      return {
        fullWidth: false,
        maxWidth: false as const,
        PaperProps: {
          sx: {
            width: 'fit-content',
            height: 'fit-content',
            maxWidth: '90vw',
            maxHeight: '95vh',
            overflow: 'hidden',
            margin: 'auto',
          },
        },
      };
    }

    // Default for unknown types
    return {
      fullWidth: true,
      maxWidth: 'sm' as const,
    };
  };

  // Render button with optional icon
  const renderButton = () => {
    if (!showButton) return null;

    const buttonProps = {
      onClick: handlePreview,
      variant: buttonVariant,
      size: buttonSize,
      disabled,
      sx: buttonSx,
      color: buttonColor,
      style: buttonBackgroundColor ? { backgroundColor: buttonBackgroundColor } : undefined,
    };

    if (icon) {
      return (
        <Button
          {...buttonProps}
          startIcon={iconPosition === 'start' ? <Iconify icon={icon} /> : undefined}
          endIcon={iconPosition === 'end' ? <Iconify icon={icon} /> : undefined}
        >
          {buttonLabel}
        </Button>
      );
    }

    return <Button {...buttonProps}>{buttonLabel}</Button>;
  };

  if (!fileUrl) return null;

  return (
    <>
      {renderButton()}

      <Dialog open={previewOpen} onClose={closePreview} {...getDialogProps()}>
        {renderDialogContent()}
      </Dialog>
    </>
  );
}



