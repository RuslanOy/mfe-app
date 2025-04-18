const { merge } = require('webpack-merge');
const common = require('./common.config');
const { ModuleFederationPlugin } = require('webpack').container;

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
    plugins: [
      new ModuleFederationPlugin({
        name: 'app',
        remotes: {
          header: 'header@http://localhost:3001/remoteEntry.js',
          footer: 'footer@http://localhost:3002/remoteEntry.js',
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
