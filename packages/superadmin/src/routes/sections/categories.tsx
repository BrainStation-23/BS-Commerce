import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthGuard } from 'src/auth/guard';
import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

const CategoriesListPage = lazy(() => import('src/pages/catalog/categories/categories-list-page'));
const CategoryCreatePage = lazy(() => import('src/pages/catalog/categories/category-create-page'));
const CategoryViewPage = lazy(() => import('src/pages/catalog/categories/category-view-page'));
const CategoryEditPage = lazy(() => import('src/pages/catalog/categories/category-edit-page'));

export const categoriesRoutes = [
  {
    path: '/categories',
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
      { element: <CategoriesListPage />, index: true },
      { element: <CategoryCreatePage />, path: 'create' },
      { element: <CategoryViewPage />, path: ':categoryId/view' },
      { element: <CategoryEditPage />, path: ':categoryId/edit' },
    ],
  },
];
