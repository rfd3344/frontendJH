

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './public/index.html',
	filename: 'index.html',
	inject: 'body',
})
const path = require('path');

const entry = {
	main: path.resolve(__dirname, '../src/index.js'),
	entry2: path.resolve(__dirname, '../src/entry2.js'),
};

const output = {
	filename: './[name].bundle.js',
	publicPath: '/',
	path: path.resolve(__dirname, '../public/dist'),
};

// module is Globle variable
const moduleRules = {
	rules: [
		{ 	test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: [{ loader: 'babel-loader' }],
		},
		{	test: /\.less$/,
			use: [
				{ loader: 'style-loader' },
				{ loader: 'css-loader' },
				{ loader: 'less-loader' },
			]
		},
		{	test: /\.(png|jpg|gif)$/,
			use: [{loader: 'file-loader'}]
		}
	],
};

const resolve = {
	alias: {
		// Define directory with alias name. usage:
		// import AxiosMethod from 'utilis/AxiosMethod';
		'src': path.resolve(__dirname, '../src/'),
		'utilis': path.resolve(__dirname, '../src/utilis'),
		'helper': path.resolve(__dirname, '../src/helper'),
		'assets': path.resolve(__dirname, '../src/assets'),
	}
};

const optimization = {
	splitChunks: {
		chunks: 'all'
	}
};

const devServer = {
	port: 8000,
	historyApiFallback: true,
	contentBase: path.join(__dirname, '../public'),
	host: '0.0.0.0',
	publicPath: '/',
};

const performance = {
	hints: 'warning',
	maxEntrypointSize: 4000000,
	maxAssetSize: 4000000,
};
module.exports = {
	mode: 'production',
	entry: entry,
	output: output,
	module: moduleRules,
	resolve: resolve,
	optimization: optimization,
	performance: performance,
	plugins: [
		HtmlWebpackPluginConfig,
	],

}
