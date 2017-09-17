module.exports = {
    entry: __dirname + "/App.js",
    output: {
        path: __dirname + "/dist/assets",
        filename: "bundle.js"
    },
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
    }
};
