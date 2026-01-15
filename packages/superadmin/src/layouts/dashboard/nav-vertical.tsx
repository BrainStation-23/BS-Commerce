import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';

import { usePathname } from 'src/routes/hooks';

import { useResponsive } from 'src/hooks/use-responsive';

import { useAuthContext } from 'src/auth/hooks';

import Logo from 'src/components/logo';
import { NavSectionVertical } from 'src/components/nav-section';
import Scrollbar from 'src/components/scrollbar';

import NavToggleButton from '../common/nav-toggle-button';
import { NAV } from '../config-layout';
import { useNavData } from './config-navigation';

// ----------------------------------------------------------------------

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function NavVertical({ openNav, onCloseNav }: Props) {
  const { user } = useAuthContext();
  const pathname = usePathname();

  const lgUp = useResponsive('up', 'lg');

  const navData = useNavData();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: 2,
        },
        '& .simplebar-mask': {
          zIndex: 'inherit',
          overflow: 'auto !important',
        },
        '& .simplebar-content-wrapper': {
          height: '100%',
          overflow: 'auto !important',
        },
      }}
    >
      <Logo sx={{ mt: 1, ml: 1.5, mb: 1 }} />

      <NavSectionVertical
        data={navData}
      />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_VERTICAL },
      }}
    >
      <NavToggleButton />

      {lgUp ? (
        <Stack
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.W_VERTICAL,
            // paddingBottom: 2,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
            boxShadow: (theme) => `4px 0 8px ${theme.palette.grey[200]}`,
          }}
        >
          {renderContent}
        </Stack>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.W_VERTICAL,
              marginBottom: 2,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
