const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = env => merge(common(env), {
    mode: "production",
    plugins: [
        new webpack.DefinePlugin({ 
            'process.env.PLATFORM': JSON.stringify('AZERION'),
        }),
        new HTMLWebpackPlugin({
            title: 'Square Bird',
            template: './src/index.html',
        })
    ]
});