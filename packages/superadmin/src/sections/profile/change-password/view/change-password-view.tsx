import { Container } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { paths } from 'src/routes/paths';
import { ChangePasswordForm } from 'src/sections/profile/change-password/components';

export default function ChangePasswordView() {
  return (
    <Container maxWidth="sm" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', ml: 0 }}>
      <CustomBreadcrumbs
        heading="Change Password"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },

          { name: 'Change Password' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      <ChangePasswordForm />
    </Container>
  );
}
