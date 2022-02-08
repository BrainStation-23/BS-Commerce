'use strict';

/**
 * Module dependencies.
 */
var themeService = require('../services/theme.server.service');

exports.index = function(req, res) {
	var themePromise = themeService.getDefaultTheme();

	themePromise.then(function(theme) {
		res.render('index', {
			user: req.user || null,
			theme: theme,
			request: req
		});
	})
	.catch(function(error){
		res.render('index', {
			user: req.user || null,
			theme: {name:'lightweight', displayName: 'Lightweight Default Theme'},//lightweight//themeGreen,
			request: req
		});
	})
	.done();

	//res.render('index', {
	//	user: req.user || null,
	//	themeName: 'lightweight',//lightweight//themeGreen
	//	request: req
	//});
};
