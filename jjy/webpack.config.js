var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        proxy: {
            "/ext/*": {
                target: "http://WAS-IP",
                secure: false,
                pathRewrite: function(path, req) {
                    return path.replace(/^\/ext/, '');
                }
            }
        },
        hot: true
    },
    context: __dirname + "/src",
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
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Title',
            template: 'index.html'
        })
    ]
};

