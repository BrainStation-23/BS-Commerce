'use strict';

var manufacturerService = require('../services/manufacturer.server.service');

exports.createManufacturer = function(req, res) {
    manufacturerService.create(req)
        .then(function(manufacturer){
            return res.status(200).json({manufacturerId: manufacturer._id});
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while creating manufacturer', error: error});
        })
        .done();
};

var generateSearchQuery = function(req,callback) {
    var searchQuery = {};

    callback(searchQuery);
};

exports.getManufacturers = function(req, res) {
    var skipSize = req.query.numberOfSkip|| 0;
    var limitSize = req.query.numberOfDisplay || 0;
    generateSearchQuery(req, function(searchQuery) {
        manufacturerService.getManufacturers(searchQuery, skipSize, limitSize)
            .then(function(manufacturers){
                manufacturerService.getManufacturersNumber(searchQuery, function(total) {
                    return res.status(200).json({manufacturers: manufacturers, totalManufacturers: total});
                });
            })
            .catch(function(error){
                return res.status(500).json({msg: 'Error occurred while loading manufacturers', error: error});
            })
            .done();
    });
};



exports.getManufacturerById = function(req, res) {
    manufacturerService.getManufacturerById(req.query.manufacturerId)
        .then(function(manufacturer){
            return res.status(200).json(manufacturer);
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while creating manufacturer', error: error});
        })
        .done();
};

exports.updateManufacturer = function(req, res) {
    manufacturerService.updateManufacturer(req)
        .then(function(){
            return res.status(200).json({msg: 'Successfully update !'});
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while creating manufacturer', error: error});
        })
        .done();
};

exports.deleteManufacturerById = function(req, res) {
    manufacturerService.deleteManufacturerById(req.query.manufacturerId)
        .then(function() {
            return res.status(200).send({msg: 'Successfully delete manufacturer'});
        })
        .catch(function(error) {
            return res.status(500).send({msg: 'Error occurred while deleting manufacturer', error: error});
        })
        .done();
};
