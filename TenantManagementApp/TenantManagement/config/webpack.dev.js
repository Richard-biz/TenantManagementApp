const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const helpers = require('./webpack.helpers');
const ROOT = path.resolve(__dirname, '..');

module.exports = {

    devtool: 'source-map',
    performance: {
        hints: false
    },
    entry: {
        'polyfills': './AngularApp/polyfills.ts',
        'vendor': './AngularApp/vendor.ts',
        'app': './AngularApp/main.ts'
    },

    output: {
        path: ROOT + '/wwwroot/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['.ts', '.js', '.json']
    },

    devServer: {
        historyApiFallback: true,
        contentBase: path.join(ROOT, '/wwwroot/'),
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'awesome-typescript-loader',
                    'angular-router-loader',
                    'angular2-template-loader',
                    'source-map-loader',
                    'tslint-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/,
                use: 'file-loader?name=assets/[name]-[hash:6].[ext]'
            },
            {
                test: /favicon.ico$/,
                use: 'file-loader?name=/[name].[ext]'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                include: path.join(ROOT, 'angularApp/styles'),
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.scss$/,
                exclude: path.join(ROOT, 'angularApp/styles'),
                use: [
                    'raw-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ],
        exprContextCritical: false
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: ['vendor', 'polyfills'] }),

        new CleanWebpackPlugin(
            [
                './wwwroot/dist',
                './wwwroot/assets'
            ],
            { root: ROOT }
        ),

        new HtmlWebpackPlugin({
            //filename: '../Views/Shared/_Layout.cshtml',
            //inject: 'body',
            //template: 'AngularApp/_Layout.cshtml'
            filename: '../Angularapp/Index.cshtml',
            inject: 'body',
            template: 'Views/Home/Index.cshtml'
        }),

        new CopyWebpackPlugin([
            { from: './AngularApp/images/*.*', to: 'assets/', flatten: true }
        ])
    ]

};

