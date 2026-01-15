import { useMemo } from 'react';
import { paths } from 'src/routes/paths';

import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BusinessIcon from '@mui/icons-material/Business';
import LabelIcon from '@mui/icons-material/Label';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReceiptIcon from '@mui/icons-material/Receipt';

const ICONS = {
  dashboard: <DashboardIcon />,
  catalog: <InventoryIcon />,
  products: <InventoryIcon />,
  manufacturers: <BusinessIcon />,
  categories: <CategoryIcon />,
  tags: <LabelIcon />,
  brands: <LocalOfferIcon />,
  sales: <ShoppingCartIcon />,
  orders: <ReceiptIcon />,
};

export function useNavData() {
  const data = useMemo(() => {
    const navItems = [];

    // Dashboard - direct item without subheader
    navItems.push({
      subheader: '',
      icon: ICONS.dashboard,
      serial: 1,
      items: [
        {
          title: 'Dashboard',
          path: paths.dashboard.root,
          icon: ICONS.dashboard,
          serial: 1,
        },
      ],
    });

    // Catalog section
    navItems.push({
      subheader: 'Catalog',
      icon: ICONS.catalog,
      serial: 2,
      items: [
        {
          title: 'Products',
          path: paths.products.root,
          icon: ICONS.products,
          serial: 1,
        },
        {
          title: 'Manufacturers',
          path: paths.manufacturers.root,
          icon: ICONS.manufacturers,
          serial: 2,
        },
        {
          title: 'Categories',
          path: paths.categories.root,
          icon: ICONS.categories,
          serial: 3,
        },
        {
          title: 'Tags',
          path: paths.tags.root,
          icon: ICONS.tags,
          serial: 4,
        },
        {
          title: 'Brands',
          path: paths.brands.root,
          icon: ICONS.brands,
          serial: 5,
        },
      ],
    });

    // Sales section
    navItems.push({
      subheader: 'Sales',
      icon: ICONS.sales,
      serial: 3,
      items: [
        {
          title: 'Orders',
          path: paths.orders.root,
          icon: ICONS.orders,
          serial: 1,
        },
      ],
    });

    return navItems;
  }, []);

  return data;
}
