var devModule = require('./webpack.dev.config');
var testModule = require('./webpack.test.config');
let finalModule = {};
const NODE_ENV = process.env.NODE_ENV || '';     //此处变量可由命令行传入

switch (NODE_ENV) {
case 'dev':
    finalModule = devModule;
    break;
case 'test':
    finalModule = testModule;
    break;
default:
    break;
}
module.exports = finalModule;