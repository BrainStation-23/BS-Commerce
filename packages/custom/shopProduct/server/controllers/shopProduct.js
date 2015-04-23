'use strict';

var mongoose = require('mongoose'),
  Category = mongoose.model('Category'),
  Product = mongoose.model('Product'),
  service = require('../services/shopProduct'),
  _ = require('lodash'),
  Q = require('q');

exports.list = function(req, res){
  var promise = req.query.slug
              ? service.search(req.query.slug, 3, 0)
              : service.all(3,0);

  promise
    .then(function(products){
      return res.status(200).json(products);
    })
    .catch(function(error){
      return res.status(500).json([{msg: 'Unhandled Error!'}]);
    })
    .done();
};