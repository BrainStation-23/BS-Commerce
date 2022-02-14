'use strict';

var wishlistService = require('../services/wishlist.server.service'),
    cartService = require('../services/cart.server.service'),
    _ = require('lodash');

exports.addToWishlist = function(req, res) {
    wishlistService.addToWishlist(req.user._id, req.body.item)
        .then(function(wishlist){
            return res.status(200).json(wishlist);
        })
        .catch(function(error){
            return res.status(400).json({msg: 'Error occurred while add item to wishlist', error: error});
        })
        .done();
};

exports.getWishlist = function(req, res) {
    if(!req.user) {
        return res.status(200).json('');
    }
    wishlistService.getWishlist(req.user._id)
        .then(function(wishlist){
            return res.status(200).json(wishlist);
        })
        .catch(function(error){
            return res.status(400).json({msg: 'Error occurred while getting wishlist', error: error});
        })
        .done();
};

exports.getWishlistById = function(req, res) {
    wishlistService.getWishlistById(req.params.wishlistId)
        .then(function(wishlist){
            return res.status(200).json(wishlist);
        })
        .catch(function(error){
            return res.status(400).json({msg: 'Error occurred while getting wishlist', error: error});
        })
        .done();
};

exports.deleteWishlistById = function(req, res){
  wishlistService.deleteWishlistById(req.query.wishlistId)
      .then(function(wishlist){
          return res.status(200).json(wishlist);
      })
      .catch(function(error){
          return res.status(400).json({msg: 'Error occurred while deleting wishlist', error: error});
      })
      .done();
};


exports.updateWishlistItem = function(req, res){
    if(req.body.item && req.body.item.quantity > 0) {
        wishlistService.updateWishlistItem(req.user._id, req.body.item)
            .then(function(wishlist){
                return res.status(200).json(wishlist);
            })
            .catch(function(error){
                return res.status(400).json({msg: 'Error occurred while updating wishlist item', error: error});
            })
            .done();
    } else {
        wishlistService.deleteWishlistItem(req.user._id, req.body.item)
            .then(function(wishlist){
                return res.status(200).json(wishlist);
            })
            .catch(function(error){
                return res.status(400).json({msg: 'Error occurred while updating wishlist item', error: error});
            })
            .done();
    }

};

exports.deleteWishlistItem = function(req, res){
    if(!req.query.product) {
        return res.status(400).send({msg: 'Invalid request sent'});
    }

    var item = {product: req.query.product};

    wishlistService.deleteWishlistItem(req.user._id, item)
        .then(function(wishlist){
            return res.status(200).json(wishlist);
        })
        .catch(function(error){
            return res.status(400).json({msg: 'Error occurred while deleting wishlist item', error: error});
        })
        .done();
};

exports.deleteAllWishlistItems = function(req, res){
    if(!req.user) {
        return res.status(401).json({msg: 'Unauthorized'});
    }
    wishlistService.deleteAllWishlistItems(req.user._id)
        .then(function(wishlist){
            return res.status(200).json(wishlist);
        })
        .catch(function(error){
            return res.status(400).json({msg: 'Error occurred while deleting wishlist item', error: error});
        })
        .done();
};

exports.getItemsWithoutPopulate = function(req, res) {
    if(!req.user) {
        return res.status(200).json('');
    }
    wishlistService.getWishlistWithoutPopulate(req.user._id)
        .then(function(wishlist){
            return res.status(200).json(wishlist.items);
        })
        .catch(function(error){
            return res.status(400).json({msg: 'Error occurred while getting wishlist', error: error});
        })
        .done();
};

exports.addWishlistItemsToCart = function(req, res) {
    if(!req.user) {
        return res.status(401).json({msg: 'Unauthorized'});
    }

    var requestItems = req.body;

    cartService.mergeItemsForExistingUser(req.user._id, [].concat(requestItems))
        .then(function(cart){
            var products= [];
            _.forEach(requestItems, function(item) {
                products.push(item.product);
            });

            wishlistService.deleteGivenItems(req.user._id, products)
                .then(function(wishlist){
                    return res.status(200).json(wishlist);
                })
                .catch(function(error){
                    return res.status(400).json({msg: 'Error occurred while updating wishlist', error: error});
                })
                .done();
        })
        .catch(function(error){
            return res.status(400).json({msg: 'Error occurred while adding wishlist items to cart', error: error});
        })
        .done();
};

