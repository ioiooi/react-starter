const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: '[name].[hash].css'
});

module.exports = merge({
  customizeArray(a, b, key) {
    if (key === 'module.rules') {
      // TODO: find a better solution
      return [a[0]].concat(b);
    }
  }
})(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      }
    ]
  },
  plugins: [
    extractSass,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
