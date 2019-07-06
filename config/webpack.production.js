const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

const PATHS = {
    src: path.join(__dirname, '../src')
}

module.exports = {
    output: {
        chunkFilename: "[name].[chunkhash:4].js",
        filename: "[name].[chunkhash:4].js",
    },
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
                {
                    loader: "postcss-loader",
                    options: {
                        plugins: () => ([
                            require("autoprefixer"),
                        ]),
                    },
                },
            ]
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                {
                    loader: "url-loader",
                    options: {
                        limit: 1000
                    }
                },
                {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 65
                        },
                        optipng: {
                            enabled: false,
                        },
                        pngquant: {
                            quality: '65-90',
                            speed: 4
                        },
                        gifsicle: {
                            interlaced: false,
                        },                
                        webp: {
                            quality: 75
                        }
                    }
                }
            ],
          },
          {
            test: /\.(ttf|eot|woff|woff2)$/,
            use: {
                loader: "url-loader",
                options: {
                    limit: 50000,
                },
            },
          },
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "initial",
        },
        runtimeChunk: {
            name: "manifest",
        },
        minimizer: [
            new TerserPlugin({ 
                sourceMap: true 
            })
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:4].css",
            chunkFilename: "[id].[contenthash:4].css"
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
        }),
        new CleanWebpackPlugin(),
    ],
};