const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    "babel-loader",
                    {
                        loader: "eslint-loader",
                        options: {
                            fix: true
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"./public/index.html")
        })
    ],
    devServer:{
        port: 3001,
        // open: true,
        overlay: true,
        contentBase: path.resolve(__dirname, "./public")
    }
};
