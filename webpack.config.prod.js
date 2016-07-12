const path = require('path');
const webpack = require('webpack');


module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        './demo/Application.js'
    ],
    output: {
        path: path.join(__dirname, 'demo'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$|\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.NoErrorsPlugin()
    ],
    postcss: function () {
        return [
            require('precss'),
            require('autoprefixer')
        ];
    }
};
