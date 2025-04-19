const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = (_, argv) => {
  const isProd = argv.mode === 'production';

  const headerRemote = isProd
    ? 'header@https://ruslanoy.github.io/mfe-header/remoteEntry.js'
    : 'header@http://localhost:3001/remoteEntry.js';

  const footerRemote = isProd
    ? 'footer@https://ruslanoy.github.io/mfe-footer/remoteEntry.js'
    : 'footer@http://localhost:3002/remoteEntry.js';

  const publicPath = isProd
    ? 'https://ruslanoy.github.io/mfe-app/'
    : 'http://localhost:3000/';

  return {
    mode: isProd ? 'production' : 'development',
    entry: './src/index.tsx',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProd ? '[name].[contenthash].js' : '[name].js',
      publicPath,
      clean: true,
    },
    devtool: isProd ? false : 'eval-source-map',
    devServer: !isProd
      ? {
          port: 3000,
          hot: true,
          historyApiFallback: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':
              'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers':
              'X-Requested-With, content-type, Authorization',
          },
        }
      : undefined,
    optimization: {
      minimize: isProd,
      splitChunks: isProd ? { chunks: 'all' } : undefined,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'app',
        remotes: {
          header: headerRemote,
          footer: footerRemote,
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: '^18.2.0',
            eager: true,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: '^18.2.0',
            eager: true,
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(
          isProd ? 'production' : 'development'
        ),
        'process.env.PUBLIC_URL': JSON.stringify(publicPath),
      }),
    ],
  };
};
