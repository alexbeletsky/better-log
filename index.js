'use strict';

var log = console.log;
var error = console.error;
var inspect = require('util').inspect;
var extend = require('util')._extend;
var config = { depth: 1, colors: true };

function setConfig(newConfig) {
	extend(config, newConfig);
}

function beautifyArgs() {
	var args = new Array(arguments.length);
	for (var i = 0; i < arguments.length; i++) {
		var arg = arguments[i];
		args[i] = typeof arg === 'string' ? arg : inspect(arg, config);
	}
	return args;
}

function betterLog() {
	return log.apply(this, beautifyArgs.apply(undefined, arguments));
}

function betterError() {
	return error.apply(this, beautifyArgs.apply(undefined, arguments));
}

betterLog.error = betterError;

betterLog.config = function (config) {
	setConfig(config);

	return betterLog;
};

betterLog.install = function (newConfig) {
	setConfig(newConfig);

	console.error = console.warn = betterError;
	console.log = console.info = betterLog;

	return betterLog;
};

betterLog.uninstall = function () {
	console.log = log;

	return log;
};

module.exports = betterLog;
