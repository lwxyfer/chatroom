var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: __dirname,
        filename: "./build/build.js"
    },
    extensions: ['', '.js', '.jsx'],
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};