const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = env => merge(common(env), {
    mode: "development",
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Square Bird',
            template: './src/index.html',
        })
    ],
    devServer: {
        contentBase: "./dist"
    }
});