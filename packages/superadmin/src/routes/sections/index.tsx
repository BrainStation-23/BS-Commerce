import { Navigate, useRoutes } from 'react-router-dom';

import { PATH_AFTER_LOGIN } from 'src/config-global';

import { authRoutes } from 'src/routes/sections/auth';
import { dashboardRoutes } from 'src/routes/sections/dashboard';
import { mainRoutes } from 'src/routes/sections/main';
import { profileRoutes } from 'src/routes/sections/profile';
import { productsRoutes } from './products';
import { ordersRoutes } from './orders';
import { manufacturersRoutes } from './manufacturers';
import { tagsRoutes } from './tags';
import { categoriesRoutes } from './categories';
import { brandsRoutes } from './brands';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to={PATH_AFTER_LOGIN} replace />,
    },
    // Auth routes
    ...authRoutes,

    // Profile routes
    ...profileRoutes,

    // Dashboard routes
    ...dashboardRoutes,

    // Catalog routes
    // ...catalogRoutes,
    // Product routes
    ...productsRoutes,
    // Manufacturer routes
    ...manufacturersRoutes,
    // Category routes
    ...categoriesRoutes,
    // Tags routes
    ...tagsRoutes,
    // brans routes
    ...brandsRoutes,
    // Orders routes
    ...ordersRoutes,

    // Main routes
    ...mainRoutes,

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
