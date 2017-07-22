const path = require('path');

const baseDirectory = __dirname;
const buildPath = path.resolve(baseDirectory, "dist");

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;


const config = {
    entry: {
        app: './src/app.js',
    },

    output: {
        //导出目录
        path: buildPath,
        // publicPath: '/dist/',
        publicPath: '/jirengu-inc/jrg-renwu8/homework/黄恩强/senior-task5/www/dist/',
        // 包规范格式
        libraryTarget: 'umd',
        library: 'myLibrary',
        // hash位数
        hashDigestLength: 8,
        // 文件名
        chunkFilename: '[chunkhash]_[name].js',
        // 导出文件
        // hash  ==> webpack编译过程
        // chunkhash ==> webpack对每个文件的hash
        filename: '[name]_[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["es2015"]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 100,
                        name: '/img/[name]_[sha512:hash:base64:7].[ext]'
                    }
                }
            },
            {
                test: /\.html/,
                use: ['html-loader']
            }
        ]
    },
    devtool: "source-map",
    plugins: [

        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // 将jquery暴露给所有模块，其它模块不用再显式require('jquery')
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        // 构建前清理构建目录文件
        new CleanWebpackPlugin(['dist']),

        new HtmlWebpackPlugin({
            filename: './index.html', //生成的html存放路径
            template: './src/index.html'
        }),

        new ManifestPlugin()

    ],


}


module.exports = config;