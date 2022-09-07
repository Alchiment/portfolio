const path = require('path'); // import module from commonjs
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        'home': './src/pages/home/home.page.js',
    },
    output: {
        filename: '[name][contenthash].js', // replace name from entry object above
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 3000, // around 3kb
        }
    },
    module: {
        rules: [
            {
                test: /\.(ttf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(png|jpeg|jpg)$/, // Detecta los archivos tipo imagen para procesarlos con el asset
                type: 'asset/resource',
                // type: 'asset/resource' // Genera el archivo en base64 en el mismo bundle
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, './static'), to: path.resolve(__dirname, './dist/static') },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*', // elimina todos los archivos y subcarpetas
                path.join(process.cwd(), 'build/**/*'),
            ]
        }),
        new HtmlWebpackPlugin({
            filename: "home.html",
            title: 'Home page',
            template: 'src/templates/default.hbs',
            description: 'Home page',
            chunks: ['home'],
        })
        // new HtmlWebpackPlugin({
        //     filename: 'kiwi.html',
        //     title: 'Kiwi',
        //     template: 'src/page-template.hbs',
        //     description: 'Kiwi',
        //     chunks: ['kiwi'], // This refers to name assigned in entry object
        //     // minify: false
        // }),
    ]
}