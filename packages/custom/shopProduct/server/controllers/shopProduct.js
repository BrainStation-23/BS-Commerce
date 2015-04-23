'use strict';

var service = require('../services/shopProduct');

exports.list = function(req, res){
  var promise = req.query.slug ? service.search(req.query.slug, 3, 0) : service.all(3,0);

  promise
    .then(function(products){
      return res.status(200).json(products);
    })
    .catch(function(error){
      return res.status(500).json([{msg: 'Unhandled Error!'}]);
    })
    .done();
};