'use strict';

var mongoose = require('mongoose'),
  Category = mongoose.model('Category'),
  Product = mongoose.model('Product'),
  _ = require('lodash'),
  Q = require('q');

exports.search = function(slug, pageNumber, pageSize){
  var deferred = Q.defer();

  Category.find({'$or': [{'slug': slug}, { 'ancestors.slug' : slug}]})
    .exec(function(error, categories){
      if(error){
        return deferred.reject(error);
      }

      var categoryIdList = _.map(categories, function(category){
        return category._id;
      });

      Product.find({'categories.categoryId': {'$in': categoryIdList}})
        .exec(function(error, products){
          if(error){
            return deferred.reject(error);
          }
          return deferred.resolve(products);
        });
    });

  return deferred.promise;
};

exports.all = function(pageNumber, pageSize){
  var deferred = Q.defer();

  Product.find({})
    .exec(function(error, products){
      if(error){
        return deferred.reject(error);
      }
      return deferred.resolve(products);
    });

  return deferred.promise;
};