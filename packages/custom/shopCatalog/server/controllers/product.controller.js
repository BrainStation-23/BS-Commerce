'use strict';

var service = require('../services/product.service');

exports.list = function (req, res) {
    var promise;
    if (req.query.slug) {
        promise = service.search(req.query.slug, req.query.orderBy, req.query.currentPage, req.query.pageSize);
    } else if (req.query.currentPage && req.query.pageSize) {
        promise = service.all(req.query.currentPage, req.query.pageSize);
    } else {
        promise = service.all(1, 9);
    }
    //var promise = req.query.slug ? service.search(req.query.slug, req.query.orderBy, req.query.currentPage, req.query.pageSize) : service.all( req.query.currentPage, req.query.pageSize);

    promise
        .then(function (data) {
            res.append('total', data.total);
            return res.status(200).json(data.products);
        })
        .catch(function (error) {
            return res.status(500).json([{msg: 'Unhandled Error!'}]);
        })
        .done();
};

exports.getById = function (req, res) {
    service.getById(req.params.id)
        .then(function (product) {
            return res.status(200).json(product);
        })
        .catch(function (err) {
            return res.status(500).json([{msg: 'Unhandled Error!'}]);
        })
        .done();
};

exports.getBySKU = function (req, res) {
    service.getBySKU(req.params.sku)
        .then(function (product) {
            return res.status(200).json(product);
        })
        .catch(function (err) {
            return res.status(500).json([{msg: 'Unhandled Error!'}]);
        })
        .done();
};

exports.create = function (req, res) {
    service.create(req)
        .then(function (productId) {
            return res.status(200).json({_id: productId});
        })
        .catch(function (error) {
            return res.status(500).json([{msg: 'Unhandled Error!'}]);
        })
        .done();


};

exports.update = function (req, res) {
    service.update(req)
        .then(function (product) {
            return res.status(200).json(product);
        })
        .catch(function (error) {
            return res.status(500).json([{msg: 'Unhandled Error!'}]);
        })
        .done();


};

exports.delete = function(req,res){
    service.delete(req.params.id)
        .then(function (product) {
            return res.status(200).json(product);
        })
        .catch(function (error) {
            return res.status(500).json([{msg: 'Unhandled Error!'}]);
        })
        .done();

};

exports.getCount = function(req, res){
    service.getCount({})
        .then(function(count){
            return res.status(200).json({count: count});
        })
        .catch(function(error){
            return res.status(500).json([{msg: 'Unhandled Error!'}]);
        })
        .done();
};

var generateSearchQuery = function(req, callback) {
    var searchQuery = {};
    var brandId = req.query.brandId === undefined || req.query.brandId === '' ;
    var categoryId = req.query.categoryId === undefined || req.query.categoryId === '' ;
    var productName = req.query.name === undefined || req.query.name === '' ;
    var isFeatured = req.query.isFeatured === undefined || req.query.isFeatured === '';
    if(!brandId) {
        searchQuery.brands = req.query.brandId;
    }
    if(!categoryId) {
        //searchQuery.categories= {$elemMatch: { categoryId: req.query.categoryId }};
        searchQuery['categories.categoryId'] = req.query.categoryId;
    }
    if(!productName) {
        searchQuery['info.name'] = new RegExp(req.query.name, 'i');
    }
    if(!isFeatured) {
        searchQuery['info.isFeatured'] = true;
    }
    callback(searchQuery);
};

exports.getProductByCondition = function(req, res) {
    var skipSize = req.query.numberOfSkip|| 0;
    var limitSize = req.query.numberOfDisplay || 0;
    generateSearchQuery(req, function(searchQuery) {
        service.getProductByCondition(searchQuery, skipSize, limitSize)
            .then(function(products) {
                service.getCount(searchQuery)
                    .then(function(count){
                        return res.status(200).json({products: products, totalProducts: count});
                    })
                    .catch(function(error){
                        return res.status(500).json({msg: 'Unhandled Error!'});
                    });
            })
            .catch(function (error) {
                return res.status(500).json({msg: 'Unhandled Error!'});
            })
            .done();
    });
};

exports.updateProductsForBrand = function (req, res) {
    service.updateProductsForBrand(req)
        .then(function (product) {
            return res.status(200).json({msg: 'Update success'});
        })
        .catch(function (error) {
            return res.status(500).json({msg: 'Unhandled Error!'});
        })
        .done();
};

exports.getProductsByBrand = function (req, res) {
    console.log(req.params.brandId);
    var searchQuery = {};
    searchQuery.brands = req.params.brandId;
    var skipSize =0;
    var limitSize =0;
    service.getProductByCondition(searchQuery, skipSize,limitSize)
        .then(function (products) {
            return res.status(200).json({products: products});
        })
        .catch(function (error) {
            return res.status(500).json({msg: 'Unhandled Error!'});
        })
        .done();
};