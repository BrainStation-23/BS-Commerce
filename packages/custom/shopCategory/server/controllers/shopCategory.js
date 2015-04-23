'use strict';

var service = require('../services/shopCategory');

exports.list = function(req, res){
  service.list()
    .then(function(list){
      return res.status(200).send(list);
    })
    .catch(function(error){
      return res.status(500).send({msg: 'Error occurred while loading categories', error: error});
    })
    .done();
};

exports.get = function(req, res){
  service.get(req.params.id)
    .then(function(category){
      return res.status(200).send(category);
    })
    .catch(function(error){
      return res.status(500).json([{msg: 'Internal server error!'}]);
    })
    .done();
};