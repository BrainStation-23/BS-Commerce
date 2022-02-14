'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	ShopAdmin = mongoose.model('ShopAdmin'),
	_ = require('lodash');


/**
 *
 */
exports.adminHomePageRender = function(req, res) {
	console.log('call for admin');
	res.render('admin', {
		user: req.user || null,
		request: req
	});
};

/**
 * ShopAdmin authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.shopAdmin.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};
