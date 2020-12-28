var webpackMerge = require('webpack-merge');
var base = require('./webpack.base.config');
var webpack = require('webpack');


module.exports = webpackMerge(base, {
    //specific config
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/test.env')
        })
    ]
});



