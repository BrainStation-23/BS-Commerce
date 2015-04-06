'use strict';

var mean = require('meanio'),
  mongoose = require('mongoose'),
  Category = mongoose.model('Category'),
  _ = require('lodash'),
  Q = require('q');


mean.loadConfig();

var includeSubCategories = function(category, list){
  var subCategories = _.where(list, function(item){
    return item.parent && (item.parent._id.equals(category._id));
  });

  subCategories = _.map(subCategories, function(item){
    return {
      _id: item._id,
      name: item.name,
      slug: item.slug,
      subCategories : []
    };
  });

  category.subCategories = category.subCategories.concat(subCategories);
};

exports.list = function(){
  var deferred = Q.defer();

  Category.find({})
    .populate('parent')
    .select('name slug parent ancestors')
    .lean()
    .exec(function(error, categories){
      if(error){
        return deferred.reject(error);
      }

      var list = _.map(_.where(categories, {parent: null}), function(item){
        return {
          _id: item._id,
          name: item.name,
          slug: item.slug,
          subCategories : []
        };
      });

      _.forEach(list, function(item){
        includeSubCategories(item, categories);
      });

      deferred.resolve(list);
    });

  return deferred.promise;
};