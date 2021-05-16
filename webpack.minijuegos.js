const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = env => merge(common(env), {
    mode: "production",
    plugins: [
        new webpack.DefinePlugin({
            'process.env.PLATFORM': JSON.stringify('MINI_JUEGOS'),
            'process.env.INTERSTITIAL_AD_ID': JSON.stringify('https://ext.minijuegos.com/video/tags.php?id=squarebirdinterstitial&type=desktop'),
            'process.env.REWARDED_AD_ID': JSON.stringify('https://ext.minijuegos.com/video/tags.php?id=squarebirdrewarded&type=desktop'),
        }),
        new HTMLWebpackPlugin({
            title: 'Square Bird',
            template: './src/index.html',
            chunks: {
                head: [
                    { id: "LeChuckAPIjs", src: "https://ssl.minijuegosgratis.com/lechuck/js/latest.js" }
                ]
            }
        })
    ]
});