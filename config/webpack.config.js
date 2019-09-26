

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})
const path = require('path');
const express = require('express')
var app = express()



module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  mode: 'production',
  performance: {
    hints: 'warning',
    maxEntrypointSize: 4000000,
    maxAssetSize: 4000000,
  },
  output: {
    filename: '[name]bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, '../public'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: { loader: 'babel-loader' }
      },
      { test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      },
      { test: /\.(png|jpg|gif)$/,
        use: [ { loader: 'file-loader' }  ]
      }
    ]
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, '../src/'),
      'components': path.resolve(__dirname, '../src/components'),
      'views_admin': path.resolve(__dirname, '../src/views_admin'),
      'views_page': path.resolve(__dirname, '../src/views_page'),
      'utilis': path.resolve(__dirname, '../src/utilis'),
      'assets': path.resolve(__dirname, '../src/assets')
    }
  },
  plugins: [
    HtmlWebpackPluginConfig,
  ],
  devServer:{
    port: 3000,
    historyApiFallback: true,
    contentBase: path.join(__dirname, '../public'),
    host: '0.0.0.0'
  }
}
