import { Helmet } from 'react-helmet-async';
import { PROJECT_NAME } from 'src/config-global';
import ForgotPasswordView from 'src/sections/auth/forgot-password/view/forgot-password-view';

export default function ForgotPasswordPage() {
  return (
    <>
      <Helmet>
        <title>{PROJECT_NAME}: Forgot Password</title>
      </Helmet>

      <ForgotPasswordView />
    </>
  );
}
