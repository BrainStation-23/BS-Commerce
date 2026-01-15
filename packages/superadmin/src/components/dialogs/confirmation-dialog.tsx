import { LoadingButton } from '@mui/lab';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React from 'react';

type DialogType =
  | 'delete'
  | 'edit'
  | 'default'
  | 'enable'
  | 'disable'
  | 'rollback'
  | 'approve'
  | 'reject'
  | 'create';

type DeleteConfirmDialogProps = {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  header?: string | any;
  subHeader?: string;
  contentText?: string | any;
  dialogType?: DialogType;
  isLoading?: boolean;
};

const ConfirmDialog: React.FC<DeleteConfirmDialogProps> = ({
  open,
  onCancel,
  onConfirm,
  header,
  contentText,
  subHeader,
  dialogType = 'default',
  isLoading = false,
}) => {
  // Determine button color based on dialog type
  const getButtonColor = () => {
    switch (dialogType) {
      case 'delete':
      case 'rollback':
        return 'error';
      case 'edit':
        return 'primary';
      case 'enable':
        return 'success';
      case 'disable':
        return 'error';
      case 'reject':
        return 'error';
      case 'create':
        return 'success';
      default:
        return 'primary';
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" sx={{ textAlign: 'start' }}>
        {header ?? 'Are you sure?'}
      </DialogTitle>
      <DialogContent sx={{ textAlign: 'start' }}>
        {subHeader && (
          <DialogContentText id="alert-dialog-description">{subHeader}</DialogContentText>
        )}
        {contentText && (
          <DialogContentText id="alert-dialog-description" sx={{ marginTop: subHeader ? 1 : 0 }}>
            {contentText}
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'end' }}>
        <Button onClick={onCancel} variant="outlined">
          Cancel
        </Button>
        <LoadingButton
          onClick={onConfirm}
          variant="contained"
          color={getButtonColor()}
          autoFocus
          loading={isLoading}
          type="button"
        >
          {(() => {
            switch (dialogType) {
              case 'delete':
                return 'Delete';
              case 'enable':
                return 'Enable';
              case 'disable':
                return 'Disable';
              case 'rollback':
                return 'Rollback';
              case 'approve':
                return 'Approve';
              case 'reject':
                return 'Reject';
              case 'create':
                return 'Create';
              default:
                return 'Confirm';
            }
          })()}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
