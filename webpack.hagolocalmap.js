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
      new CopyPlugin([
        { from: "./src/lib/hago_3.2.2.js", to: resolveAppPath("dist/lib") },
      ]),
      new webpack.DefinePlugin({
        "process.env.LOCAL_SDK": JSON.stringify(true),
        "process.env.PLATFORM": JSON.stringify("HAGOWEB"),
      }),
      new HTMLWebpackPlugin({
        title: "Square Bird",
        template: "./src/index.html",
        chunks: {
          head: [
            {
              src: "lib/hago_3.2.2.js",
            },
          ],
        },
      }),
    ],
  });
