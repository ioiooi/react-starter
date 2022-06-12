const { mergeWithCustomize, customizeArray } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

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
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    static: './dist',
    hot: true,
    open: true
  }
});
