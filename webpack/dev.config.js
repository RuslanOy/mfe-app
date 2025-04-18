const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = (env) => merge(common(env), {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: process.env.PUBLIC_URL,
  },
  devServer: {
    // port: parseInt(process.env.PUBLIC_URL.split(':')[2].replace(/\//g, '')) || 3000,
    port: 3000,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
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
          eager: true
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.2.0',
          eager: true
        },
      },
    }),
  ],
});