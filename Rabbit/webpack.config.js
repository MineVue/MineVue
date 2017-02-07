var webpack = require('webpack');
var path = require('path');

var common = {
    stats: {
        errorDetails: true
    },
    context: __dirname + '/js',
    entry: [
        './app.js'
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                    // the "scss" and "sass" values for the lang attribute to the right configs here.
                    // other preprocessors should work out of the box, no loader config like this nessessary.
                    'scss': 'vue-style-loader!css-loader!sass-loader',
                    'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                }
            }
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]'
            }
        }]
    },
    resolve: {
        modules: [path.resolve(__dirname, "./src"), path.resolve(__dirname, "./node_modules")],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}

module.exports = common;
