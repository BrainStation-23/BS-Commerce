import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthGuard } from 'src/auth/guard';
import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

const TagsListPage = lazy(() => import('src/pages/catalog/tags/tags-list-page'));
const TagCreatePage = lazy(() => import('src/pages/catalog/tags/tag-create-page'));
const TagViewPage = lazy(() => import('src/pages/catalog/tags/tag-view-page'));
const TagEditPage = lazy(() => import('src/pages/catalog/tags/tag-edit-page'));

export const tagsRoutes = [
  {
    path: '/tags',
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
      { element: <TagsListPage />, index: true },
      { element: <TagCreatePage />, path: 'create' },
      { element: <TagViewPage />, path: ':tagId/view' },
      { element: <TagEditPage />, path: ':tagId/edit' },
    ],
  },
];
