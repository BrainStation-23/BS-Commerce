'use strict';

var mongoose = require('mongoose'),
    Brand = mongoose.model('Brand'),
    //_ = require('lodash'),
    Q = require('q');

exports.createBrand = function(b){
    var deferred = Q.defer();
    var brand = new Brand(b);
    console.log('from service');
    console.log(brand);
    brand.save(function(error, brand){
        if(error){
            return deferred.reject(error);
        }
        return deferred.resolve(brand);
    });
    return deferred.promise;
};

exports.getBrands = function(req, res){
    var deferred = Q.defer();

    Brand.find({})
            .exec(function(error, brands){
                if(error){
                    return deferred.reject(error);
                }
                return deferred.resolve(brands);
            });

    return deferred.promise;
};

exports.getBrandById = function(id){
    var deferred = Q.defer();

    Brand.findOne({_id: id})
        .exec(function(error, brand){
            if(error){
                return deferred.reject(error);
            }
            return deferred.resolve(brand);
        });

    return deferred.promise;
};

exports.update = function(id, brand){
    var deferred = Q.defer();

    Brand.update({_id: id}, brand, {upsert: true}, function(error){
        if (error) {
            return deferred.reject(error);
        } else {
            return deferred.resolve(brand);
        }
    });

    return deferred.promise;
};

exports.deleteBrandById = function(id){
    var deferred = Q.defer();
    Brand.findOne({_id:id}).remove(function(error, doc){
        if(error) {
            return deferred.reject(error);
        }
        return deferred.resolve(doc);
    });

    return deferred.promise;

};

exports.getCount = function(){
    var deferred = Q.defer();
    Brand.count(function(error, count){
        if(error) {
            return deferred.reject(error);
        }
        return deferred.resolve(count);
    });

    return deferred.promise;

};