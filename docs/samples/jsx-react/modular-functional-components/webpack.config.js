var webpack = require("webpack");

module.exports = {
    entry: __dirname + "/App.js",
    output: {
        path: __dirname + "/dist/assets",
        filename: "bundle.js",
        sourceMapFilename: "bundle.map"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            mangle: true
        })
    ]
};
