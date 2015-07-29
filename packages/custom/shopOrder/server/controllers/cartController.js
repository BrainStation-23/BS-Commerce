'use strict';

var cartService = require('../services/cartService');

exports.getCart = function(req, res){
    if(!req.user) {
        return res.status(200).send('');
    }
    cartService.getCart(req.user._id)
        .then(function(cart){
            return res.status(200).json(cart);
        })
    .catch(function(error){
        return res.status(500).json({msg: 'Error occurred while loading categories', error: error});
    })
    .done();
};

exports.update = function(req, res){
  cartService.update(req.user.id, req.body.items)
    .then(function(cart){
          return res.status(200).json(cart);
    })
    .catch(function(error){
          return res.status(500).json({msg: 'Error occurred while loading cart', error: error});
    })
    .done();
};

exports.deleteCartById = function(req, res){
  cartService.deleteCartById(req.query.cartId)
      .then(function(cart){
          return res.status(200).json(cart);
      })
      .catch(function(error){
          return res.status(500).json({msg: 'Error occurred while deleting cart', error: error});
      })
      .done();
};
