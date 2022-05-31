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
    domains: ['cdn.shopify.com'],
}
};

const withTM = require("next-transpile-modules")(["marketplace"]);
module.exports = withTM(nextConfig);
module.exports = {
  images: {
    domains: ["cdn.shopify.com"],
  },
};
