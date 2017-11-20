const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:80',
    'webpack/hot/only-dev-server',
    './app.js',
  ],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  context: resolve(__dirname, './'),

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader?modules',
            options: {
              minimize: false
            }
          }
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
};
