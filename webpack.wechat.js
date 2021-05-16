const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require('copy-webpack-plugin');
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = env => merge(common(env), {
    entry: [
        '@iro/wechat-adapter',
        path.resolve(__dirname, 'src/index.ts')
    ],
    mode: "production",
    output: {
        filename: 'game.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.DefinePlugin({ 
            'process.env.PLATFORM': JSON.stringify('WECHAT'),
        }),
        new CopyPlugin([
            { from: path.resolve(__dirname, 'support/wechat'), to: path.resolve(__dirname, 'dist')}
        ]),
    ],
    optimization: {
        runtimeChunk: false,
        splitChunks: false
    },
});