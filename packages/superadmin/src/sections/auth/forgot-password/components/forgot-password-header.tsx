import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PasswordIcon } from 'src/assets/icons';

export default function ForgotPasswordHeader() {
  return (
    <>
      <PasswordIcon sx={{ height: 96 }} />

      <Stack spacing={1} sx={{ mt: 3, mb: 5 }}>
        <Typography variant="h3">Forgot your password?</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Please enter the email address associated with your account and We will email you a link
          to reset your password.
        </Typography>
      </Stack>
    </>
  );
}
