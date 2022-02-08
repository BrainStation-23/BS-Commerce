'use strict';
require('../models/theme.server.model');

var mongoose = require('mongoose'),
    Theme = mongoose.model('Theme'),
    Q = require('q');

exports.createTheme = function(req) {
    var deferred = Q.defer();
    var newTheme = new Theme(req.body);

    newTheme.save(function(error, theme) {
        if(error) {
            return deferred.reject(error);
        }

        return deferred.resolve(theme);
    });
    return deferred.promise;
};

exports.getThemes = function(req) {
    var deferred = Q.defer();
    Theme.find({}, function(error, themes) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.resolve(themes);
    });
    return deferred.promise;
};

exports.getThemeById = function(req) {
    var deferred = Q.defer();
    Theme.findOne({_id: req.params.themeId}, function(error, theme) {
        if(error) {
            return deferred.reject(error);
        }

        return deferred.resolve(theme);
    });
    return deferred.promise;
};

exports.updateTheme = function(req) {
    var deferred = Q.defer();
    Theme.findOneAndUpdate({_id: req.body._id}, req.body, function(error, theme) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.resolve({msg: 'Successfully updated'});
    });
    return deferred.promise;
};

exports.deleteTheme = function(req) {
    var deferred = Q.defer();
    Theme.findOneAndRemove({_id: req.params.themeId}, function(error, theme) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.resolve({msg: 'Successfully deleted'});
    });
    return deferred.promise;
};

exports.getDefaultTheme = function() {
    var deferred = Q.defer();
    Theme.findOne({isDefault: true}, 'name displayName -_id', function(error, theme) {
        if(error || !theme) {
            return deferred.reject(error);
        }

        return deferred.resolve(theme);
    });
    return deferred.promise;
};
