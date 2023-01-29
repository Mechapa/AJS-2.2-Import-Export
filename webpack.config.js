const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]        
    },
    plugins: [
            new MiniCssExtractPlugin(
                {
                    filename: 'style.css'
                }
            ),
            new HtmlWebpackPlugin(
                {
                    template: './src/index.html',
                }
            )
        ]
}