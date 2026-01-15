// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/',
  PROFILE: '/profile',
  CATALOG: '/catalog',
  PRODUCTS: '/products',
  MANUFACTURERS: '/manufacturers',
  CATEGORIES: '/categories',
  TAGS: '/tags',
  BRANDS: '/brands',
  ORDERS: '/orders',
};

// ----------------------------------------------------------------------

export const paths = {
  // AUTH
  auth: {
    login: `${ROOTS.AUTH}/login`,
    register: `${ROOTS.AUTH}/register`,
    forgotPassword: `${ROOTS.AUTH}/forgot-password`,
    newPassword: (token: string) => `${ROOTS.AUTH}/reset-password/${token}`,
  },
  // PROFILE
  profile: {
    root: `${ROOTS.PROFILE}`,
    changePassword: `${ROOTS.PROFILE}/change-password`,
  },
  // ERROR
  error: {
    forbidden: `${ROOTS.DASHBOARD}403`,
    notFound: `${ROOTS.AUTH}/404`,
    serverError: `${ROOTS.AUTH}/500`,
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
  },
  products: {
    root: ROOTS.PRODUCTS,
    productCreate: `${ROOTS.PRODUCTS}/create`,
    productView: (id: string) => `${ROOTS.PRODUCTS}/${id}/view`,
    productEdit: (id: string) => `${ROOTS.PRODUCTS}/${id}/edit`,
  },
  // TAGS
  tags: {
    root: ROOTS.TAGS,
    tagCreate: `${ROOTS.TAGS}/create`,
    tagView: (id: string) => `${ROOTS.TAGS}/${id}/view`,
    tagEdit: (id: string) => `${ROOTS.TAGS}/${id}/edit`,
  },
  // BRANDS
  brands: {
    root: ROOTS.BRANDS,
    brandCreate: `${ROOTS.BRANDS}/create`,
    brandView: (id: string) => `${ROOTS.BRANDS}/${id}/view`,
    brandEdit: (id: string) => `${ROOTS.BRANDS}/${id}/edit`,
  },
  // CATEGORIES
  categories: {
    root: ROOTS.CATEGORIES,
    categoryCreate: `${ROOTS.CATEGORIES}/create`,
    categoryView: (id: string) => `${ROOTS.CATEGORIES}/${id}/view`,
    categoryEdit: (id: string) => `${ROOTS.CATEGORIES}/${id}/edit`,
  },
  // MANUFACTURERS
  manufacturers: {
    root: ROOTS.MANUFACTURERS,
    manufacturerCreate: `${ROOTS.MANUFACTURERS}/create`,
    manufacturerView: (id: string) => `${ROOTS.MANUFACTURERS}/${id}/view`,
    manufacturerEdit: (id: string) => `${ROOTS.MANUFACTURERS}/${id}/edit`,
  },
  // ORDERS
  orders: {
    root: ROOTS.ORDERS,
    orderDetails: (id: string) => `${ROOTS.ORDERS}/${id}`,
  },
};
