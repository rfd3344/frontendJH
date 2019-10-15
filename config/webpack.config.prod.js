const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');

const pluginsConfig = [

	new webpack.EnvironmentPlugin({
		NODE_ENV: 'production',
	}),
];


module.exports = merge(webpackBaseConfig, {
	mode: 'production',
	plugins: pluginsConfig,
});
