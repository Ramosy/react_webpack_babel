var webpack = require('webpack');
module.exports = {
    entry: {
        entry: "./client/entry/entry.js"
    },
    output: {
        path: __dirname+"/client/bundle",
        filename: '/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader!jsx-loader?harmony'
            }
        ]
    }
};