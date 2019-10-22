'use strict';
import StringHelper from '../../helpers/StringHelper';

import _ from 'lodash';

function noop() {}

const fakeLogger = {
	trace: noop,
	debug: noop,
	log: noop,
	warn: noop,
	info: noop,
	error: noop,
};

let builtLogger = _.clone(fakeLogger);
export var logger = builtLogger;

/*globals self: false */

//let lastCallTime;
// function formatMsgWithTimeInfo(type, msg) {
//   const now = Date.now();
//   const diff = lastCallTime ? '+' + (now - lastCallTime) : '0';
//   lastCallTime = now;
//   msg = (new Date(now)).toISOString() + ' | [' +  type + '] > ' + msg + ' ( ' + diff + ' ms )';
//   return msg;
// }

function formatMsg(type, msg) {
	let myMsg = '[' + type + '] > ' + msg;

	return StringHelper.flattenString(myMsg);
}

function consolePrintFn(type) {
	const func = self.console[type];
	if (func) {
		return function (...args) {
			if(args[0]) {
				args[0] = formatMsg(type, args[0]);
			}
			func.apply(self.console, args);
		};
	}
	return noop;
}

function exportLoggerFunctions(debugConfig, ...functions) {
	functions.forEach(function (type) {
		builtLogger[type] = debugConfig[type] ? debugConfig[type].bind(debugConfig) : consolePrintFn(type);
	});
}

export var enableLogs = function (debugConfig) {

	// reset builtLogger to a new copy of fakeLogger
	builtLogger = _.clone(fakeLogger);

	// build the new logger
	if (debugConfig === true || typeof debugConfig === 'object') {
		exportLoggerFunctions(debugConfig,
			// Remove out from list here to hard-disable a log-level
			//'trace',
			'debug',
			'log',
			'info',
			'warn',
			'error'
		);

		// Some browsers don't allow to use bind on console object anyway
		// fallback to default if needed
		try {
			builtLogger.log();
		}
		catch (e) {
			// reset if there's a failure
			builtLogger = _.clone(fakeLogger);
		}
	}

	// set the actual global logger to the new built logger.
	logger = builtLogger;
};


