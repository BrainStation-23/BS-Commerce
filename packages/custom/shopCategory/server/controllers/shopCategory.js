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

exports.getById = function(req, res){
  service.getById(req.params.id)
    .then(function(category){
      return res.status(200).send(category);
    })
    .catch(function(error){
      return res.status(500).json([{msg: 'Internal server error!'}]);
    })
    .done();
};

exports.getBySlug = function(req, res){
  service.getBySlug(req.params.slug)
    .then(function(category){
      return res.status(200).send(category);
    })
    .catch(function(error){
      return res.status(500).json([{msg: 'Internal server error!'}]);
    })
    .done();
};

exports.addCategory = function(cat, imageId){
    service.addCategory(cat, imageId);
};

exports.deleteById = function(req, res){
  console.log('going to delete category', req.params.id);
  service.deleteById(req.params.id)
      .then(function(){
        console.log('success');
        return res.status(200).json([{msg: 'success'}]);
      })
      .catch(function(error){
        console.log('error');
        return res.status(500).json([{msg: error}]);
      })
      .done();

};