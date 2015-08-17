'use strict';

var brandService = require('../services/brand.service');

exports.createBrand = function(req, res){
    brandService.createBrand(req)
        .then(function(brand){
            return res.status(200).json(brand);
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while creating brands', error: error});
        })
        .done();
};

var generateSearchQuery = function(req, callback) {
    var searchQuery = {};

    var brandName = req.query.name === undefined || req.query.name === '' ;
    if(!brandName) {
        searchQuery['info.name'] = new RegExp('^'+req.query.name, 'i');
    }
    callback(searchQuery);
};

exports.getBrands = function(req, res){
    var skipSize = req.query.numberOfSkip|| 0;
    var limitSize = req.query.numberOfDisplay || 0;
    generateSearchQuery(req, function(searchQuery) {
        brandService.getBrands(searchQuery, skipSize, limitSize)
            .then(function(brands){
                brandService.getBrandsNumber(searchQuery, function(total) {
                    return res.status(200).json({brands: brands, totalBrands: total});
                });
            })
            .catch(function(error){
                return res.status(500).json({msg: 'Error occurred while loading brands', error: error});
            })
            .done();
    });
};

exports.getBrandById = function(req, res){
    brandService.getBrandById(req.params.brandId)
        .then(function(brand){
            return res.status(200).json(brand);
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while loading brand', error: error});
        })
        .done();
};

exports.updateBrand = function(req, res){
    brandService.updateBrand(req)
        .then(function(brand){
            return res.status(200).json(brand);
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while loading brand', error: error});
        })
        .done();
};

exports.deleteBrandById = function(req, res){
    brandService.deleteBrandById(req.params.brandId)
        .then(function(brand){
            return res.status(200).json(brand);
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while deleting brand', error: error});
        })
        .done();
};
