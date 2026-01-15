import { forwardRef } from 'react';
import { Button, ButtonProps } from '@mui/material';
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

interface NavigationLinkProps extends Omit<ButtonProps, 'href'> {
  href: string;
}

const NavigationLink = forwardRef<HTMLAnchorElement, NavigationLinkProps>(
  ({ href, children, ...other }, ref) => (
    <Button
      ref={ref}
      component={RouterLink}
      href={href}
      sx={{
        '&.MuiButton-root, &.MuiButtonBase-root, & > a': {
          padding: '3px 12px',
        },
        ...other.sx,
      }}
      {...other}
    >
      {children}
    </Button>
  )
);

NavigationLink.displayName = 'NavigationLink';

export default NavigationLink;
