const path = require('path');

const APP_DIR = path.resolve("dev/app.jsx");
const BUILD_DIR = path.resolve("dist");

const config = {
    entry: APP_DIR,
    output: {
        path: BUILD_DIR,
        filename: 'js/bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                "presets": ["es2015", "react"]
            }
        }]
    }
};

module.exports = config;
