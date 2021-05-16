const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.prod.js");

module.exports = (env) =>
  merge(common(env), {
    mode: "production",
    plugins: [
      new webpack.DefinePlugin({
        "process.env.WARN_BEFORE_SKIP_AD": JSON.stringify(true),
        "process.env.NOT_BROWSER": JSON.stringify(true),
        "process.env.PVP_ENABLED": JSON.stringify(true),
        "process.env.PLATFORM": JSON.stringify("HAGO"),
      }),
      new HTMLWebpackPlugin({
        title: "SquareBird",
        template: "./src/index.html",
      }),
    ],
  });
