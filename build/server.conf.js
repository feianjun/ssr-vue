const { merge } = require('webpack-merge');
const base = require('./base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const dir = (...agu)=> path.resolve(...agu)

console.log(dir('src', 'entry-server.js'))

module.exports = merge(base, {
    target: 'node',
    entry: {
        server: dir('src', 'entry-server.js'),
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: dir('html', 'index.ssr.html'),
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