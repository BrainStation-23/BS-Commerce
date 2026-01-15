import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useOrganizationContext } from 'src/organization/hooks';

const BusinessDateBanner = () => {
  const { organization } = useOrganizationContext();

  const businessDate = organization?.business_date
    ? dayjs(organization.business_date).format('DD-MMM-YYYY')
    : null;

  if (!businessDate) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          fontWeight: '500',
          fontSize: '0.875rem',
          letterSpacing: '0.3px',
          whiteSpace: 'nowrap',
          lineHeight: 1.2,
        }}
      >
        Business Day: {businessDate}
      </Typography>
    </Box>
  );
};

export default BusinessDateBanner;
