'use strict';

var mean = require('meanio'),
  _ = require('lodash'),
  validator = require('validator'),
  validation = require('../../../shopCore/server/framework/validation/validation'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  nodemailer = require('nodemailer');


mean.loadConfig();

exports.create = function(req, res, next) {
  var user = new User({
	name: req.body.name,
	username: req.body.email.toLowerCase(),
	email: req.body.email.toLowerCase(),
	password: req.body.password,
	phoneNumber: req.body.phoneNumber,
	status: 'email-not-verified'
  });

  user.provider = 'local';

  // because we set our user.provider to local our models/user.js validation will always be true
  req.assert('name', 'You must enter a name').notEmpty();
  req.assert('email', 'You must enter a valid email address').isEmail();
  req.assert('password', 'Password must be between 6-20 characters long').len(6, 20);
  req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);

  var errors = req.validationErrors();
  if (errors) {
	return res.status(400).send(errors);
  }

  // Hard coded for now. Will address this with the user permissions system in v0.3.5
  user.roles = ['authenticated'];
  user.save(function(err) {
	if (err) {
	  var modelErrors = [];
	  if (err.errors) {

		for (var x in err.errors) {
		  modelErrors.push({
			param: x,
			msg: err.errors[x].message,
			value: err.errors[x].value
		  });
		}

		res.status(400).json(modelErrors);
	  }
	  return res.status(400);
	}else {
	  req.logIn(user, function (err) {
		if (err) return next(err);
		return res.redirect('/');
	  });
	  res.status(200);
	}
  });
};

exports.login = function(req, res) {
  req.session.cookie.maxAge = req.body.rememberMe ? mean.config.clean.shop.sessionCookie.maxAgeWhenRemembered  : null;
  res.send({
	user: req.user
  });
};

exports.logout = function(req, res){
  req.logout();
  res.status(200).json({
	msg: 'user signed out'
  });
};

exports.changePassword = function(req, res) {
  if (!req.user) {
	return res.status(401).send([{msg: 'Access denied'}]);
  }

  User
	  .findOne({email: req.user.email}, function (error, user) {
		if (req.body.password) {
		  req.body.password = user.hashPassword(req.body.password);
		}

		req.assert('password', 'Old password is required').notEmpty();
		req.assert('password', 'Old password is invalid').equals(user.hashed_password);
		req.assert('newPassword', 'Password must be between 6-20 characters long').len(6, 20);
		req.assert('confirmNewPassword', 'New passwords do not match').equals(req.body.newPassword);

		var errors = req.validationErrors();
		if (errors) {
		  return res.status(400).send(errors);
		}
		user.password = req.body.newPassword;
		user.save(function (error, doc) {
		  if (error) {
			return res.status(500).send([{msg: 'Unhandled error! Please try again.'}]);
		  }
		  return res.status(200).send([{msg: 'Password updated successfully.'}]);
		});
	  });
};

exports.updateProfile = function(req, res){
  if (!req.user) {
	return res.status(401).send([{msg: 'Access denied'}]);
  }

  var validationList = validation
	.add(validator.matches(validator.trim(req.body.name), /(.)+/) , 'You must enter a name', {
	  param: 'name',
	  value: req.body.name
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
	return res.status(400).send(errors);
  }

  User.update({email:req.user.email}, {
	$set: {
	  name: req.body.name,
	  phoneNumber: req.body.phoneNumber,
	  addresses: req.body.addresses
	}
  }, function(error, count){
	if(error || !count){
	  return res.status(500).send([{msg: 'An unhandled error occurred, please try again'}]);
	}
	return res.status(200).send([{msg: 'Profile updated successfully.'}]);
  });
};

var passwordGenerator =  function(){
  var newPassword = '';
  var possibleCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';

  for( var i=0; i < 8; i+=1 )
	newPassword += possibleCharacter.charAt(Math.floor(Math.random() * possibleCharacter.length));

  return newPassword;
};

var sendMail = function(recipientEmail, subject, htmlBody, callback){

  var smtpTransport = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
	  user: 'qa.aareas900@gmail.com',
	  pass: 'qa.aareas'
	}
  });

  // setup e-mail data with unicode symbols
  var mailOptions = {
	from: 'BS-Commerce ✔ <info@domain.com>', // sender address
	to: recipientEmail, // list of receivers
	subject: subject + ' ✔', // Subject line
	html: htmlBody // html body
  };

  // send mail with defined transport object
  smtpTransport.sendMail(mailOptions, function(error, response){
	if(error){
	  callback(false);
	}else{
	  callback(true);
	}

	// if you don't want to use this transport object anymore, uncomment following line
	//smtpTransport.close(); // shut down the connection pool, no more messages
  });
};

