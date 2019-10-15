const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config.js');

const devServerConfig = {
	port: 8000,
	open: true,
	hot: true,
	historyApiFallback: true,
	contentBase: path.join(__dirname, '../public'),
	host: '0.0.0.0',
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
	// new webpack.EnvironmentPlugin({
	// 	NODE_ENV: 'development',
	// 	debug: false,
	// }),
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
