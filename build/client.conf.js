const { merge } = require('webpack-merge');
const base = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const dir = (...agu)=> path.resolve(...agu)
module.exports = merge(base, {
   entry: {
       client: dir('src', './entry-client.js'),
   },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        })
    ]
});