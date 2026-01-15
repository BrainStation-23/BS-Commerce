import { Stack } from '@mui/material';
import BackToLoginLink from 'src/components/back-to-login-link';
import { NewPasswordForm, NewPasswordHeader } from 'src/sections/auth/new-password/components';

export default function NewPasswordView() {
  return (
    <>
      <NewPasswordHeader />

      <NewPasswordForm />
      <Stack alignItems="center" sx={{ mt: 3 }}>
        <BackToLoginLink />
      </Stack>
    </>
  );
}
