import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthGuard } from 'src/auth/guard';
import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';
// ----------------------------------------------------------------------

const ChangePasswordPage = lazy(() => import('src/pages/profile/change-password-page'));

// ----------------------------------------------------------------------

export const profileRoutes = [
  {
    path: '/profile',
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [{ element: <ChangePasswordPage />, path: 'change-password' }],
  },
];
