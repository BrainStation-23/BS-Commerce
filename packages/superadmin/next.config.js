const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['admin-demo.nopcommerce.com', "cdn.shopify.com"],
  },
};

const withTM = require('next-transpile-modules')(['marketplace']);
module.exports = withTM(nextConfig);

module.exports = {
  images: {
    domains: ['admin-demo.nopcommerce.com', "cdn.shopify.com"],
  },
};
