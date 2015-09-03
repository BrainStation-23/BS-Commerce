'use strict';

var mongoose = require('mongoose'),
    Product = mongoose.model('Product'),
    Q = require('q');

exports.searchList = function (req) {
    var deferred = Q.defer();
    console.log(req.query);
    var q = req.query.q;
    var limit = req.query.limit;
    var page = req.query.page;
    var skip = (parseInt(page)-1)* limit;
    console.log(q);
    Product.count({$text: {$search: q}}).exec(function(err, count){
        if(err){
            return deferred.reject(error);
        }
        Product.find({$text: {$search: q}}).limit(limit).skip(skip).exec(function (error, products) {
            if (error) {
                return deferred.reject(error);
            }
            //var total = products.length;
            return deferred.resolve({total: count, products: products});
        });
    });

    return deferred.promise;
};
