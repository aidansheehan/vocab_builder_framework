const path                      = require('path')
const HtmlWebpackPlugin         = require('html-webpack-plugin');
const MiniCssExtractPlugin      = require('mini-css-extract-plugin');
const { CleanWebpackPlugin }    = require('clean-webpack-plugin');
const fs                        = require('file-system');
const webpack = require('webpack');
// const  webpack  = require('webpack');

const NODE_ENV = process.env.NODE_ENV

const isDevelopment = process.env.NODE_ENV !== 'prodcution'

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        host: 'dev.local',
        port: 3001,
        https: true
        // https: {
        //     key: fs.readFileSync('./dev.local-key.pem'),
        //     cert: fs.readFileSync('./dev.local.pem')
        // }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader']
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.component\.s(a|c)ss$/,
                use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: isDevelopment
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.component.(s(a|c)ss)$/,
                use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.scss' ],
        fallback: {
            "url": require.resolve('url/'),
            "http": require.resolve('stream-http'),
            'https': require.resolve('https-browserify'),
            "stream": require.resolve('stream-browserify'),
            "assert": require.resolve('assert'),
            "buffer": false,
            "zlib": false

        }
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[hash].css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html')
        }),
        new CleanWebpackPlugin(),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        // })
        new webpack.ProvidePlugin({
            process: 'process/browser'
        })
    ]
}