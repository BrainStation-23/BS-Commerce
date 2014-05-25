'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	passport = require('passport'),
	logger = require('mean-logger');

/**
 * Main application entry file.
 **/

// Initializing system variables

var mean = require('meanio');

var options = {};

mean.app(options, function(app, config) {
	
	console.log('Mean app started on port ' + config.port + ' (' + process.env.NODE_ENV + ')');

	// Initializing logger
	logger.init(app, passport, mongoose);

	// Expose app
	exports = module.exports = app;
});
