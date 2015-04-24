'use strict';

var mongoose = require('mongoose'),
  Category = mongoose.model('Category'),
  Product = mongoose.model('Product'),
  _ = require('lodash'),
  Q = require('q');

exports.search = function(slug, currentPage, pageSize){
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

  Product.find({})
    .exec(function(error, products){
      if(error){
        return deferred.reject(error);
      }
      return deferred.resolve(products);
    });

  return deferred.promise;
};