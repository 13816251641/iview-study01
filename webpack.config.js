var path = require('path');

var config={
    entry:{
        main:'./src/main.js' //执行命令的路径开始
    },
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'main.js',
        publicPath: 'dist/' //webpack-dev-server在内存中进行打包时生成的静态文件所在的位置,会影响main.js&图片资源
    },
    /*
        和命令行的启动方式进行merge,命令行的参数优先级大
        contentBase:"src"代表的是"/"指向的路径
     */
    devServer: {
        open:true,
        port:3000,
        contentBase:'src'
    },
    module:{
        rules:[
            {test:/\.css$/, use: ['style-loader','css-loader']},//.vue文件中的style也可以被解析
            {test:/\.(jpg|png|gif|bmp|jpeg)$/, use: ['url-loader']},
            {test:/\.(ttf|eot|svg|woff|woff2)$/, use: ['url-loader']}, //处理字体文件的配置项
            /*
                可以直接写 <Switch> 和 <Circle> 这两个标签；
                参数 prefix 设置为 true 后，所有 iView 组件标签名都可以使用前缀 i-，例如 <i-row>、<i-select>
             */
            {test:/\.vue$/,use:[{loader: 'vue-loader'},{loader: 'iview-loader', options: {prefix:false}}]},
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [path.resolve(__dirname, 'src')], // 指定检查的目录
                options: {
                    formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
                }
            },
            {test: /\.js$/, exclude: [/node_modules/], loader: 'babel-loader'}
        ]
    }
}

module.exports=config;//nodejs中的语法

