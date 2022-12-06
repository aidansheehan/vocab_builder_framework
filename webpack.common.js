const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    // entry: './src/index.tsx',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
            template: path.join(__dirname, '/src/index.html')
        }),
    ],
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
};