const { mergeWithCustomize, customizeArray } = require("webpack-merge");
const common = require("./webpack.common.js");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = mergeWithCustomize({
  customizeArray: customizeArray({
    "module.rules": "prepend",
  }),
})(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
        ],
      },
    ],
  },
  plugins: [new ReactRefreshPlugin()],
});
