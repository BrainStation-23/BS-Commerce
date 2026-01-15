import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
  interface Palette {
    gradients: {
      primary: string;
      secondary: string;
      info: string;
      success: string;
      warning: string;
      error: string;
      neutral: string;
    };
  }
  interface PaletteOptions {
    gradients?: {
      primary?: string;
      secondary?: string;
      info?: string;
      success?: string;
      warning?: string;
      error?: string;
      neutral?: string;
    };
  }
}

// SETUP COLORS

export const grey = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

export const primary = {
  lighter: '#EFEEE3', // --brand-primary-10
  light: '#D2CA75', // --brand-primary-20
  main: '#00a0dc', // --brand-primary-60
  dark: '#00a0dc', // --brand-primary-70
  darker: '#4B450B', // --brand-primary-90
  contrastText: '#FFFFFF',
};

export const secondary = {
  lighter: '#EFEEE3', // --brand-secondary-10
  light: '#D2CA75', // --brand-secondary-20
  main: '#00a0dc', // --brand-secondary-60
  dark: '#00a0dc', // --brand-secondary-70
  darker: '#5F570E', // --brand-secondary-90
  contrastText: '#FFFFFF',
};

export const info = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

export const success = {
  lighter: '#E4F6F5', // --success-10
  light: '#4FC4BF', // --success-30
  main: '#2BB17D', // --success-60
  dark: '#1E5B58', // --success-90
  darker: '#1E5B58', // using 90 again since no darker step defined
  contrastText: '#ffffff',
};

export const warning = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: grey[800],
};

export const error = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#FFFFFF',
};

export const common = {
  black: '#000000',
  white: '#FFFFFF',
};

export const gradients = {
  primary: 'linear-gradient(135deg, #FCFBF6 0%, #F4F1D8 100%)',
  secondary: 'linear-gradient(135deg, #FCFBF6 0%, #F0EBCD 100%)',
  info: 'linear-gradient(135deg, #F9FEFF 0%, #E5F5FA 100%)',
  success: 'linear-gradient(135deg, #F7FCFB 0%, #E3F1ED 100%)',
  warning: 'linear-gradient(135deg, #FFFEF9 0%, #FAF3DA 100%)',
  error: 'linear-gradient(135deg, #FFF9F7 0%, #F8E3DC 100%)',
  neutral: 'linear-gradient(135deg, #FBFCFD 0%, #E8EBEF 100%)',
};

export const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  gradients,
  divider: alpha(grey[500], 0.2),
  action,
};

// ----------------------------------------------------------------------

export function palette(mode: 'light' | 'dark') {
  const light = {
    ...base,
    mode: 'light',
    text: {
      primary: grey[800],
      secondary: grey[600],
      disabled: grey[500],
    },
    background: {
      paper: '#FFFFFF',
      default: '#FFFFFF',
      neutral: grey[200],
    },
    action: {
      ...base.action,
      active: grey[600],
    },
  };

  const dark = {
    ...base,
    mode: 'dark',
    text: {
      primary: '#FFFFFF',
      secondary: grey[500],
      disabled: grey[600],
    },
    background: {
      paper: grey[800],
      default: grey[900],
      neutral: alpha(grey[500], 0.12),
    },
    action: {
      ...base.action,
      active: grey[500],
    },
  };

  return mode === 'light' ? light : dark;
}
