const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config.js');
const packageJson = require('../package.json');

const pluginsConfig = [
  new HtmlWebpackPlugin({
    template: './config/entry.html',
    filename: './index.html',
    inject: 'body',
  }),
  new webpack.DefinePlugin({
    __VERSION__: packageJson.version,
  }),
];

const optimizationConfig = {
  runtimeChunk: {
    name: 'runtimeChunk',
  },
  // splitChunks: {
  //   // chunks: 3 mode
  //   chunks: 'async',
  //   minSize: 30000,
  //   maxSize: 0,
  //   minChunks: 1,
  //   maxAsyncRequests: 5,
  //   maxInitialRequests: 3,
  //   automaticNameDelimiter: '~',
  //   name: true,
  //   cacheGroups: {
  //     vendors: {
  //       test: /[\\/]node_modules[\\/]/,
  //       priority: -10,
  //     },
  //     default: {
  //       minChunks: 2,
  //       priority: -20,
  //       reuseExistingChunk: true,
  //     },
  //   },
  // },
  splitChunks: { // split commom chunks
    chunks: 'async',
    minSize: 20000,
    minRemainingSize: 0,
    minChunks: 1,
    maxAsyncRequests: 30,
    maxInitialRequests: 30,
    enforceSizeThreshold: 50000,
    cacheGroups: {
      vendor: {
        priority: 1,
        name: 'vendorChunk',
        test: /node_modules/,
        chunks: 'initial',
        minSize: 0,
        minChunks: 1,
      },
      common: {
        // common module
        chunks: 'initial',
        name: 'commonChunk',
        minSize: 100,
        minChunks: 3,
      },
    },
  },
};


module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  plugins: pluginsConfig,
  optimization: optimizationConfig,
});
