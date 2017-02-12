var path = require('path');

module.exports = {
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015"]
                },
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            }, {
                test: /\.vue$/,
                loader: "vue-loader",
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.vue', '.js']
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};