export const endpoints = {
  auth: {
    login: '/api/auth/signin',
    register: '',
    refresh: '/api/admin/auth/refresh',
    logout: '/api/admin/auth/logout',
    sendEmail: '/api/admin/auth/forgot-password/send-link',
    resetPassword: '/api/admin/auth/forgot-password/new-password',
  },
  profile: {
    changePassword: '/api/admin/auth/change-password',
    me: '/api/user',
  },
  products: {
    list: '/api/products',
    getBySku: (sku: string) => `/api/products/sku/${sku}`,
    create: '/api/products',
    details: (productId: string) => `/api/products/${productId}`,
    update: (productId: string) => `/api/products/${productId}`,
    delete: (productId: string) => `/api/products/${productId}`,
  },
  categories: {
    list: '/api/category',
    create: '/api/category',
    details: (categoryId: string) => `/api/category/${categoryId}`,
  },
  manufacturers: {
    list: '/api/manufacturers',
    create: '/api/manufacturers',
    details: (manufacturerId: string) => `/api/manufacturers/${manufacturerId}`,
    update: (manufacturerId: string) => `/api/manufacturers/${manufacturerId}`,
  },
  tags: {
    list: '/api/tags',
    create: '/api/tags',
    details: (tagId: string) => `/api/tags/${tagId}`,
    update: (tagId: string) => `/api/tags/${tagId}`,
  },
  brands: {
    list: '/api/brands',
    create: '/api/brands',
    details: (brandId: string) => `/api/brands/${brandId}`,
    update: (brandId: string) => `/api/brands/${brandId}`,
  },
  orders: {
    list: '/api/admin/order/orderList',
    details: (orderId: string) => `/api/admin/order/${orderId}`,
    changeStatus: '/api/admin/order/change-status',
  },
};
