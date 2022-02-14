'use strict';

var mongoose = require('mongoose'),
    Product = mongoose.model('Product'),
    Category = mongoose.model('Category'),
    Brand = mongoose.model('Brand'),
    Q = require('q');

exports.searchList = function (query, page, limit) {
    var deferred = Q.defer();
    limit = parseInt(limit);
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
    Category.findOne({slug: slug}, '_id').exec(function(err, category){
        if(err){
            return callback(null);
        }
        return callback(category._id);
    });
};

var findChildCategories = function(parentId, callback) {
    var categories = [],
      findFor = [];

    function findChild(categoryIds) {
        findFor = [];
        Category.find({parent: {'$in': categoryIds}}, '_id').exec(function(err, getCategories){
            if(err || !getCategories){
                return callback(categories);
            }

            getCategories.forEach(function(category) {
                findFor.push(category._id);
            });

            if(findFor.length) {
                categories = categories.concat(findFor);
                findChild(findFor);
            }else {
                return callback(categories);
            }
        });
    }
    findChild([parentId]);
};


exports.getChildCategories = function (parentId, callback) {
    findChildCategories(parentId, function(categories) {
        return callback(categories);
    });
};

exports.getBrandByName = function (name, callback) {
    Brand.findOne({'info.name': name}, '_id').exec(function(err, brand){
        if(err || !brand){
            return callback(null);
        }
        return callback(brand._id);
    });
};
