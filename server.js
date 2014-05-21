'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	passport = require('passport'),
	logger = require('mean-logger');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Initializing system variables

var mean = require('meanio');

var defaultConfig = require('./server/config/config');
var db = mongoose.connect(defaultConfig.db);

// Call this function when the settings have been loaded
function ready(config) {

	// Bootstrap Models, Dependencies, Routes and the app as an express app
	var app = require('./server/config/system/bootstrap')(passport, db);

	// Start the app by listening on <port>, optional hostname
	app.listen(config.port, config.hostname);
	console.log('Mean app started on port ' + config.port + ' (' + process.env.NODE_ENV + ')');

	// Initializing logger
	logger.init(app, passport, mongoose);

	// Expose app
	exports = module.exports = app;

}

mean.app(defaultConfig.app.name, {
	database: db
}, ready);
