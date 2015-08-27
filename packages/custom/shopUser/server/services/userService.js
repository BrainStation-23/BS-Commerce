'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Q = require('q');


exports.searchUser = function(searchQuery, skipSize, limitSize) {
    var deferred = Q.defer();
    User.find(searchQuery).skip(skipSize).limit(limitSize)
        .exec(function(error, users) {
            if(error) {
                return deferred.reject(error);
            }
            return deferred.resolve(users);
        });
    return deferred.promise;
};

exports.getNumberOfUser = function(searchQuery, callback) {
    User.find(searchQuery).count()
        .exec(function(error, total) {
            if(error) {
                callback(0);
            }
            callback(total);
        });
};
