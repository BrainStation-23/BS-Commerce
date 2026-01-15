import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function container(theme: Theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          background: theme.palette.background.paper,
          minHeight: '100%',
          boxShadow: theme.customShadows.card,
          borderRadius: theme.shape.borderRadius * 2,
          padding: theme.spacing(3),
        },
      },
    },
  };
}
