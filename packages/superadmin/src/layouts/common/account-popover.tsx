import { m } from 'framer-motion';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'src/routes/hooks';
import { paths } from 'src/routes/paths';

import { useAuthContext } from 'src/auth/hooks';
import { varHover } from 'src/components/animate';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

export default function AccountPopover() {
  const router = useRouter();
  const { user } = useAuthContext();

  const queryClient = useQueryClient();

  // For display purposes: use profile set in AuthProvider (initialize -> /me)
  const firstName = (user?.firstName || '').trim();
  const lastName = (user?.lastName || '').trim();
  const displayName = (user?.displayName || '').trim();

  const userFullName =
    [firstName, lastName].filter(Boolean).join(' ').trim() ||
    displayName ||
    (user && user.name ? `${user.name}` : 'User');

  const userEmail = (user?.email as string) || (user && (user.email as string)) || '';

  const { logout } = useAuthContext();

  const popover = usePopover();

  const handleLogout = async () => {
    try {
      await logout();
      queryClient.clear(); // Invalidate all React Query caches after logout
      popover.onClose();
      router.push(paths.auth.login);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        sx={{
          width: 40,
          height: 40,
          background: (theme) => alpha(theme.palette.grey[500], 0.08),
          ...(popover.open && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }),
        }}
      >
        <Avatar
          src={user?.photoURL}
          alt={userFullName}
          sx={{
            width: 36,
            height: 36,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
          }}
        >
          {userFullName.charAt(0).toUpperCase()}
        </Avatar>
      </IconButton>

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 280, p: 0 }}>
        <Box sx={{ p: 2, pb: 1.5 }}>
          <Typography variant="subtitle1" noWrap fontWeight="bold">
            {userFullName}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {userEmail}
          </Typography>
        </Box>
        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem
          onClick={() => router.push(paths.profile.changePassword)}
          sx={{ m: 1, fontWeight: 'fontWeightBold', color: 'primary.main' }}
        >
          Change Password
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem
          onClick={handleLogout}
          sx={{ m: 1, fontWeight: 'fontWeightBold', color: 'error.main' }}
        >
          Logout
        </MenuItem>
      </CustomPopover>
    </>
  );
}
