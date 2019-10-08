
const webpackConfig = require('./webpack.dev.config.js');

module.exports = function (config) {
	config.set({
		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		browserNoActivityTimeout: 5 * 60 * 1000,	// 5 mins


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: [
			'mocha',			// mocha support
			'detectBrowsers',	// detect's all browsers
			'chai',				// chai support. no need to import.
		],

		// Change this to go HTTPS. The crt needs to be installed as trusted root...
		protocol: 'http',

		webpack: webpackConfig,
		// list of files / patterns to load in the browser
		files: [
			'../src/index.js',
			'../tests/unit/**/*.js',
			'..//tests/integration/**/*.js',
		],


		// list of files to exclude
		exclude: [
		],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'../src/index.js': ['webpack'],
			'../tests/**/*.js': ['webpack'],
		},

		jsonFixturesPreprocessor: {
			variableName: '__json__',
		},

		// test result displayed in Terminal
		// possible values: 'dots', 'progress', 'mocha'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['mocha'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR ||
		// config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,
		autoWatchBatchDelay: 1000,


		// start these browsers -- use `--browsers all` to use all browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: [
		//	'Chrome',
		//	'IE',
		//	'Edge',
		//	'Firefox',
		//	'Safari',
		//	'Electron',
		//	'PhantomJS'
		],

		detectBrowsers: {
			// enable/disable, default is true
			// enabled: true,

			// Specify `--browsers all` on the karma cli to start all browsers.
			enabled: config.browsers.indexOf('all') > -1,

			// enable/disable phantomjs support, default is true
			usePhantomJS: true,

			// post processing of browsers list
			// here you can edit the list of browsers used by karma
			postDetection(availableBrowser) {
				// Add IE Emulation
				const result = availableBrowser;


				// if (availableBrowser.indexOf('IE')>-1) {
				// 	result.push('IE9');
				// }

				// Remove PhantomJS if another browser has been detected
				if (availableBrowser.length > 1 && availableBrowser.indexOf('PhantomJS') > -1) {
					const i = result.indexOf('PhantomJS');

					if (i !== -1) {
						result.splice(i, 1);
					}
				}

				return result;
			},
		},


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		// singleRun: false,
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity,
	});
};
