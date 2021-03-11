const { join } = require('path');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
    mode: 'development',
    plugins: [
        new HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: join(__dirname, './src'),
        publicPath: '/',
        open: true,
        // openPage: 'home',
        hot: true,
        port: 3000,
    }
}