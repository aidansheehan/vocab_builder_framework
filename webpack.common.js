const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
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
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
            template: path.join(__dirname, '/src/index.html')
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            process: { env: {} }
        })
    ],
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.scss' ],
        fallback: { 
            "url": require.resolve("url/"),
            "http": require.resolve("stream-http"),
            "stream": require.resolve("stream-browserify"),
            "https": require.resolve("https-browserify"),
            "assert": require.resolve("assert/"),
            "buffer": require.resolve("buffer/"),
            "zlib": require.resolve('browserify-zlib')
        }
    },
};