'use strict';
require('../models/settingsModel');
var mongoose = require('mongoose'),
    Settings = mongoose.model('Settings'),
    Q = require('q');

exports.createSettings = function(req) {
    var deferred = Q.defer();
    var newSettings = new Settings(req.body);

    newSettings.save(function(error, settings) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.resolve(settings);
    });
    return deferred.promise;
};

exports. getSettings = function(req) {
    var deferred = Q.defer();

    Settings.findOne({})
        .exec(function(error, settings){
            if(error) {
                return deferred.reject(error);
            }
            var newSettings ={};

            if(settings) {
                newSettings = {_id:settings._id, emails:settings.emails};
            }
            return deferred.resolve(newSettings);
        });
    return deferred.promise;
};

exports.updateSettings = function(req) {
    var deferred = Q.defer();
    Settings.findByIdAndUpdate(req.body._id, req.body, function(error, settings) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.resolve(settings);
    });
    return deferred.promise;
};