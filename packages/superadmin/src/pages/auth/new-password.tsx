import { Helmet } from 'react-helmet-async';
import { PROJECT_NAME } from 'src/config-global';
import NewPasswordView from 'src/sections/auth/new-password/view/new-password-view';

export default function NewPasswordPage() {
  return (
    <>
      <Helmet>
        <title>{PROJECT_NAME}: Reset Password</title>
      </Helmet>

      <NewPasswordView />
    </>
  );
}
