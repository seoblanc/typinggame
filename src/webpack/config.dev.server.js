const { HotModuleReplacementPlugin } = require('webpack');
const { join } = require('path');
const paths = require('./paths');

module.exports = {
    mode: 'development',
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: join(paths.ROOT, './src/index.html')
        // }),
        new HotModuleReplacementPlugin(),
    ],
    devServer: {
        publicPath: '/',
        open: true,
        // openPage: 'home',
        hot: true,
        port: 3000,
    }
}