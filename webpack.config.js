var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: {
        entry: "./client/entry/entry.js"
    },
    output: {
        path: __dirname+"/client/bundle",
        filename: '/bundle.js'
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: [
            path.resolve('./client/')
        ]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    "presets": [
                        "react",
                        "es2015"
                    ]
                }
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader!jsx-loader?harmony',
                query: {
                    "presets": [
                        "react",
                        "es2015"
                    ]
                }
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    }
};