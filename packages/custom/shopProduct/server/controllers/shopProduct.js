'use strict';

var service = require('../services/shopProduct');

exports.list = function(req, res){
  var promise = req.query.slug ? service.search(req.query.slug, req.query.currentPage, req.query.pageSize) : service.all(3,0);

  promise
    .then(function(data){
      res.append('total', data.total);
      return res.status(200).json(data.products);
    })
    .catch(function(error){
      return res.status(500).json([{msg: 'Unhandled Error!'}]);
    })
    .done();
};