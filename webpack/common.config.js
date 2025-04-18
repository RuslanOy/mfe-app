const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { DefinePlugin } = require('webpack');
require('dotenv').config();

module.exports = (env) => {
  const isProd = process.env.NODE_ENV === 'production';

  return {
    entry: './src/bootstrap.js',
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
    plugins: [
      new ModuleFederationPlugin({
        name: 'app',
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
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL),
        'process.env.HEADER_REMOTE_URL': JSON.stringify({
          HEADER_REMOTE_URL: process.env.HEADER_REMOTE_URL,
        }),
        'process.env.FOOTER_REMOTE_URL': JSON.stringify({
          FOOTER_REMOTE_URL: process.env.FOOTER_REMOTE_URL,
        }),
      }),
    ],
  };
};
