const { mergeWithCustomize, customizeArray } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = mergeWithCustomize({
  customizeArray: customizeArray({
    'module.rules': 'prepend'
  })
})(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new ReactRefreshWebpackPlugin({
      overlay: {
        sockIntegration: 'whm',
      },
    })
  ],
  devServer: {
    hot: true,
    open: true
  }
});
