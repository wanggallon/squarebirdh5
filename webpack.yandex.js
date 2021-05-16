const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
var ZipPlugin = require("zip-webpack-plugin");

module.exports = (env) =>
  merge(common(env), {
    mode: "production",
    plugins: [
      new webpack.DefinePlugin({
        "process.env.PLATFORM": JSON.stringify("YANDEX"),
      }),
      new ZipPlugin({
        filename: "game.zip",
      }),
    ],
  });
