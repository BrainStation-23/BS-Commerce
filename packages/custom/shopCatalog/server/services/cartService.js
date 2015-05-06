'use strict';

var mongoose = require('mongoose'),
  Cart = mongoose.model('Cart'),
  _ = require('lodash'),
  Q = require('q');

exports.search = function(options){
  var deferred = Q.defer();

  if(options.userId){
    Cart.findOne({user: options.userId})
      .exec(function(error, cart){
        if(error){
          return deferred.reject(error);
        }
        return deferred.resolve(cart);
      });
  }else{
    deferred.reject({msg: 'Invalid argument'});
  }

  return deferred.promise;
};

var getCartIfExists = function(userId){
  var deferred = Q.defer();

  Cart.findOne({user: userId})
    .exec(function(error,cart){
      if(error){
        return deferred.reject(error);
      }

      return deferred.resolve(cart);
    });

  return deferred.promise;
};

exports.getCart = function(userId){
  var deferred = Q.defer();

  getCartIfExists(userId)
    .then(function(cart){
      if(cart){
        return deferred.resolve(cart);
      }

      Cart.create({
        user: userId
      }, function(error, cart){
        if(error){
          return deferred.reject(error);
        }
        return deferred.resolve(cart);
      });
    });

  return deferred.promise;
};

exports.update = function(userId, items){
  var deferred = Q.defer();

  exports.getCart(userId)
    .then(function(cart){
      var list = _.map(items, function(item){
        return {
          product: item.product._id,
          quantity: item.quantity
        };
      });
      Cart.update({user: userId},
        {
          $set: {
            items: list,
            updatedOn: new Date()
          }
        },function(error,cart){
          if(error){
            return deferred.reject(error);
          }

          return deferred.resolve(cart);
        });
    });

  return deferred.promise;
};