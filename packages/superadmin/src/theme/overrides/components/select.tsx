import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function select(theme: Theme) {
  const mobileFieldHeight = 44;
  const mobileVerticalPadding = theme.spacing(1.25);
  const mobileFontSize = theme.typography.pxToRem(13);

  return {
    MuiSelect: {
      styleOverrides: {
        icon: {
          right: 10,
          width: 18,
          height: 18,
          top: 'calc(50% - 9px)',
        },
        select: {
          [theme.breakpoints.down('sm')]: {
            minHeight: mobileFieldHeight,
            paddingTop: mobileVerticalPadding,
            paddingBottom: mobileVerticalPadding,
            fontSize: mobileFontSize,
          },
        },
      },
    },
    MuiNativeSelect: {
      styleOverrides: {
        icon: {
          right: 10,
          width: 18,
          height: 18,
          top: 'calc(50% - 9px)',
        },
        select: {
          [theme.breakpoints.down('sm')]: {
            minHeight: mobileFieldHeight,
            paddingTop: mobileVerticalPadding,
            paddingBottom: mobileVerticalPadding,
            fontSize: mobileFontSize,
          },
        },
      },
    },
  };
}
