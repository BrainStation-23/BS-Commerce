const nextConfig = {
  reactStrictMode: true,
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
    domains: ['cdn.shopify.com','dummyjson.com'],
  }
};

const withTM = require("next-transpile-modules")(["marketplace"]);
module.exports = withTM(nextConfig);

