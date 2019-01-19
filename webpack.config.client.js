const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Dotenv = require('dotenv-webpack');
const dotenv = require('dotenv');
const sassVars = require('./src/theme.js');
const sassFuncs = require('./sassHelper');

// let config = dotenv.config();
// console.log('config client', config);


module.exports = (env, args) => {
    // console.log('env', env);
    // console.log('args', args);

    const isProd = env ? !!env.prod : false;
    const isDebug = env ? !!env.debug : false;
    const config = isProd ? dotenv.config() : require('./src/config'); // eslint-disable-line global-require
    // console.log('process.env.PORT client webpack clint', process.env.PORT);
    // console.log('process.env.NODE_ENV_DOCKER', process.env.NODE_ENV_DOCKER);
    // console.log('process.env.HOST', process.env.HOST);

    return {
        context: path.resolve(__dirname, 'src'),
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true // set to true if you want JS source maps
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        target: 'web',
        // node: {
        //     // __dirname: false,
        //     // __filename: true,
        //     process: true,
        // },
        resolve: {
            extensions: ['.json', '.js', '.jsx', '.css', '.scss']
        },
        devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
        entry: './client.jsx',
        output: {
            filename: '[name].js',
            chunkFilename: '[name].js',
            path: path.resolve(__dirname, 'dist/assets'),
            publicPath: '/'
        },
        mode: isProd ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/,
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'css-hot-loader',
                        !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: isProd ? '[hash:base64]' : '[local]--[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                functions: sassFuncs(sassVars)
                            }
                        }
                    ],
                },
                {
                    test: /\.ejs$/,
                    use: 'raw-loader'
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {}
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.DEBUG': JSON.stringify(isDebug),
                'process.env.PORT': JSON.stringify(process.env.PORT),

            }),
            // isProd ? new Dotenv() : () => {},
            new HtmlWebpackPlugin({
                template: 'index.ejs',
                filename: 'index.ejs',
                favicon: 'assets/favicon.ico',
                meta: {
                    charset: 'UTF-8',
                    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
                },
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true
                }
            }),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: !isProd ? '[name].css' : '[name].[hash].css',
                chunkFilename: !isProd ? '[id].css' : '[id].[hash].css',
            }),
            // process.env.NODE_ENV_DOCKER ? new BundleAnalyzerPlugin({
            //     analyzerMode: 'static',
            //     openAnalyzer: false
            // }) : new BundleAnalyzerPlugin({})
        ],
        devServer: {
            port: config.devPort,
            open: true,
            host: process.env.NODE_ENV_DOCKER ? '0.0.0.0' : 'localhost',
            proxy: { '/': { target: config.host } }
        }
    };
};
