const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = env => merge(common(env), {
    mode: "production",
    plugins: [
        new webpack.DefinePlugin({ 
            'process.env.PLATFORM': JSON.stringify('JIO'),
            'process.env.INTERSTITIAL_AD_ID': JSON.stringify('98c9a04e'),
            'process.env.REWARDED_AD_ID': JSON.stringify('efce90d8'),
        }),
        new CopyPlugin([
            { from: path.resolve(__dirname, 'support/jio'), to: path.resolve(__dirname, 'dist')}
        ]),
        new HTMLWebpackPlugin({
            title: 'Square Bird',
            template: './src/index.html',
            chunks: {
                head: [
                    { src: "jiogames_sp_wrapper.js" }
                ]
            }
        })
    ]
});