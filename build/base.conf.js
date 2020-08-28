
const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin')


const dir = (...agu)=> path.resolve(...agu)

module.exports = {
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}