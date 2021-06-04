const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackBaseConfig = require('./webpack.base.config.js');
const ENV = require('../env.js');

const devServerConfig = {
  port: ENV.PORT,
  open: true,
  hot: true,
  // inline: false,   // this will disable Hot Module
  historyApiFallback: true,
  contentBase: path.join(__dirname, '../public'),
  host: 'localhost',
  publicPath: '/',
  // lazy: true,
  filename: 'bundle.js',
  // overlay: {
  // 	warnings: true,
  // 	errors: true,
  // }
};

const pluginsConfig = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template: './config/entry.html',
    filename: 'index.html',
    inject: 'body',
  }),
  new webpack.DefinePlugin({
    jhDebug: true,
  }),
];

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devServer: devServerConfig,
  devtool: 'source-map',
  plugins: pluginsConfig,
  // watch: true,
  // watchOptions: {
  // 	aggregateTimeout: 300,
  // 	poll: 1000,
  // 	ignored: ['node_modules'],
  // },

});
