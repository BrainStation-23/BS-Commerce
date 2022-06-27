const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['admin-demo.nopcommerce.com',],
  },
};

const withTM = require("next-transpile-modules")(["marketplace"]);
module.exports = withTM(nextConfig);

module.exports = {
  images: {
    domains: ['admin-demo.nopcommerce.com',],
  },
}
