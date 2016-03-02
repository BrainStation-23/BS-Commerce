'use strict';

var mongoose = require('mongoose'),
    Product = mongoose.model('Product'),
    Category = mongoose.model('Category'),
    Brand = mongoose.model('Brand'),
    Q = require('q');

exports.searchList = function (query, page, limit) {
    var deferred = Q.defer();
    var skip = (parseInt(page)-1)* limit;
    Product.count(query).exec(function(err, count){
        if(err){
            return deferred.reject(err);
        }
        Product.find(query).limit(limit).skip(skip).exec(function (error, products) {
            if (error) {
                return deferred.reject(error);
            }
            return deferred.resolve({total: count, products: products});
        });
    });

    return deferred.promise;
};

exports.getCategoryBySlug = function (slug, callback) {
    Category.findOne({slug: slug}, "_id").exec(function(err, category){
        if(err){
            return callback(null);
        }
        return callback(category._id);
    });
};

exports.getCategoriesByQuery = function (query, callback) {
    var categories = [];
    Category.find(query, "_id").exec(function(err, getCategories){
        if(err || !getCategories){
            return callback([]);
        }

        getCategories.forEach(function(category) {
            categories.push(category._id);
        });
        return callback(categories);

    });
};

exports.getBrandByName = function (name, callback) {
    Brand.findOne({"info.name": name}, "_id").exec(function(err, brand){
        if(err || !brand){
            return callback(null);
        }
        return callback(brand._id);
    });
};
