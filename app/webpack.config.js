var path = require('path');
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
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
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "window.jQuery": "jquery",
        }),
        // new uglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        // 分离公共代码，
        // production
    ]
};