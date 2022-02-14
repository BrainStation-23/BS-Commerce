'use strict';

var compareService = require('../services/compare.server.service');

exports.addToCompare = function(req, res) {
    compareService.addToCompare(req.user._id, req.body.item)
        .then(function(compare){
            return res.status(200).json(compare);
        })
        .catch(function(error){
            return res.status(400).json({msg: 'Error occurred while add item to compare', error: error});
        })
        .done();
};

exports.getCompare = function(req, res) {
    if(!req.user) {
        return res.status(200).json('');
    }
    compareService.getCompare(req.user._id)
        .then(function(compare){
            return res.status(200).json(compare);
        })
        .catch(function(error){
            return res.status(400).json({msg: 'Error occurred while getting compare', error: error});
        })
        .done();
};

exports.getCompareById = function(req, res) {
    compareService.getCompareById(req.params.compareId)
        .then(function(compare){
            return res.status(200).json(compare);
        })
        .catch(function(error){
            return res.status(400).json({msg: 'Error occurred while getting compare', error: error});
        })
        .done();
};

exports.deleteCompareById = function(req, res){
  compareService.deleteCompareById(req.query.compareId)
      .then(function(compare){
          return res.status(200).json(compare);
      })
      .catch(function(error){
          return res.status(400).json({msg: 'Error occurred while deleting compare', error: error});
      })
      .done();
};

exports.deleteCompareItem = function(req, res){
    if(!req.query.product) {
        return res.status(400).send({msg: 'Invalid request sent'});
    }

    var item = {product: req.query.product};

    compareService.deleteCompareItem(req.user._id, item)
        .then(function(compare){
            return res.status(200).json(compare);
        })
        .catch(function(error){
            return res.status(400).json({msg: 'Error occurred while deleting compare item', error: error});
        })
        .done();
};

exports.deleteAllCompareItems = function(req, res){
    if(!req.user) {
        return res.status(401).json({msg: 'Unauthorized'});
    }
    compareService.deleteAllCompareItems(req.user._id)
        .then(function(compare){
            return res.status(200).json(compare);
        })
        .catch(function(error){
            return res.status(400).json({msg: 'Error occurred while deleting compare item', error: error});
        })
        .done();
};
