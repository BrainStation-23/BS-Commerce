'use strict';

var mongoose = require('mongoose'),
    Product = mongoose.model('Product'),
    Q = require('q');

exports.searchList = function (req) {
    var deferred = Q.defer();
    console.log(req.query);
    var query = req.query;
    //var newBrand = new Brand(req.body);
    Product.find(query).exec(function (error, products) {
        if (error) {
            return deferred.reject(error);
        }
        return deferred.resolve(products);
    });
    return deferred.promise;
};
