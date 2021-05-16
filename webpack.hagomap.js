const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.prod.js");

const appDirectory = fs.realpathSync(process.cwd());

const resolveAppPath = (relativePath) =>
  path.resolve(appDirectory, relativePath);

module.exports = (env) =>
  merge(common(env), {
    mode: "development",
    optimization: {
      minimize: false,
    },
    devtool: "source-map",
    plugins: [
      new webpack.DefinePlugin({
        "process.env.WARN_BEFORE_SKIP_AD": JSON.stringify(true),
        "process.env.NOT_BROWSER": JSON.stringify(true),
        "process.env.PVP_ENABLED": JSON.stringify(true),
        "process.env.PLATFORM": JSON.stringify("HAGO"),
      }),
      new HTMLWebpackPlugin({
        title: "Square Bird",
        template: "./src/index.html",
      }),
    ],
  });
