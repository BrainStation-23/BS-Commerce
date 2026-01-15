import Link from '@mui/material/Link';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { paths } from 'src/routes/paths';

export default function BackToLoginLink() {
  return (
    <Link
      component={RouterLink}
      href={paths.auth.login}
      color="inherit"
      variant="subtitle2"
      sx={{
        alignItems: 'center',
        display: 'inline-flex',
      }}
    >
      <Iconify icon="eva:arrow-ios-back-fill" width={16} />
      Return to sign in
    </Link>
  );
}
