const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const dotenv = require('dotenv');
const json = require('./package');
const sassVars = require('./src/theme.js');
const sassFuncs = require('./sassHelper');

const filename = 'server.js';
// console.log('process.env.PORT server webpack', process.env.PORT);
// let config = dotenv.config();
// console.log('config server', config);
// console.log('process.env.PORT server webpack after dotenv', process.env.PORT);

module.exports = (env, argv) => {
    const isProd = env ? !!env.prod : false;
    const isDebug = env ? !!env.debug : false;
    // console.log('process.env.PORT server ', process.env.PORT);
    // console.log('process.env.NODE_ENV_DOCKER', process.env.NODE_ENV_DOCKER);
    isProd ? dotenv.config() : require('./src/config');
    return {
        context: path.resolve(__dirname, 'src'),
        resolve: {
            extensions: ['.json', '.js', '.jsx', '.css', '.scss']
        },
        target: 'node', // in order to ignore built-in modules like path, fs, etc.
        node: false,
        externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
        devtool: 'source-map',
        entry: './server.jsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            chunkFilename: '[name].js',
            filename
        },
        mode: isProd ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                functions: sassFuncs(sassVars)
                            }
                        }
                    ]
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
                // 'process.env.HOST': JSON.stringify(process.env.HOST)
            }),
            // isProd ? new Dotenv({
            // //     // systemvars: true
            // }) : () => {},
            isProd ? new GenerateJsonPlugin('package.json', Object.assign({}, json, {
                main: filename,
                scripts: {
                    start: `node ${filename}`
                },
                devDependencies: {}
            })) : () => {},
            argv.watch ? new NodemonPlugin({
                script: path.resolve(__dirname, 'dist', filename),
                watch: path.resolve(__dirname, 'dist', filename),
                verbose: true
            }) : () => {}
        ],
    };
};
