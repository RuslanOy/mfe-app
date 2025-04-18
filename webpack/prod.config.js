const { merge } = require('webpack-merge');
const common = require('./common.config');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = (env) =>
  merge(common(env), {
    mode: 'production',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash:8].js',
      publicPath: process.env.PUBLIC_URL,
      clean: true,
    },
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'app',
        remotes: {
          header: `header@${process.env.HEADER_REMOTE_URL}`,
          footer: `footer@${process.env.FOOTER_REMOTE_URL}`,
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: '^18.2.0',
            eager: false,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: '^18.2.0',
            eager: false,
          },
        },
      }),
    ],
  });
