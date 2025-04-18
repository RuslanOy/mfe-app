const { merge } = require('webpack-merge');
const common = require('./common.config');

module.exports = (env) =>
  merge(common(env), {
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
      publicPath: 'http://localhost:3000/',
      clean: true,
    },
    devServer: {
      port: 3000,
      hot: true,
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  });
