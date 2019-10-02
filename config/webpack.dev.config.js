
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const path = require('path');

const devServer = {
	port: 8000,
	open: true,
	hot: true,
	historyApiFallback: true,
	contentBase: path.join(__dirname, '../public'),
	host: '0.0.0.0',
	publicPath: '/',

};

module.exports = merge(webpackBaseConfig, {
	mode: 'development',
	devServer: devServer,

	// watch: true,
	// watchOptions: {
	// 	aggregateTimeout: 300,
	// 	poll: 1000,
	// 	ignored: ['node_modules'],
	// },



});
