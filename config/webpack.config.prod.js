const webpack = require('webpack');
const { merge } = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
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
	minimizer: [
		new UglifyJSPlugin({
			sourceMap: true,
			uglifyOptions: {
				compress: {
					inline: false,
				},
			},
		}),
	],
	runtimeChunk: true,
	splitChunks: {
		cacheGroups: {
			default: false,
			commons: {
				test: /[\\/]node_modules[\\/]/,
				name: 'vendor_app',
				chunks: 'all',
				minChunks: 2,
			},
		},
	},
};


module.exports = merge(webpackBaseConfig, {
	mode: 'production',
	plugins: pluginsConfig,
	optimization: optimizationConfig,
});
