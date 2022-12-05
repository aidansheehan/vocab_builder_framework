const path                      = require('path')
const HtmlWebpackPlugin         = require('html-webpack-plugin');
const MiniCssExtractPlugin      = require('mini-css-extract-plugin');
const { CleanWebpackPlugin }    = require('clean-webpack-plugin');
const  webpack                  = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'prodcution'
const CSSModules    = { localIdentName: 'fcb-[local]' }

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        port: 8080,
        historyApiFallback: true,
        hot: true,
        proxy: { "/api/**": { target: 'http;//localhost:8000', secure: false } }
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
                test: /\.s(a|c)ss$/,
                use: [
                    isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: CSSModules,
                            sourceMap: isDevelopment
                        }
                    },
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ],
    },
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
    plugins:[
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[hash].css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html')
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            process: { env: {} }
        })
    ],
    devtool: (isDevelopment ? "source-map" : false)
}