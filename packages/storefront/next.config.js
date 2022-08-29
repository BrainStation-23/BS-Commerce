const nextConfig = {
  reactStrictMode: true,
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
    domains: [
      'cdn.shopify.com',
      'dummyjson.com',
      'colombocme.org',
      'cdn.dribbble.com',
    ],
  },
};

const withTM = require('next-transpile-modules')(['marketplace']);
module.exports = withTM(nextConfig);
