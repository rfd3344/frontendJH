

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
	entry: {
		main: path.resolve(__dirname, '../src/index.js'),
		entry2: path.resolve(__dirname, '../src/entry2.js'),
	},
	output: {
		// filename: './dist/[name]bundle.js',
		// publicPath: '/',
		// path: path.resolve(__dirname, '../public'),
		filename: 'bundle.js',
		path: __dirname + '/build',
	},
	mode: 'production',
	performance: {
		hints: 'warning',
		maxEntrypointSize: 4000000,
		maxAssetSize: 4000000,
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	module: {
		rules: [
			{ 	test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: { loader: 'babel-loader' }
			},
			{	test: /\.less$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'less-loader' }
				]
			},
			{	test: /\.(png|jpg|gif)$/,
				use: [ { loader: 'file-loader' }	]
			}
		]
	},
	resolve: {
		alias: {
			// Define directory with alias name. usage:
			// import AxiosMethod from 'utilis/AxiosMethod';
			'src': path.resolve(__dirname, '../src/'),
			'utilis': path.resolve(__dirname, '../src/utilis'),
			'helper': path.resolve(__dirname, '../src/helper'),
			'assets': path.resolve(__dirname, '../src/assets')
		}
	},
	plugins: [
		HtmlWebpackPluginConfig,
	],
	devServer:{
		port: 8080,
		// compress: true,
		// historyApiFallback: true,
		// contentBase: path.join(__dirname, '../public'),
		// host: '0.0.0.0',
		// publicPath: '/assets/',
	
	}
}
