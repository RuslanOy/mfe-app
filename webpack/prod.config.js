const { merge } = require('webpack-merge');
const common = require('./common.config');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = (env) =>
  merge(common(env), {
    mode: 'production',
    output: {
      filename: '[name].[contenthash].js',
      publicPath: process.env.PUBLIC_URL,
      clean: true
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
        // remotes должен быть внутри ModuleFederationPlugin
        remotes: {
          header: `header@${process.env.HEADER_REMOTE_URL}/remoteEntry.js`,
          footer: `footer@${process.env.FOOTER_REMOTE_URL}/remoteEntry.js`,
        },
        shared: {
          react: { 
            singleton: true, 
            requiredVersion: '^18.2.0',
            eager: false
          },
          'react-dom': {
            singleton: true,
            requiredVersion: '^18.2.0',
            eager: false
          },
        },
      }),
    ],
  });