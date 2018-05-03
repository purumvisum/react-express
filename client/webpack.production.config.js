const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: [
        './app/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        ignore: '/node_modules/'
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }, {
                    loader: 'postcss-loader',
                    options: {
                        ignore: '/fonts/',
                        plugins() {
                            return [
                                require('autoprefixer')({ browsers: 'last 2 versions' })
                            ];
                        }
                    }
                }]
            },
            { test: /\.(png|woff|woff2|eot|ttf)(\?|$)/, use: 'url-loader?limit=100000' },
            {
                test: /\.svg$/,
                use: [
                    'svg-sprite-loader',
                    'svgo-loader'
                ]
            }

        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.prod.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new SpriteLoaderPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            compress: {
                sequences: true,
                booleans: true,
                loops: true,
                unused: true,
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
