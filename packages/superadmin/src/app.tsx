import 'src/global.css';

import { AuthProvider } from 'src/auth/context/jwt';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import ProgressBar from 'src/components/progress-bar';
import { SettingsDrawer, SettingsProvider } from 'src/components/settings';
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
import OrganizationProviderWrapper from 'src/organization/providers/organization-provider';
import queryClient from 'src/query/providers/query-provider';
import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { QueryClientProvider } from '@tanstack/react-query';
// import EnvironmentBanner from 'src/components/environment-banner/environment-banner';
import { EnvironmentBanner } from 'src/components/environment-banner';
import GlobalErrorHandler from 'src/components/error-handler/global-error-handler';
import SnackbarProvider from 'src/components/snackbar/snackbar-provider';

export default function App() {
  useScrollToTop();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} dateFormats={{ keyboardDate: 'DD/MM/YYYY' }}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <OrganizationProviderWrapper>
            <SettingsProvider
              defaultSettings={{
                themeMode: 'light', // 'light' | 'dark'
                themeDirection: 'ltr', //  'rtl' | 'ltr'
                themeContrast: 'default', // 'default' | 'bold'
                themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
                themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
                themeStretch: false,
              }}
            >
              <ThemeProvider>
                <MotionLazy>
                  <EnvironmentBanner />
                  {/* <BusinessDateBanner /> */}
                  <SettingsDrawer />
                  <ProgressBar />
                  <GlobalErrorHandler />
                  <SnackbarProvider>
                    <Router />
                  </SnackbarProvider>
                </MotionLazy>
              </ThemeProvider>
            </SettingsProvider>
          </OrganizationProviderWrapper>
        </QueryClientProvider>
      </AuthProvider>
    </LocalizationProvider>
  );
}
