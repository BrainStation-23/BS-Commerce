import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthGuard } from 'src/auth/guard';
import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';


const ProductsListPage = lazy(() => import('src/pages/catalog/products/products-list-page'));
const ProductCreatePage = lazy(() => import('src/pages/catalog/products/product-create-page'));
const ProductViewPage = lazy(() => import('src/pages/catalog/products/product-view-page'));
const ProductEditPage = lazy(() => import('src/pages/catalog/products/product-edit-page'));

export const productsRoutes = [
  {
    path: '/products',
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
      { element: <ProductsListPage />, index: true },
      { element: <ProductCreatePage />, path: 'create' },
      { element: <ProductViewPage />, path: ':productId/view' },
      { element: <ProductEditPage />, path: ':productId/edit' },
    ],
  },
];