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
    ],
  },
};

const withTM = require('next-transpile-modules')(['marketplace']);
module.exports = withTM(nextConfig);

const packages = [];
packages.push(path.join(__dirname, '../atomic-components'));

module.exports = {
  images: {
    domains: ['dummyjson.com', 'cdn.shopify.com', 'chaldn.com', 'i2.wp.com'],
  },
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
