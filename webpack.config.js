const path = require('path');
const webpack = require('webpack');
const APP_PATH = path.resolve("dev/app.jsx");
const BUILD_DIR = path.resolve("dist");

const config = {
    entry: APP_PATH,
    output: {
        path: BUILD_DIR,
        filename: 'js/bundle.js',
        sourceMapFilename: "bundle.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                "presets": ["es2015", "react"]
            }
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader?name=public/fonts/[name].[ext]'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            mangle: true
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};

module.exports = config;
