const {merge} = require('webpack-merge');
const base = require('./base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = merge(base, {
   entry: {
       client: path.resolve('src', './entry-client.js'),
   },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './index.html',
        //     filename: 'index.html'
        // })
    ]
});