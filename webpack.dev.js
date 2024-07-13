const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = (env, argv) => {
  return merge(common(env, argv), {
    mode: "development",
    devtool: "cheap-module-source-map",
    devServer: {
      hot: true,
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [new ReactRefreshPlugin()],
  });
};
