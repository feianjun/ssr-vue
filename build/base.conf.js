const path = require('path');
const {VueLoaderPlugin} = require('vue-loader')
module.exports = {
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            '@': path.resolve('src'),
        }
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};