const path = require('path');
const webpack = require('webpack');

const config = {
    resolve: {
        modules: [
            path.resolve('./lib'),
            path.resolve('./node_modules'),
        ]
    },
    entry: {
        vendor: [
            'react',
            'react-dom',
            'redux',
            'react-redux',
            'redux-logger',
            'react-router',
            'react-router-dom',
            'redux-thunk',
            // 'babel-polyfill',
            // 'prop-types',
            // 'axios',
            // 'lodash',
            // 'moment'
        ],
        app: ['./lib/renderes/dom.js'],
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'env', 'stage-2']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
        })
    ]
};

module.exports = config;