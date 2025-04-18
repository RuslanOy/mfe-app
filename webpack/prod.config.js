const { merge } = require('webpack-merge');
const common = require('./common.config');

module.exports = (env) =>
  merge(common(env), {
    mode: 'production',
    output: {
      filename: '[name].[contenthash].js',
      publicPath: process.env.PUBLIC_URL,
      clean: true
    },
    remotes: {
      header: `header@${process.env.HEADER_REMOTE_URL}/remoteEntry.js`,
      footer: `footer@${process.env.FOOTER_REMOTE_URL}/remoteEntry.js`,
    },
    optimization: {
      minimize: true,
    },
  });