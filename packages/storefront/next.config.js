const path = require('path');
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
      'cdn.dribbble.com',
    ],
  },
  webpack: async (config, options) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [path.resolve(__dirname, '../atomic-components')],
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
            // plugins: ['react-docgen']
          },
        },
      ],
    });

    return config;
  },
};

const withTM = require('next-transpile-modules')([]);
module.exports = withTM(nextConfig);
