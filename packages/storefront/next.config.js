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
    domains: ['cdn.shopify.com', 'dummyjson.com'],
}
};

const withTM = require("next-transpile-modules")(["marketplace"]);
module.exports = withTM(nextConfig);

module.exports = {
  images: {
    domains: ['dummyjson.com','cdn.shopify.com'],
  },
}
