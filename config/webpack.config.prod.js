const webpack = require('webpack');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config.js');
const packageJson = require('../package.json');

const pluginsConfig = [
	new HtmlWebpackPlugin({
		template: './public/entry.html',
		filename: './index.html',
		inject: 'body',
	}),
	new webpack.DefinePlugin({
		__VERSION__: packageJson.version,
	}),
];


module.exports = merge(webpackBaseConfig, {
	mode: 'production',
	plugins: pluginsConfig,
});
