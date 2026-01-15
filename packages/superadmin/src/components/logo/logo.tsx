import { forwardRef } from 'react';

import Box, { BoxProps } from '@mui/material/Box';
import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';
import SAMLLogoCircle from '../../../public/logo/bs_commerce_logo -circle.png';
import SAMLLogo from '../../../public/logo/bs_commerce_logo -horizontal.png';
import { useSettingsContext } from '../settings';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const settings = useSettingsContext();

    const isNavMini = settings.themeLayout === 'mini';

    // OR using local (public folder)
    // -------------------------------------------------------
    // const logo = (
    //   <Box
    //     component="img"
    //     src="/logo/logo_single.svg" => your path
    //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
    //   />
    // );

    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start', // Left alignment
          ...sx,
        }}
        {...other}
      >
        <Box
          component="img"
          src={isNavMini ? SAMLLogoCircle : SAMLLogo}
          sx={{ width: 'auto', height: isNavMini ? 36 : 46, cursor: 'pointer', ...sx }}
        />
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

export default Logo;
