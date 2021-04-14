const path = require('path');

const entryConfig = {
	main: path.resolve(__dirname, '../src/index.jsx'),
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
		_src: path.resolve(__dirname, '../src/'),
		_actions: path.resolve(__dirname, '../src/actions'),
		_reducers: path.resolve(__dirname, '../src/reducers'),
		_helper: path.resolve(__dirname, '../src/helper'),
		_constants: path.resolve(__dirname, '../src/constants'),
		_components: path.resolve(__dirname, '../src/components'),
		_pages: path.resolve(__dirname, '../src/pages'),
	},
};

const performanceConfig = {
	hints: 'warning',
	maxEntrypointSize: 4000000,
	maxAssetSize: 4000000,
};

const pluginsConfig = [
	// new webpack.NamedModulesPlugin(),
];


module.exports = {
	entry: entryConfig,
	output: outputConfig,
	module: moduleConfig,
	resolve: resolveConfig,
	performance: performanceConfig,
	plugins: pluginsConfig,
};
