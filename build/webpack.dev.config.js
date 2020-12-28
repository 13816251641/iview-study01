var webpackMerge = require('webpack-merge');
var base = require('./webpack.base.config');
var webpack = require('webpack');


module.exports = webpackMerge(base, {
    //specific config
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env') //如果base中已经配置了process.env则不会替换
        })
    ]
});



