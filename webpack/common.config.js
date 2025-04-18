const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env) => ({
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/i,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: `.env.${env.mode || 'development'}`,
      systemvars: true, // Также читает системные переменные
      safe: true, // Не падать если файл .env отсутствует
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
});