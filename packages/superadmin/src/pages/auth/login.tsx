import { Helmet } from 'react-helmet-async';

import { PROJECT_NAME } from 'src/config-global';
import { LoginView } from 'src/sections/auth';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>{PROJECT_NAME}: Login</title>
      </Helmet>

      <LoginView />
    </>
  );
}
