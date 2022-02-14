'use strict';

var mongoose = require('mongoose'),
    Brand = mongoose.model('Brand'),
    Q = require('q');

exports.createBrand = function(req){
    var deferred = Q.defer();
    var newBrand = new Brand(req.body);
    newBrand.save(function(error, brand){
        if(error){
            return deferred.reject(error);
        }
        return deferred.resolve(brand);
    });
    return deferred.promise;
};

exports.getBrands = function(searchQuery, skipSize, limitSize){
    var deferred = Q.defer();
    skipSize = parseInt(skipSize);
    limitSize = parseInt(limitSize);

    Brand.find(searchQuery).skip(skipSize).limit(limitSize)
        .exec(function(error, brands){
            if(error){
                return deferred.reject(error);
            }
            return deferred.resolve(brands);
        });

    return deferred.promise;
};

exports.getBrandsNumber = function(searchQuery, callback) {
    Brand.find(searchQuery).count()
        .exec(function(error, total) {
            if(error) {
                callback(0);
            }
            callback(total);
        });
};

exports.getBrandById = function(brandId){
    var deferred = Q.defer();

    Brand.findOne({_id: brandId})
        .exec(function(error, brand){
            if(error){
                return deferred.reject(error);
            }
            return deferred.resolve(brand);
        });

    return deferred.promise;
};

exports.updateBrand = function(req){
    var deferred = Q.defer();

    Brand.findByIdAndUpdate(req.body._id, req.body, function(error, brand) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.resolve(brand);
    });
    return deferred.promise;
};

exports.deleteBrandById = function(brandId){
    var deferred = Q.defer();

    Brand.findByIdAndRemove(brandId, function(error, doc) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.resolve(doc);
    });
    return deferred.promise;

};
