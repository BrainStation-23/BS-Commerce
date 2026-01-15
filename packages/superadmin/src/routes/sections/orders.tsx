import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthGuard } from 'src/auth/guard';
import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

const OrdersListPage = lazy(() => import('src/pages/orders/orders-list-page'));
const OrderDetailsPage = lazy(() => import('src/pages/orders/order-details-page'));

export const ordersRoutes = [
  {
    path: '/orders',
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
      { element: <OrdersListPage />, index: true },
      { element: <OrderDetailsPage />, path: ':orderId' },
    ],
  },
];
