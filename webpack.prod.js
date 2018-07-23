const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge.smartStrategy({
  'module.rules.use': 'prepend'
})(common, {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader]
      }
    ]
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
