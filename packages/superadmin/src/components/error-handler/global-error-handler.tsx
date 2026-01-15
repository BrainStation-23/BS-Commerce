import { Dialog, DialogContent } from '@mui/material';
import { useEffect, useState } from 'react';

// sections
import { View403 } from 'src/sections/error';

// ----------------------------------------------------------------------

export default function GlobalErrorHandler() {
  const [showAccessDenied, setShowAccessDenied] = useState(false);
  // We store error details for potential future enhancements
  const [, setErrorDetails] = useState<{ path: string; message: string } | null>(null);

  useEffect(() => {
    const handleAccessDenied = (event: CustomEvent) => {
      setErrorDetails(event.detail);
      setShowAccessDenied(true);
    };

    window.addEventListener('access-denied', handleAccessDenied as EventListener);

    return () => {
      window.removeEventListener('access-denied', handleAccessDenied as EventListener);
    };
  }, []);

  if (!showAccessDenied) return null;

  return (
    <Dialog
      open={showAccessDenied}
      fullWidth
      maxWidth="md"
      onClose={() => setShowAccessDenied(false)}
    >
      <DialogContent>
        <View403 />
      </DialogContent>
    </Dialog>
  );
}
