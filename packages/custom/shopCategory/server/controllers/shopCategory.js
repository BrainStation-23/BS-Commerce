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

exports.addCategory = function(req, res, shopCore){
    console.log('addCategory');
    console.log(req.body.cat);
    console.log(req.files);



    res.status(200).send(req.body.cat).end();
        /*service.addCategory(req.params)
        .then(function(category){
            return res.status(200).send(category);
        })
        .catch(function(error){
            return res.status(500).json([{msg: 'Internal server error!'}]);
        })
        .done();*/
};