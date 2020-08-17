const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
    entry:{
        page:path.join(__dirname,'../app.js')
    },
    output:{
        filename:'bundle-[hash:8].js',
        path:path.join(__dirname,'../dist')
    },
    module:{
        rules:[
            {
                test:/\.css|s[ac]ss$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            }
        ]
    },
    devServer:{
        host:'127.0.0.1',
        port:3333,
        open:true,
        // contentBase:path.join(__dirname,'./'),
    },
    
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:path.join(__dirname,'../index.html'),
            minify:{
                collapseWhitespace: false  //不压缩
            },
            chunks:['page']
        }),
        new MiniCssExtractPlugin({
            filename:'style.css'
        }),
    ]
}