const path = require('path');
const APP_PATH = path.resolve("dev/App.jsx");
const BUILD_DIR = path.resolve("dist");

const config = {
    entry: APP_PATH,
    output: {
        path: BUILD_DIR,
        filename: 'js/bundle.js',
        sourceMapFilename: "bundle.map",
        publicPath: "/"
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
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};

module.exports = config;
