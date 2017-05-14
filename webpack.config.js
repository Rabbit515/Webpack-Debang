var webpack = require('webpack');
var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({minimize: true});
var CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin('common');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var providePlugin = new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery'});
module.exports = {
    entry: {index: './src/js/index.js'},
    output: {
        filename: '[name].js',
        path: __dirname + '/out',
        publicPath: 'http://localhost:8008/out'
    },
    module: {
        rules: [
            {test: /.js$/, use: ['babel-loader']},
            {test: /.css$/, use: ExtractTextPlugin.extract({fallback: 'style-loader',use: 'css-loader'})},
            {test: /.(png|jpg|jif|svg)$/, use: ['url-loader?limit=8192&name=/[name].[ext]']},
        ]
    },
    devServer: {
        contentBase: "./",
        port: 8008,
        historyApiFallback: true,
        inline: true
    },
    plugins: [uglifyPlugin, CommonsChunkPlugin,new ExtractTextPlugin("[name].css"), providePlugin]

}
