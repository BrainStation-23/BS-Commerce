import { Button, ButtonProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Iconify from 'src/components/iconify';

type Props = {
  url?: string;
} & ButtonProps;

export default function BackButton({ url, sx, ...other }: Props) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (url) {
      navigate(url);
    } else {
      navigate(-1);
    }
  };

  return (
    <Button
      variant="text"
      color="inherit"
      startIcon={<Iconify icon="eva:arrow-ios-back-fill" />}
      onClick={handleBack}
      sx={{ mb: 2, ...sx }}
      {...other}
    >
      Back
    </Button>
  );
}
