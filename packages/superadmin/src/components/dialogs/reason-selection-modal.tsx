import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

// ----------------------------------------------------------------------

export type ReasonOption = {
  value: string;
  label: string;
};

type Props = {
  open: boolean;
  onCancel: () => void;
  onConfirm: (reason: string) => void;
  loading?: boolean;
  title?: string;
  contentText?: string;
  confirmText?: string;
  reasonOptions?: ReasonOption[];
  placeholder?: string;
  required?: boolean;
};

export default function ReasonSelectionModal({
  open,
  onCancel,
  onConfirm,
  loading = false,
  title,
  contentText,
  confirmText,
  reasonOptions = [],
  placeholder = 'Please provide a reason...',
  required = true,
}: Props) {
  const [selectedReason, setSelectedReason] = useState('');
  const [customReason, setCustomReason] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleReasonChange = (event: any) => {
    const { value } = event.target;
    setSelectedReason(value);

    if (value === 'other') {
      setShowCustomInput(true);
    } else {
      setShowCustomInput(false);
      setCustomReason('');
    }
  };

  const handleCustomReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomReason(event.target.value);
  };

  const handleConfirm = () => {
    let finalReason = '';
    if (reasonOptions.length === 0) {
      finalReason = customReason;
    } else {
      finalReason = selectedReason === 'other' ? customReason : selectedReason;
    }
    onConfirm(finalReason);
  };

  const handleCancel = () => {
    setSelectedReason('');
    setCustomReason('');
    setShowCustomInput(false);
    onCancel();
  };

  const isConfirmDisabled = () => {
    if (!required) return loading;

    if (reasonOptions.length > 0) {
      if (selectedReason === 'other') {
        return !customReason.trim() || loading;
      }
      return !selectedReason || loading;
    }

    return !customReason.trim() || loading;
  };

  return (
    <Dialog open={open} onClose={handleCancel} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h6">{title || 'Confirm Action'}</Typography>
      </DialogTitle>

      <DialogContent>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {contentText || 'Please provide a reason for this action.'}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {reasonOptions.length > 0 && (
            <FormControl fullWidth>
              <InputLabel>Select Reason</InputLabel>
              <Select
                value={selectedReason}
                onChange={handleReasonChange}
                disabled={loading}
                label="Select Reason"
              >
                {reasonOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
                <MenuItem value="other">Other reason</MenuItem>
              </Select>
            </FormControl>
          )}

          {(showCustomInput || reasonOptions.length === 0) && (
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder={placeholder}
              value={customReason}
              onChange={handleCustomReasonChange}
              disabled={loading}
              required={required}
              label={reasonOptions.length > 0 ? 'Custom Reason' : 'Reason'}
            />
          )}
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'end' }}>
        <Button variant="outlined" onClick={handleCancel} disabled={loading}>
          Cancel
        </Button>
        <LoadingButton
          variant="contained"
          color="error"
          onClick={handleConfirm}
          loading={loading}
          disabled={isConfirmDisabled()}
        >
          {confirmText || 'Confirm'}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
