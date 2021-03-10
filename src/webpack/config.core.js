const args = require('yargs').argv;
const { join, resolve } = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');
const mode = args.env || 'development';

module.exports = {
  mode,
  entry: {
    // router: resolve(__dirname, './router.js'),
    app: resolve(paths.JS_SRC, './index.js')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: join(__dirname, './src'),
    hot: true,
    publicPath: '/',
    open: true,
    // openPage: 'flight',
    inline: true,
    port: 3000
  },
  output: {
    path: paths.OUTPUT,
    filename: '[name].js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: join(paths.ROOT, './src/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: resolve(paths.CSS_SRC, './index.js')
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]((?!(rc-slider)).*)[\\/]/,
          chunks: 'initial',
          name: 'common',
          enforce: true,
        },
      },
    },
  },
};