import { LoadingButton } from '@mui/lab';
import { Dialog, DialogActions, DialogContent, DialogTitle, SxProps, Theme } from '@mui/material';
import React, { ReactNode } from 'react';

// ----------------------------------------------------------------------

export interface ModalButton {
  text: string;
  onClick: () => void;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  loading?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
}

export interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  buttons?: ModalButton[];
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  disableBackdropClick?: boolean;
  disableEscapeKeyDown?: boolean;
  keepMounted?: boolean;
  titleSx?: SxProps<Theme>;
  contentSx?: SxProps<Theme>;
  actionsSx?: SxProps<Theme>;
  dialogSx?: SxProps<Theme>;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  onClose,
  title,
  subtitle,
  children,
  buttons = [],
  maxWidth = 'sm',
  fullWidth = true,
  disableBackdropClick = false,
  disableEscapeKeyDown = false,
  keepMounted = false,
  titleSx,
  contentSx,
  actionsSx,
  dialogSx,
  'aria-labelledby': ariaLabelledby,
  'aria-describedby': ariaDescribedby,
}) => {
  const handleClose = (event: React.SyntheticEvent, reason: string) => {
    if (disableBackdropClick && reason === 'backdropClick') {
      return;
    }
    if (disableEscapeKeyDown && reason === 'escapeKeyDown') {
      return;
    }
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      keepMounted={keepMounted}
      aria-labelledby={ariaLabelledby || 'reusable-modal-title'}
      aria-describedby={ariaDescribedby || 'reusable-modal-description'}
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: 2,
        },
        ...dialogSx,
      }}
    >
      {(title || subtitle) && (
        <DialogTitle
          id="reusable-modal-title"
          sx={{
            textAlign: 'start',
            pb: subtitle ? 1 : 2,
            ...titleSx,
          }}
        >
          {title}
          {subtitle && (
            <div
              style={{
                fontSize: '0.875rem',
                color: 'rgba(0, 0, 0, 0.6)',
                fontWeight: 'normal',
                marginTop: '4px',
              }}
            >
              {subtitle}
            </div>
          )}
        </DialogTitle>
      )}

      <DialogContent
        id="reusable-modal-description"
        sx={{
          textAlign: 'start',
          pt: title || subtitle ? 0 : 2,
          ...contentSx,
        }}
      >
        {children}
      </DialogContent>

      {buttons.length > 0 && (
        <DialogActions
          sx={{
            justifyContent: 'end',
            gap: 1,
            px: 3,
            pb: 3,
            ...actionsSx,
          }}
        >
          {buttons.map((button, index) => (
            <LoadingButton
              key={index}
              onClick={button.onClick}
              variant={button.variant || 'outlined'}
              color={button.color || 'primary'}
              disabled={button.disabled}
              autoFocus={button.autoFocus}
              loading={button.loading}
              type="button"
            >
              {button.text}
            </LoadingButton>
          ))}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default CustomModal;
