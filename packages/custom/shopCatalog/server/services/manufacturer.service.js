'use strict';

var mongoose = require('mongoose'),
    Manufacturer = mongoose.model('Manufacturer'),
    Q = require('q');

exports.create = function(req) {
    var deferred = Q.defer();
    var newManufacturer = new Manufacturer(req.body);
    newManufacturer.save(newManufacturer, function(error) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.resolve();
    });

    return deferred.promise;
};

exports.getManufacturers = function(condition) {
    var deferred = Q.defer();

    Manufacturer.find(condition, function(error, manufacturers) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.resolve(manufacturers);
    });
    return deferred.promise;
};

exports.getManufacturerById = function(manufacturerId) {
    var deferred = Q.defer();

    Manufacturer.findOne({_id: manufacturerId}, function(error, manufacturer) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.resolve(manufacturer);
    });
    return deferred.promise;
};

exports.updateManufacturer = function(req) {
    var deferred = Q.defer();

    Manufacturer.findByIdAndUpdate(req.body._id, req.body, function(error, manufacturer) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.resolve(manufacturer);
    });
    return deferred.promise;
};

exports.deleteManufacturerById = function(req) {
    var deferred = Q.defer();

    Manufacturer.findByIdAndRemove(req.query.manufacturerId, function(error) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.promise;
    });
    return deferred.promise;
};