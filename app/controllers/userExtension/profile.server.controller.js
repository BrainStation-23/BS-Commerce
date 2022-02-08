'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	errorHandler = require('../errors.server.controller.js'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	User = mongoose.model('User'),
	validator = require('validator'),
	validation = require('../../services/validation.server.service');

/**
 * Update user details
 */
exports.updateProfile = function(req, res){
	if (!req.user) {
		return res.status(401).send({msg: 'Access denied'});
	}

	var validationList = validation
		.add(validator.matches(validator.trim(req.body.firstName), /(.)+/) , 'You must enter a name', {
			param: 'firstName',
			value: req.body.firstName
		})
		.add(validator.matches(req.body.phoneNumber, /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/), 'Invalid phone number {value}',{
			param: 'phoneNumber',
			value: req.body.phoneNumber
		});

	if(req.body.addresses && req.body.addresses.length){
		var addressFieldsRequired = ['addressLine1', 'addressLine2', 'city', 'country', 'postCode'];

		_.forEach(req.body.addresses, function(address){
			_.forEach(addressFieldsRequired, function(field){
				validationList.add(address[field] && validator.matches(validator.trim(address[field]), /(.)+/) , ('Invalid ' + field + ' {value}'), {
					param: field,
					value: address[field]
				});
			});
		});
	}

	var errors = validationList.getErrors();

	if (errors.length) {
		return res.status(400).send(errors[0]);
	}

	User.findOneAndUpdate({_id:  req.user._id}, {
		$set: {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			displayName: req.body.firstName + ' ' + req.body.lastName,
			phoneNumber: req.body.phoneNumber,
			addresses: req.body.addresses
		}
	},{new: true}, function(error, user){
		if(error || !user){
			return res.status(400).send({msg: 'An unhandled error occurred, please try again'});
		}
		return res.status(200).send(user);
	});
};

/**
 * Send User
 */
exports.me = function(req, res) {
	res.json(req.user || null);
};
