import { memo } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';

import { useAuthContext } from 'src/auth/hooks';
import { bgBlur } from 'src/theme/css';

import { NavSectionHorizontal } from 'src/components/nav-section';
import Scrollbar from 'src/components/scrollbar';

import HeaderShadow from '../common/header-shadow';
import { HEADER } from '../config-layout';
import { useNavData } from './config-navigation';

// ----------------------------------------------------------------------

function NavHorizontal() {
  const theme = useTheme();
  const { user } = useAuthContext();

  const navData = useNavData();

  return (
    <AppBar
      component="div"
      sx={{
        top: HEADER.H_DESKTOP_OFFSET,
      }}
    >
      <Toolbar
        sx={{
          ...bgBlur({
            color: theme.palette.background.default,
          }),
        }}
      >
        <Scrollbar
          sx={{
            '& .simplebar-content': {
              display: 'flex',
            },
          }}
        >
          <NavSectionHorizontal
            data={navData}
            slotProps={{
              currentRole: user?.role,
            }}
            sx={{
              ...theme.mixins.toolbar,
            }}
          />
        </Scrollbar>
      </Toolbar>

      <HeaderShadow />
    </AppBar>
  );
}

export default memo(NavHorizontal);
