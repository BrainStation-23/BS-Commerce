import { Box, Typography } from '@mui/material';
import { useMemo } from 'react';

const { VITE_WEB_ENVIRONMENT } = import.meta.env;

const EnvironmentBanner = () => {
  const environment = useMemo(() => VITE_WEB_ENVIRONMENT, []);
  // console.log('environment', environment);

  if (environment !== 'UAT' && environment !== 'DEV') {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: '9999',
        backgroundColor: environment === 'UAT' ? '#009688' : '#607d8b',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" sx={{ color: '#fff', fontWeight: 'bold' }}>
        {environment}
      </Typography>
    </Box>
  );
};

export default EnvironmentBanner;
