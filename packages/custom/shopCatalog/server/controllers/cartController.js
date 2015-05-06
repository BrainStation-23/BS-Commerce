'use strict';

var cartService = require('./services/cartService');

exports.getCart = function(req, res){
  cartService.getCart(req.user.id)
    .then(function(cart){
      return res.status(200).send(cart);
    })
    .catch(function(error){
      return res.status(500).send({msg: 'Error occurred while loading categories', error: error});
    })
    .done();
};

exports.addItem = function(req, res){
  cartService.addItem(req.user.id, req.body.productId, req.body.quantity)
    .then(function(cart){
      return res.status(200).send(cart);
    })
    .catch(function(error){
      return res.status(500).send({msg: 'Error occurred while loading cart', error: error});
    })
    .done();
};
