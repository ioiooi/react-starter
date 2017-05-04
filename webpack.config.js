const path = require('path');
const webpack = require('webpack');
const BUILD_DIR = path.resolve(__dirname, 'web');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      APP_DIR + '/index.js'
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  devServer: {
    contentBase: BUILD_DIR,
    port: 8080,
    hot: true,
    historyApiFallback: true,
    open: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
