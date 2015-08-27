'use strict';

var mean = require('meanio'),
    mongoose = require('mongoose'),
    Q = require('q'),
    async = require('async'),
    _ = require('lodash');


require('../packages/users/server/models/user');

var User = mongoose.model('User');

var clearUser = function(){
    var deferred = Q.defer();

    User.remove({},function(error, count){
        if(error){
            deferred.reject(error);
        }
        deferred.resolve();
    });

    return deferred.promise;
};

var createUser = function(user){
    var deferred = Q.defer();

    var newUser = new User({
        name: user.name,
        username: user.email.toLowerCase(),
        email: user.email.toLowerCase(),
        password: user.password,
        phoneNumber: user.phoneNumber,
        status: user.status,
        provider: user.provider,
        roles : user.roles,
        active : user.active,
        gender : user.gender,
        addresses : user.addresses
    });


    newUser.save(function(error, doc){
        if(error){
            deferred.reject();
        }
        deferred.resolve(doc._id);
    });

    return deferred.promise;
};

var createUsers = function(){
    var deferred = Q.defer();

    var defaultUsers = [
        {
            name: 'BS-Commerce Admin',
            username: 'bs.admin@store.com',
            email: 'bs.admin@store.com',
            password: 'bs.admin',
            phoneNumber: '',
            status: 'email-verified',
            provider: 'local',
            roles : ['authenticated','admin'],
            active : true,
            gender : 'male',
            addresses : [
                {
                    addressLine1 : 'Mirpur',
                    addressLine2 : 'Mirpur',
                    city : 'Dhaka',
                    country : 'Bangladesh',
                    postCode : '1212'
                }
            ]
        }
    ];

    var createPromises = _.map(defaultUsers, function(user){
        createUser(user);
    });

    Q.all(createPromises)
        .then(deferred.resolve)
        .catch(deferred.reject);

    return deferred.promise;
};

exports.up = function(next){
    clearUser()
        .then(createUsers)
        .catch(console.log)
        .finally(function(){
            console.log('successfully create user')
            next();
        })
        .done();
};

exports.down = function(next){
  next();
};
