const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ]
  },

  images: {
    domains: ["fakestoreapi.com", "pixabay.com"],
    formats: ["image/avif", "image/webp"],
  },
}

const withTM = require("next-transpile-modules")(["marketplace"])
module.exports = withTM(nextConfig)
