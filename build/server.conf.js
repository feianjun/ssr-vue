const {merge} = require('webpack-merge');
const base = require('./base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = merge(base, {
    target: 'node',
    entry: {
        server: path.resolve('src', './entry-server.js'),
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('html', 'index.ssr.html'),
            filename: 'index.ssr.html',
            files: {
                js: "client.js"
            },
            excludeChunks: ['server'],
            minify: {
                removeComments: false,    //带HTML注释
                collapseWhitespace: false,    //去掉空格
            }
        })
    ]
});