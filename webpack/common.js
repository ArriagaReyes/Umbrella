const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../app/src/index.js'),
    output: {
        hashFunction: 'xxhash64',
        filename: 'scripts/bundle.[contenthash].js',
        path: path.resolve(__dirname, '../public')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: 'url-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../app/index.html'),
            favicon: path.join(__dirname, '../app/favicon.png')
        })
    ]
}