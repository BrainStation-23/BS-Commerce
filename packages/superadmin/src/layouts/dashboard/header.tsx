import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';

import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import BusinessDateBanner from 'src/components/business-date-banner/business-date-banner';
import Logo from 'src/components/logo';
import { useSettingsContext } from 'src/components/settings';
import SvgColor from 'src/components/svg-color';

import AccountPopover from 'src/layouts/common/account-popover';
import { HEADER, NAV } from 'src/layouts/config-layout';

// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
};

export default function Header({ onOpenNav }: Props) {
  const theme = useTheme();

  const settings = useSettingsContext();

  const isNavHorizontal = settings.themeLayout === 'horizontal';

  const isNavMini = settings.themeLayout === 'mini';

  const lgUp = useResponsive('up', 'lg');

  const offset = useOffSetTop(HEADER.H_DESKTOP);

  const offsetTop = offset && !isNavHorizontal;

  const renderContent = (
    <>
      {lgUp && isNavHorizontal && <Logo sx={{ mr: 2.5 }} />}

      {!lgUp && (
        <IconButton onClick={onOpenNav}>
          <SvgColor src="/assets/icons/navbar/ic_menu_item.svg" />
        </IconButton>
      )}

      {/* <Searchbar /> */}

      <Stack
        flexGrow={1}
        direction={{
          xs: 'column-reverse',
          sm: 'row',
        }}
        alignItems={{
          xs: 'flex-end',
          sm: 'center',
        }}
        justifyContent={{
          xs: 'flex-start',
          sm: 'flex-end',
        }}
        spacing={{ xs: 0.5, sm: 1 }}
      >
        <BusinessDateBanner />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1 }}>
          {/* <LanguagePopover />

          <NotificationsPopover />

          <ContactsPopover />

          <SettingsButton /> */}

          <AccountPopover />
        </Stack>
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        background: theme.palette.background.default,
        boxShadow: `0 2px 8px ${theme.palette.grey[300]}`,
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.W_VERTICAL + 1}px)`,
          height: HEADER.H_DESKTOP,
          ...(offsetTop && {
            height: HEADER.H_DESKTOP_OFFSET,
          }),
          ...(isNavHorizontal && {
            width: 1,
            background: theme.palette.background.default,
            height: HEADER.H_DESKTOP_OFFSET,
            borderBottom: `dashed 1px ${theme.palette.divider}`,
          }),
          ...(isNavMini && {
            width: `calc(100% - ${NAV.W_MINI + 1}px)`,
          }),
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
