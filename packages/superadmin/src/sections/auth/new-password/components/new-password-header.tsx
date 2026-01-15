import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { NewPasswordIcon } from 'src/assets/icons';

export default function NewPasswordHeader() {
  return (
    <>
      <NewPasswordIcon sx={{ height: 96 }} />

      <Stack spacing={1} sx={{ mt: 3, mb: 5 }}>
        <Typography variant="h3">Please fill the fields below to update your password</Typography>
      </Stack>
    </>
  );
}
