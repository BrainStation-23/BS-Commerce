import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthGuard } from 'src/auth/guard';
import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

const BrandsListPage = lazy(() => import('src/pages/catalog/brands/brands-list-page'));
const BrandCreatePage = lazy(() => import('src/pages/catalog/brands/brand-create-page'));
const BrandViewPage = lazy(() => import('src/pages/catalog/brands/brand-view-page'));
const BrandEditPage = lazy(() => import('src/pages/catalog/brands/brand-edit-page'));

export const brandsRoutes = [
  {
    path: '/brands',
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
      { element: <BrandsListPage />, index: true },
      { element: <BrandCreatePage />, path: 'create' },
      { element: <BrandViewPage />, path: ':brandId/view' },
      { element: <BrandEditPage />, path: ':brandId/edit' },
    ],
  },
];