exports.resetForgotPassword = function(req, res) {

  var randomPassword= passwordGenerator();
  User
	  .findOne({email: req.body.email}, function (error, user) {
		if(error || user === null) {
		  return res.status(500).send('Invalid credential !.');
		}
		user.password = randomPassword;
		user.save(function (error, doc) {
		  if (error) {
			return res.status(500).send('Unhandled error! Please try again.');
		  }
		  sendMail(req.body.email, 'BS-Commerce  password reset','<h2>Thanks for using BS-Commerce </h2><h3>your new password : '+ randomPassword +'</h3>', function(response){
			if(response) {
			  return res.status(200).send('New password sent to your email.');
			}else{
			  return res.status(500).send('Email not sent!.');
			}
		  });
		});
	  });
};

exports.getUser = function(req, res) {
	User
		.find({},function(error, user) {
			if(error || user === null) {
				return res.status(500).send(error);
			}
			return res.status(200).send(user);
		});
};

exports.getUserById = function(req, res) {
	User
		.findOne({_id: req.params.userId},function(error, user) {
			if(error || user === null) {
				return res.status(400).send(error);
			}
			return res.status(200).send(user);
		});
};

var generateSearchQuery = function(req, callback) {
	//console.dir(req.query.roles +' '+ req.query.email + ' ' + req.query.name);
	var searchQuery={};
	var roles = [];
	if(req.query.roles !== '') {
		roles = req.query.roles.split(',');
	}
	if(req.query.roles !== '' && req.query.email !== '' && req.query.name !== ''){
		searchQuery = { $and: [{roles: { $in: roles} },{ email: req.query.email, name: req.query.name }]};
	}
	else if(req.query.roles !== '' && req.query.email !== '' && req.query.name === ''){
		searchQuery = { $and: [{ roles: { $in: roles }},{ email: req.query.email }]};
	}
	else if(req.query.roles !== '' && req.query.email === '' && req.query.name !== ''){
		searchQuery = { $and: [{ roles: { $in: roles }},{ name: req.query.name }]};
	}
	else if(req.query.roles !== '' && req.query.email === '' && req.query.name === ''){
		searchQuery = {roles: {$in: roles }};
	}
	else if(req.query.email !== '' && req.query.name !== ''){
		searchQuery = {email: req.query.email,name: req.query.name};
	}
	else if(req.query.email !== '' && req.query.name === '') {
		searchQuery = {email: req.query.email};
	}
	else if(req.query.email === '' && req.query.name !== '') {
		searchQuery = {name: req.query.name};
	}

	callback(searchQuery);
};

exports.searchUser = function(req, res) {
	generateSearchQuery(req, function(searchQuery) {
		User
			.find(searchQuery, function(error, user) {
				if(error || user === null) {
					return res.status(500).send(error);
				}
				return res.status(200).send(user);
			});
	});
};

exports.changeUserPassword = function(req, res) {
	User
		.findOne({_id: req.body.userId}, function(error, user) {
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
	//if(req.body.addresses && req.body.addresses.length){
	//	var addressFieldsRequired = ['addressLine1', 'addressLine2', 'city', 'country', 'postCode'];
    //
	//	_.forEach(req.body.addresses, function(address){
	//		_.forEach(addressFieldsRequired, function(field){
	//			validationList.add(address[field] && validator.matches(validator.trim(address[field]), /(.)+/) , ('Invalid ' + field + ' {value}'), {
	//				param: field,
	//				value: address[field]
	//			});
	//		});
	//	});
	//}

	User.update({_id:req.body._id}, {
		$set: {
			email: req.body.email,
			name: req.body.name,
			phoneNumber: req.body.phoneNumber,
			addresses: req.body.addresses,
			roles: req.body.roles
		}
	}, function(error, count){
		if(error || !count){
			return res.status(500).send({msg: 'An unhandled error occurred, please try again'});
		}
		return res.status(200).send({msg: 'Profile updated successfully.'});
	});

};

exports.removeUserById = function(req, res) {
	if (!req.user) {
		return res.status(401).send([{msg: 'Access denied'}]);
	}
	User.findByIdAndRemove(req.query.userId, function(err, doc) {
		if(err) {
			return res.status(500).send({msg: 'An unhandled error occurred, please try again'});
		}
		return res.status(200).send({msg: 'Profile delete successfully.'});
	});
};

exports.createUser = function(req, res) {
	var user = new User({
		name: req.body.name,
		username: req.body.email.toLowerCase(),
		email: req.body.email.toLowerCase(),
		password: req.body.password,
		phoneNumber: req.body.phoneNumber,
		status: 'email-not-verified',
		addresses: req.body.addresses
	});

	user.provider = 'local';

	 //because we set our user.provider to local our models/user.js validation will always be true
	req.assert('name', 'You must enter a name').notEmpty();
	req.assert('email', 'You must enter a valid email address').isEmail();
	req.assert('password', 'Password must be between 6-20 characters long').len(6, 20);

	var errors = req.validationErrors();
	if (errors) {
		return res.status(400).send(errors);
	}

	user.save(function(error) {
		if(error) {
			return res.status(400).send({msg: 'An unhandled error occurred, please try again'});
		}
		return res.status(200).send({msg: 'User Create Success'});
	});
};
