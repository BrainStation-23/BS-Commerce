import { productsRoutes } from 'src/routes/sections/products';
import { manufacturersRoutes } from 'src/routes/sections/manufacturers';
import { categoriesRoutes } from 'src/routes/sections/categories';
import { tagsRoutes } from 'src/routes/sections/tags';
import { brandsRoutes } from 'src/routes/sections/brands';

// ----------------------------------------------------------------------

export const catalogRoutes = [
  ...productsRoutes,
  ...manufacturersRoutes,
  ...categoriesRoutes,
  ...tagsRoutes,
  ...brandsRoutes,
];
