const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    {
                        loader: "css-loader",
                        options: {
                        importLoaders: 1,
                        },
                    },
                ]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: {
                  loader: "url-loader"            
                },
            },
            {
                test: /\.svg$/,
                use: "file-loader",
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                  loader: "url-loader"
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    devServer: {
        stats: "errors-only",
        host: process.env.HOST,
        port: process.env.PORT || 3000,
        overlay: true,
    },
    devtool: "cheap-module-eval-source-map",
};