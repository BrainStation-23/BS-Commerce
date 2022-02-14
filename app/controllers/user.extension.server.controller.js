'use strict';

var _ = require('lodash'),
  	validator = require('validator'),
	validation = require('../services/validation.server.service'),
  	mongoose = require('mongoose'),
  	User = mongoose.model('User'),
	Order = mongoose.model('Orders'),
	passport = require('passport'),
	userService = require('../services/user.extension.server.service'),
	cartService = require('../services/cart.server.service'),
	wishlistService = require('../services/wishlist.server.service'),
	compareService = require('../services/compare.server.service');


exports.getUserById = function(req, res) {
	User
		.findOne({_id: req.params.userId}, '-hashed_password -salt -password')
		.lean()
		.exec(function(error, user) {
			if(error || user === null) {
				return res.status(400).send(error);
			}
			Order.find({user: req.params.userId}, '-billingAddress -shippingAddress -products', function(err, orders) {
				if(err) {
					return res.status(400).send(error);
				}
				user.orders = orders;
				return res.status(200).send(user);
			});
		});
};

var generateSearchQuery = function(req, callback) {
	var searchQuery={};
	var roles = [];
	var userRoles = req.query.roles === undefined || req.query.roles === '';
	var userEmail = req.query.email === undefined || req.query.email === '';
	var userName = req.query.name === undefined || req.query.name === '';
	if(!userRoles) {
		roles = req.query.roles.split(',');
	}
	if(!userRoles) {
		searchQuery = {roles: { $in: roles}};
	}
	if(!userEmail) {
		searchQuery.email = req.query.email;
	}
	if(!userName) {
		searchQuery.displayName = {'$regex': req.query.name};
	}
	callback(searchQuery);
};

exports.searchUser = function(req, res) {
	var skipSize = req.query.numberOfSkip|| 0;
	var limitSize = req.query.numberOfDisplay || 0;
	generateSearchQuery(req, function(searchQuery) {
		userService.searchUser(searchQuery, skipSize, limitSize)
			.then(function(users){
				userService.getNumberOfUser(searchQuery, function(total) {
					return res.status(200).json({users: users, totalUser: total});
				});
			})
			.catch(function(error){
				return res.status(500).json({msg: 'Error occurred while getting users', error: error});
			})
			.done();
	});
};

exports.changeUserPassword = function(req, res) {

	User.findOne({_id: req.body.userId}, function(error, user) {
		if(error || user === null) {
			return res.sendStatus(400);
		}
		user.password = req.body.password;
		user.save(function(error, doc) {
			if (error) {
				return res.sendStatus(500);
			}
			return res.sendStatus(200);
		});
	});
};

exports.updateUserInfo = function(req, res) {
	if (!req.user) {
		return res.status(401).send([{msg: 'Access denied'}]);
	}

	User.update({_id:req.body._id}, {
		$set: {
			email: req.body.email,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			phoneNumber: req.body.phoneNumber,
			addresses: req.body.addresses,
			roles: req.body.roles,
			active: req.body.active,
			gender: req.body.gender
		}
	}, function(error, count){
		if(error || !count){
			return res.status(500).send({msg: 'An unhandled error occurred, please try again'});
		}
		return res.status(200).send({msg: 'The customer has been updated successfully.'});
	});

};

exports.removeUserById = function(req, res) {
	if (!req.user) {
		return res.status(401).send([{msg: 'Access denied'}]);
	}
	cartService.deleteCartByUserId(req.query.userId).then(function(cartResponse) {
		wishlistService.deleteWishlistByUserId(req.query.userId).then(function(wishListResponse) {
			compareService.deleteCompareByUserId(req.query.userId).then(function(compareResponse) {
				User.findByIdAndRemove(req.query.userId, function(err, doc) {
					if(err) {
						return res.status(400).send({msg: 'An unhandled error occurred, please try again'});
					}
					return res.status(200).send({msg: 'User delete successfully.'});
				});
			}, function(error) {
				return res.status(400).send({msg: 'Error occurred while deleting user compare list'});
			});
		}, function(error) {
			return res.status(400).send({msg: 'Error occurred while deleting user wishlist'});
		});
	}, function(error) {
		return res.status(400).send({msg: 'Error occurred while deleting user cart'});
	});
};

exports.createUser = function(req, res) {

	var user = new User(req.body);

	user.email= user.email.toLowerCase();
	user.username = user.email;
	user.status = 'email-not-verified';
	user.displayName = user.firstName + ' ' + user.lastName;
	user.provider = 'local';

	user.save(function(error) {
		if(error) {
			console.log(error);
			if(error.errors.email){
				return res.status(409).send({msg: error.errors.email.message});
			}
			return res.status(400).send({msg: 'An unhandled error occurred, please try again'});
		}
		return res.status(200).send({msg: 'User Create Success'});
	});
};


var guestUserNameGenerator =  function(){
	var newUserName = '';
	var possibleCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for( var i=0; i < 9; i+=1 )
		newUserName += possibleCharacter.charAt(Math.floor(Math.random() * possibleCharacter.length));

	return newUserName;
};

exports.createGuestUser = function(req, res) {

	var userName = guestUserNameGenerator();
	var email = userName +'@guest.com';
	var guestUser = {
		roles:['guest'],
		username:userName,
		email: email,
		password: userName,
		firstName: 'guest',
		lastName: 'user'
	};
	var user = new User(guestUser);
	var message = null;

	// Add missing user fields
	user.provider = 'local';
	user.displayName = user.firstName + ' ' + user.lastName;
	user.save(function(error,newUser) {
		if (error) {
			return res.status(400).send({ message: 'Error occurred during creating guest user'});
		} else {
			// Remove sensitive data before login
			user.password = undefined;
			user.salt = undefined;

			req.login(user, function(err) {
				if (err) {
					res.status(400).send(err);
				} else {
					res.json(user);
				}
			});
		}
	});
};

exports.getUserStatistics = function(req, res) {
	var today = new Date();
	today.setHours(0,0,0,0);
	var thisWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
	var thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
	var thisYear = new Date(today.getFullYear(), 0, 1);

	User.aggregate(
		[
			{
				$group : {
					_id : null,
					todayTotal: { $sum: {$cond: [ { $gte: [ '$created', today ] }, 1, 0 ] } },
					weekTotal: { $sum: {$cond: [ { $gte: [ '$created', thisWeek ] }, 1, 0 ] } },
					monthTotal: { $sum: {$cond: [ { $gte: [ '$created', thisMonth ] }, 1, 0 ] } },
					yearTotal: { $sum: {$cond: [ { $gte: [ '$created', thisYear ] }, 1, 0 ] } },
					allTimeTotal: { $sum: 1 }
				}
			}
		]
	).exec(function(error, users) {
			if(error) {
				return res.status(500).send(error);
			}
			return res.status(200).send(users);
		});
};

exports.signInUserWithGuestUserItems = function(req, res, next) {

	var requestItems = req.body.items;

	passport.authenticate('local', function(err, user, info) {
		if (err || !user) {
			res.status(400).send(info);
		} else {
			// Remove sensitive data before login
			user.password = undefined;
			user.salt = undefined;

			cartService.mergeItemsForExistingUser(user._id, requestItems)
				.then(function(success){
					req.login(user, function(loginErr) {
						if (err) {
							return res.status(400).send(loginErr);
						} else {
							return res.json(user);
						}
					});

				})
				.catch(function(error){
					return res.status(400).send(error);
				})
				.done();
		}
	})(req, res, next);
};
