const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
    index: './src/index.js',
    chartBars: './src/chartBars.js'
},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].bundle.js'
    },
    devServer: {
        contentBase: './dist',
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['index'] 
        }),
        new HtmlWebpackPlugin({
            filename: 'chart.html',
            template: './src/chart.html',
            chunks: ['chartBars'] 
        })
    ]
};