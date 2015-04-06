'use strict';

var service = require('../services/shopCategory');

exports.list = function(req, res){
  service.list()
    .then(function(list){
      res.status(200).send(list);
    })
    .catch(function(error){
      return res.status(500).send({msg: 'Error occurred while loading categories', error: error});
    })
    .done();
};