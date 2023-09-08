const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
    resolve: {
        extensions: [".jsx", ".js", ".json"],
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "public"),
        },
        port: 3000
    },
    entry: "./src/index",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.jsx?$/,
                loader: require.resolve("babel-loader"),
                options: {
                    presets:  ["@babel/preset-env",  ["@babel/preset-react", {"runtime": "automatic"}]],
                },
            },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.pdf$/, loader: "file-loader"}
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new Dotenv({
            path: `./.env`,
            safe: false
        })
    ]
}