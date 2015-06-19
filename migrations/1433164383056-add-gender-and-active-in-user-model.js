'use strict';

var mean = require('meanio'),
    mongoose = require('mongoose'),
    Q = require('q'),
    async = require('async'),
    _ = require('lodash');


require('../packages/custom/shopUser/server/models/UserExtension');

var Users = mongoose.model('UserExtension');

var userSchema = function(callback) {
  Users.find({}).toArray(function(err, docs) {
    async.each(docs, function(doc, asyncCallback) {
      Users.update({ _id: doc._id }, { $set: { "gender": 'male', 'active': true}}, function() {
        asyncCallback();
      });
    }, function() {
      callback(null, "User Schema updated");
    });
  });
};

exports.up = function(next){
  async.series([userSchema], function(err, result) {
    console.info(result);
    next();
  });
};

exports.down = function(next){
  //next();
};
