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

const withTM = require('next-transpile-modules')(['marketplace']);
module.exports = withTM(nextConfig);

const packages = [];
packages.push(path.join(__dirname, '../atomic-components'));

module.exports = {
  webpack: async (baseConfig, arg) => {
    const { module = {} } = baseConfig;
    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])],
      },
    };

    newConfig.module.rules.push({
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
    newConfig.resolve.extensions.push('.ts', '.tsx');

    // const { isFound, match } = getLoader(
    //   webpackConfig,
    //   loaderByName('babel-loader')
    // );
    // if (isFound) {
    //   const include = Array.isArray(match.loader.include)
    //     ? match.loader.include
    //     : [match.loader.include];

    //   match.loader.include = include.concat(packages);
    // }

    return newConfig;
  },
};
