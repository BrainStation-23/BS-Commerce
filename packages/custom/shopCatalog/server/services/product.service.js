'use strict';

var mongoose = require('mongoose'),
    Category = mongoose.model('Category'),
    Product = mongoose.model('Product'),
    _ = require('lodash'),
    async = require('async'),
    Q = require('q');

exports.search = function(slug, orderBy, currentPage, pageSize){
    var deferred = Q.defer();

    Category.find({'$or': [{'slug': slug}, { 'ancestors.slug' : slug}]})
        .exec(function(error, categories){
            if(error){
                return deferred.reject(error);
            }

            var categoryIdList = _.map(categories, function(category){
                return category._id;
            });

            var filter = {'categories.categoryId': {'$in': categoryIdList}};
            Product.find(filter)
                .sort('info.' + orderBy)
                .skip((currentPage - 1) * pageSize)
                .limit(pageSize)
                .exec(function(error, products){
                    if(error){
                        return deferred.reject(error);
                    }

                    Product.count(filter)
                        .exec(function(error, count){
                            if(error){
                                return deferred.reject(error);
                            }

                            return deferred.resolve({
                                products: products,
                                total: count
                            });
                        });
                });
        });

    return deferred.promise;
};

exports.all = function(pageNumber, pageSize){
    var deferred = Q.defer();
    var count = 0;

    Product.find({})
        .skip((pageNumber-1)*pageSize)
        .limit(pageSize)
        .exec(function(error, products){
            if(error){
                return deferred.reject(error);
            }
            return deferred.resolve({
                products: products,
                total: count
            });
        });

    return deferred.promise;
};

exports.getById = function(id){
    var deferred = Q.defer();

    Product.findOne({_id: id})
        .exec(function(error, product){
            if(error){
                return deferred.reject(error);
            }
            return deferred.resolve(product);
        });

    return deferred.promise;
};

exports.getBySKU = function(sku){
    var deferred = Q.defer();

    Product.findOne({'info.sku': sku})
        .exec(function(error, product){
            if(error){
                return deferred.reject(error);
            }
            return deferred.resolve(product);
        });

    return deferred.promise;
};

exports.create = function(req){
    var deferred = Q.defer();
    var newProduct = new Product(req.body);

    newProduct.save(function(error, product){
        if(error){
            return deferred.reject(error);
        }
        return deferred.resolve(product._id);
    });
    return deferred.promise;
};

exports.update = function(req){
    var deferred = Q.defer();
    Product.findByIdAndUpdate(req.body._id, req.body, function(error, product) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.resolve(product);
    });
    return deferred.promise;
};

exports.delete = function(id){
    var deferred = Q.defer();

    Product.findOne({_id: id}).remove(function(error, doc){
        if (error) {
            return deferred.reject(error);
        } else {
            return deferred.resolve(doc);
        }
    });

    return deferred.promise;
};

exports.getCount = function(searchQuery){
    var deferred = Q.defer();
    Product.find(searchQuery).count(function(error, count){
        if (error) {
            return deferred.reject(error);
        } else {
            return deferred.resolve(count);
        }
    });

    return deferred.promise;
};

exports.getProductByCondition = function(searchQuery, skipSize, limitSize) {
    var deferred = Q.defer();
    Product.find(searchQuery, 'info brands photos').skip(skipSize).limit(limitSize)
        .exec(function(error, brands){
            if(error){
                return deferred.reject(error);
            }
            return deferred.resolve(brands);
        });

    return deferred.promise;
};

exports.updateProductsForBrand = function(req){
    var deferred = Q.defer();
    Product.find( { _id: { '$in': req.body.productIds }}, function(error, docs) {
        if(error) {
            return deferred.reject(error);
        }
        async.each(docs, function(doc, asyncCallback) {
            doc.brands.addToSet(req.body.brandId);
            doc.save();
            asyncCallback();
        }, function(error) {
            if(error){
                return deferred.reject(error);
            }
            return deferred.resolve(docs);
        });
    });
    return deferred.promise;
};