/*eslint no-var:0 guard-for-in:0*/
var HtmlWebpackPlugin = require('html-webpack-plugin'),
  webpack = require('webpack'),
  WebpackConfig = require('webpack-config').default;

var path = require('path');
var appDir = path.join(__dirname, 'src');

module.exports = new WebpackConfig().merge({

  output: {
    path: 'dist',
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },

  debug: false,
  devtool: false,
  entry: {
    app: [
      './client/app.js'
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader'],
        exclude: /node_modules/
      }
    ]
  },

  stats: {
    colors: true,
    reasons: false
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    //new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash].js',
      minChunks: function (module) {
        return module.resource && module.resource.indexOf(appDir) === -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'react',
      filename: 'react.[hash].js',
      minChunks: function (module) {
        return /react/.test(module.resource);
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Artismo',
      // template: 'src/index.html',
      // showErrors: true,
      // inject: 'body',
      // minify: {
      //   collapseWhitespace: true,
      //   removeComments: true,
      //   removeIgnored: true,
      //   minifyCSS: true
      // }
    })
  ]

});
