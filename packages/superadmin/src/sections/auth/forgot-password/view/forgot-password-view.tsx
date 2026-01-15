import Stack from '@mui/material/Stack';
import BackToLoginLink from 'src/components/back-to-login-link';
import {
  ForgotPasswordForm,
  ForgotPasswordHeader,
} from 'src/sections/auth/forgot-password/components';

export default function ForgotPasswordView() {
  return (
    <>
      <ForgotPasswordHeader />

      <ForgotPasswordForm />

      <Stack alignItems="center" sx={{ mt: 3 }}>
        <BackToLoginLink />
      </Stack>
    </>
  );
}
