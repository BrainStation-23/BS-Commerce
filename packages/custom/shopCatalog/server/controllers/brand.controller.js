'use strict';

var brandService = require('../services/brand.service');

exports.createBrand = function(req, res){
    console.log('from controller');
    console.log(req.body.brand);

    brandService.createBrand(req.body.brand)
        .then(function(brand){
            return res.status(200).json(brand);
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while creating brands', error: error});
        })
        .done();
};

exports.getBrands = function(req, res){
    brandService.getBrands()
        .then(function(brands){
            return res.status(200).json(brands);
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while loading brands', error: error});
        })
        .done();
};

exports.getBrandById = function(req, res){
    brandService.getBrandById(req.params.id)
        .then(function(brand){
            return res.status(200).json(brand);
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while loading brand', error: error});
        })
        .done();
};

exports.update = function(req, res){
    brandService.update(req.params.id, req.body.brand)
        .then(function(brand){
            return res.status(200).json(brand);
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while loading brand', error: error});
        })
        .done();
};

exports.deleteBrandById = function(req, res){
    brandService.deleteBrandById(req.params.id)
        .then(function(brand){
            return res.status(200).json(brand);
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while deleting brand', error: error});
        })
        .done();
};

exports.getCount = function(req, res){
    brandService.getCount()
        .then(function(count){
            return res.status(200).json(count);
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while counting brands', error: error});
        })
        .done();
};
