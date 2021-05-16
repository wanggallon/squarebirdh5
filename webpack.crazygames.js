const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = env => merge(common(env), {
    mode: "production",
    plugins: [
        new webpack.DefinePlugin({ 
            'process.env.PLATFORM': JSON.stringify('CRAZY_GAMES'),
        }),
        new HTMLWebpackPlugin({
            title: 'Square Bird',
            template: './src/index.html',
            chunks: {
                head: [
                    { src: "https://sdk.crazygames.com/crazygames-sdk-v1.js" }
                ]
            }
        })
    ]
});