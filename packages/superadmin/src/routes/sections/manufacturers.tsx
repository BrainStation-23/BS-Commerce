import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthGuard } from 'src/auth/guard';
import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

const ManufacturersListPage = lazy(() => import('src/pages/catalog/manufacturers/manufacturers-list-page'));
const ManufacturerCreatePage = lazy(() => import('src/pages/catalog/manufacturers/manufacturer-create-page'));
const ManufacturerViewPage = lazy(() => import('src/pages/catalog/manufacturers/manufacturer-view-page'));
const ManufacturerEditPage = lazy(() => import('src/pages/catalog/manufacturers/manufacturer-edit-page'));

export const manufacturersRoutes = [
  {
    path: '/manufacturers',
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      { element: <ManufacturersListPage />, index: true },
      { element: <ManufacturerCreatePage />, path: 'create' },
      { element: <ManufacturerViewPage />, path: ':manufacturerId/view' },
      { element: <ManufacturerEditPage />, path: ':manufacturerId/edit' },
    ],
  },
];
