import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import { useEffect, useRef, useState } from 'react';

interface AlertMessageProps {
  message: string | string[];
  severity: 'error' | 'info' | 'success' | 'warning';
}

export default function AlertMessage({ message, severity }: AlertMessageProps) {
  const alertRef = useRef<HTMLDivElement>(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Scroll to error message when it appears, especially for errors
    if (message && severity === 'error' && alertRef.current) {
      // Add a small delay to ensure the DOM has updated
      setTimeout(() => {
        alertRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        });
      }, 100);

      // Show toast notification for errors
      // setShowToast(true);
      const timer = setTimeout(() => setShowToast(false), 5000); // Hide after 5 seconds
      return () => clearTimeout(timer);
    }

    // Return undefined when condition is not met (consistent return)
    return undefined;
  }, [message, severity]);

  if (!message) return null;

  return (
    <>
      {/* Main alert message */}
      <Alert
        ref={alertRef}
        severity={severity}
        sx={{
          mb: 3,
          textAlign: 'start',
          // Add subtle animation for errors to draw attention
          animation: severity === 'error' ? 'shake 0.5s ease-in-out' : 'none',
          '@keyframes shake': {
            '0%, 100%': { transform: 'translateX(0)' },
            '25%': { transform: 'translateX(-5px)' },
            '75%': { transform: 'translateX(5px)' },
          },
        }}
      >
        {Array.isArray(message) ? (
          <Box component="div">
            {message.map((msg, index) => (
              <Box key={index} component="div" sx={{ mb: index < message.length - 1 ? 0.5 : 0 }}>
                {msg}
              </Box>
            ))}
          </Box>
        ) : (
          message
        )}
      </Alert>

      {/* Toast notification for errors */}
      {showToast && severity === 'error' && (
        <Box
          sx={{
            position: 'fixed',
            top: 20,
            right: 20,
            zIndex: 9999,
            animation: 'slideInRight 0.3s ease-out',
            '@keyframes slideInRight': {
              '0%': { transform: 'translateX(100%)', opacity: 0 },
              '100%': { transform: 'translateX(0)', opacity: 1 },
            },
          }}
        >
          <Alert
            severity="error"
            sx={{
              minWidth: 300,
              boxShadow: 3,
              '& .MuiAlert-icon': { fontSize: 24 },
              '& .MuiAlert-message': { fontSize: 14 },
            }}
          >
            {Array.isArray(message) ? message[0] : message}
          </Alert>
        </Box>
      )}
    </>
  );
}
