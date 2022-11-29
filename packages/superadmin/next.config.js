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
    loader: 'custom',
    loaderFile: './image/loader.js',
    domains: [
      'admin-demo.nopcommerce.com',
      'cdn.shopify.com',
      'chaldn.com',
      'i2.wp.com',
      'upload.wikimedia.org',
      'image.made-in-china.com',
      'bunonbasket.com',
      'img.freepik.com',
      'm.media-amazon.com',
      'd2j6dbq0eux0bg.cloudfront.net',
      'www.gardeningknowhow.com',
      'www.aprifel.com',
      'urbanbazaar.com.np',
      'helios-i.mashable.com',
      'www.hindustantimes.com',
    ],
  },
};

const withTM = require('next-transpile-modules')([]);
module.exports = withTM(nextConfig);
