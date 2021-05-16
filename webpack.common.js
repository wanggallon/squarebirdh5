const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = (env) => {
    return {
        entry: './src/index.ts',
        output: {
            filename: '[name].[hash].js',
            path: path.resolve(__dirname, 'dist')
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"],
            symlinks: false
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/, 
                    loader: "ts-loader",
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(), 
            new CopyPlugin([
                { from: './assets', to: path.resolve(__dirname, 'dist/assets')},
            ]),
            new HTMLWebpackPlugin({
                title: 'Square Bird',
                template: './src/index.html',
            }),
            new DefinePlugin({
                "process.env.BUILD_TIME": Date.now()
            })
        ],
        optimization: {
            moduleIds: "hashed",
            runtimeChunk: "single",
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        chunks: "all",
                    },
                },
            },
        },
    }
}