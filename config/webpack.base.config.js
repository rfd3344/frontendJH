const path = require('path');
const webpack = require('webpack');


const entryConfig = {
	main: path.resolve(__dirname, '../src/index.jsx'),
	entry2: path.resolve(__dirname, '../src/entry2.js'),
};

const outputConfig = {
	filename: './dist/[name].bundle.js',
	path: path.resolve(__dirname, '../public/'),
	publicPath: '/',
};

const moduleConfig = {
	rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /(node_modules|bower_components)/,
			use: [
				{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
				// closed eslint check, reduce info generate in Terminal
				// { loader: 'eslint-loader' },
			],
		},
		{
			test: /\.(less|css)$/,
			use: [
				{ loader: 'style-loader' },
				{ loader: 'css-loader' },
				{ loader: 'less-loader' },
			],
		},
		{
			test: /\.(png|jpg|gif)$/,
			use: [{ loader: 'file-loader' }],
		},
	],
};

const resolveConfig = {
	alias: {
		// Define directory with alias name. usage:
		// import AxiosMethod from 'utilis/AxiosMethod';
		_src: path.resolve(__dirname, '../src/'),
		_utilis: path.resolve(__dirname, '../src/utilis'),
		_helper: path.resolve(__dirname, '../src/helper'),
		_static: path.resolve(__dirname, '../src/static'),
		_enums: path.resolve(__dirname, '../src/enums'),
		_actions: path.resolve(__dirname, '../src/actions'),
		_reducers: path.resolve(__dirname, '../src/reducers'),
		_layout: path.resolve(__dirname, '../src/layout'),
		_views: path.resolve(__dirname, '../src/views'),

		_tests: path.resolve(__dirname, '../tests'),
		_testData: path.resolve(__dirname, '../tests/testData'),
		_testHelper: path.resolve(__dirname, '../tests/testHelper'),
	},
};

const performanceConfig = {
	hints: 'warning',
	maxEntrypointSize: 4000000,
	maxAssetSize: 4000000,
};

const pluginsConfig = [
	new webpack.NamedModulesPlugin(),
];

const nodeConfig = {
	fs: 'empty',
};

module.exports = {
	entry: entryConfig,
	output: outputConfig,
	module: moduleConfig,
	resolve: resolveConfig,
	performance: performanceConfig,
	plugins: pluginsConfig,
	node: nodeConfig,
};
