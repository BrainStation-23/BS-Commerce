'use strict';

var mean = require('meanio'),
    mongoose = require('mongoose'),
    Q = require('q'),
    async = require('async'),
    _ = require('lodash');

require('../packages/custom/shopCatalog/server/models/Category');

var Category = mongoose.model('Category');

var clearCategories = function(){
  var deferred = Q.defer();

  Category.remove({},function(error, count){
    if(error){
      deferred.reject(error);
    }
    deferred.resolve();
  });

  return deferred.promise;
};

var getSlug = function(name){
  var slug = name.replace(/\s+/g, '-');
  return slug.toLowerCase();
};

var createCategory = function(category, parent, ancestors){
  var deferred = Q.defer();

  var newCategory = new Category({
    name: category.name,
    slug: getSlug(category.name),
    parent: parent,
    ancestors: ancestors
  });

  newCategory.save(function(error, doc){
    if(error){
      deferred.reject();
    }

    if(category.subCategories){
      var currentAncestors = [{
        _id: doc._id,
        name: doc.name,
        slug: doc.slug
      }];
      currentAncestors.concat(doc.ancestors);

      var promises = _.map(category.subCategories, function(c){
        createCategory(c, doc._id, currentAncestors);
      });

      Q.all(promises)
          .then(deferred.resolve)
          .catch(deferred.reject)

    }else{
      deferred.resolve(doc._id);
    }
  });

  return deferred.promise;
};

var createCategories = function(){
  var deferred = Q.defer();

  var defaultCategories = [{
    name: 'Sportswear',
    subCategories:[{name: 'Nike'}, {name: 'Adidas'}, {name: 'Puma'}]
  },{
    name: 'Mens',
    subCategories:[{name: 'Fendi'}, {name: 'Guess'}, {name: 'Valentino'}, {name: 'Dior'}, {name: 'Versace'}, {name: 'Armani'}, {name: 'Prada'}, {name: 'Dolce and Gabbana'}, {name: 'Chanel'}, {name: 'Gucci'}]
  },{
    name: 'Womens',
    subCategories: [{name: 'Fendi'}, {name: 'Guess'}, {name: 'Valentino'}, {name: 'Dior'}, {name: 'Versace'}]
  },{
    name: 'Kids',
    subCategories: []
  },{
    name: 'Fashion',
    subCategories: []
  },{
    name: 'Households',
    subCategories: []
  },{
    name: 'Interiors',
    subCategories: []
  },{
    name: 'Clothing',
    subCategories: []
  },{
    name: 'Bags',
    subCategories: []
  },{
    name: 'Shoes',
    subCategories: []
  }];

  var createPromises = _.map(defaultCategories, function(category){
    createCategory(category, null, []);
  });

  Q.all(createPromises)
      .then(deferred.resolve)
      .catch(deferred.reject);

  return deferred.promise;
};

exports.up = function(next){
  clearCategories()
      .then(createCategories)
      .catch(console.log)
      .finally(function(){
        next();
      })
      .done();
};

exports.down = function(next){
  next();
};