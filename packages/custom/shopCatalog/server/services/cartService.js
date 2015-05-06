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
    deferred.reject({msg: "Invalid argument"});
  }

  return deferred.promise;
};

var getCartIfExists = function(userId){
  var deferred = Q.defer();

  Cart.find({user: userId})
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

  getCartIfExists()
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

exports.addItem = function(userId, product, quantity){
  var deferred = Q.defer();

  exports.getCart(userId)
    .then(function(cart){
      Cart.update({user: user},
        {
          $addToSet: {
            items: {
              product: product.id,
              quantity: quantity
            }
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