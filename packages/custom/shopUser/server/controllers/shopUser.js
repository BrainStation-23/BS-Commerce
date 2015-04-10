'use strict';

var mean = require('meanio'),
  validator = require('validator'),
  validation = require('../../../shopCore/server/framework/validation/validation'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');


require('meanio').loadConfig();

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

  var errors = validation
    .add(validator.matches(validator.trim(req.body.name), /(.)+/) , 'You must enter a name', {
      param: 'name',
      value: req.body.name
    })
    .add(validator.matches(req.body.phoneNumber, /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/), 'Invalid phone number {value}',{
      param: 'phoneNumber',
      value: req.body.phoneNumber
    }).getErrors();

  if (errors.length) {
    return res.status(400).send(errors);
  }

  User.update({email:req.user.email}, {
    $set: {
      name: req.body.name,
      phoneNumber: req.body.phoneNumber
    }
  }, function(error, count){
    if(error || !count){
      return res.status(500).send([{msg: 'An unhandled error occurred, please try again'}]);
    }
    return res.status(200).send([{msg: 'Profile updated successfully.'}]);
  });
};