import { Helmet } from 'react-helmet-async';
import { ChangePasswordView } from 'src/sections/profile/change-password';

// ----------------------------------------------------------------------

export default function ChangePasswordPage() {
  return (
    <>
      <Helmet>
        <title>Profile: Change Password</title>
      </Helmet>
      <ChangePasswordView />
    </>
  );
}
