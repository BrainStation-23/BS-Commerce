'use strict';

var service = require('../services/product.server.service'),
    mediaService = require('../services/media.server.service');

exports.list = function (req, res) {
    var promise;
    if (req.query.slug) {
        promise = service.search(req.query.slug, req.query.orderBy, req.query.currentPage, req.query.pageSize);
    } else if (req.query.currentPage && req.query.pageSize) {
        promise = service.all(req.query.currentPage, req.query.pageSize);
    } else {
        promise = service.all(1, 9);
    }

    promise
        .then(function (products) {
            return res.status(200).json(products);
        })
        .catch(function (error) {
            return res.status(400).json({msg: 'Error occurred due to invalid call'});
        })
        .done();
};

exports.getById = function (req, res) {
    service.getById(req.params.id)
        .then(function (product) {
            return res.status(200).json(product);
        })
        .catch(function (err) {
            return res.status(400).json({msg: 'Error occurred due to invalid information'});
        })
        .done();
};

exports.getBySKU = function (req, res) {
    service.getBySKU(req.params.sku)
        .then(function (product) {
            return res.status(200).json(product);
        })
        .catch(function (err) {
            return res.status(400).json({msg: 'Error occurred due to invalid information'});
        })
        .done();
};

exports.create = function (req, res) {
    service.create(req)
        .then(function (productId) {
            return res.status(200).json({_id: productId});
        })
        .catch(function (error) {
            return res.status(400).json({msg: 'Error occurred due to invalid information'});
        })
        .done();


};

exports.update = function (req, res) {
    service.update(req)
        .then(function (product) {
            return res.status(200).json(product);
        })
        .catch(function (error) {
            return res.status(400).json({msg: 'Error occurred due to invalid information'});
        })
        .done();
};

var deleteProduct = function(productId, callback) {
    service.delete(productId)
        .then(function (product) {
            return callback(true);
        })
        .catch(function (error) {
            return callback(false);
        })
        .done();
};

exports.delete = function(req,res){
    service.getById(req.params.id)
        .then(function (product) {
            var noOfPhoto = 0;
            if(product.photos.length) {
                product.photos.forEach(function(photo) {
                    mediaService.delete(photo.id)
                        .then(function () {
                            noOfPhoto++;
                        })
                        .catch(function (error) {
                            noOfPhoto++;
                        })
                        .done();
                });

                if(product.photos.length === noOfPhoto) {
                    deleteProduct(req.params.id, function(success) {
                        if(success) {
                            return res.status(200).json({msg:'delete success'});
                        } else {
                            return res.status(400).json({msg: 'Error occurred during delete product due to invalid info.'});
                        }
                    });
                }
            } else {
                deleteProduct(req.params.id, function(success) {
                    if(success) {
                        return res.status(200).json({msg:'delete success'});
                    } else {
                        return res.status(400).json({msg: 'Error occurred during delete product due to invalid info.'});
                    }
                });
            }

        })
        .catch(function (err) {
            return res.status(400).json({msg: 'Not found this product'});
        })
        .done();
};

exports.getCount = function(req, res){
    service.getCount({})
        .then(function(count){
            return res.status(200).json({count: count});
        })
        .catch(function(error){
            return res.status(400).json({msg: 'Error occurred due to invalid information'});
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
                        return res.status(400).json({msg: 'Error occurred due to invalid information'});
                    });
            })
            .catch(function (error) {
                return res.status(400).json({msg: 'Error occurred due to invalid information'});
            })
            .done();
    });
};

exports.updateProductsForBrand = function (req, res) {
    service.updateProductsForBrand(req)
        .then(function (product) {
            return res.status(200).json({msg: 'Error occurred due to invalid information'});
        })
        .catch(function (error) {
            return res.status(400).json({msg: 'Error occurred due to invalid information'});
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
            return res.status(400).json({msg: 'Error occurred due to invalid information'});
        })
        .done();
};

exports.addProductPhoto = function(req, res) {
    if(req.file && req.body.pictureInfo){
        mediaService.create(req.file)
            .then(function (file) {
                var pictureInfo = req.body.pictureInfo;
                pictureInfo.id = file._id;
                service.addProductPhoto(req.params.productId, pictureInfo)
                    .then(function(product) {
                        return res.status(200).json(product);
                    })
                    .catch(function(error){
                        return res.status(400).json(error);
                    })
                    .done();
            })
            .catch(function (error) {
                return res.status(400).json({error: error});
            })
            .done();
    } else {
        return res.status(400).send({msg: 'Error occurred due to invalid information'});
    }
};

exports.deleteProductPhoto = function(req, res) {
    mediaService.delete(req.params.photoId)
        .then(function () {
            service.deleteProductPhoto(req.params.productId, req.params.photoId)
                .then(function(product) {
                    return res.status(200).json(product);
                })
                .catch(function(error){
                    return res.status(400).json(error);
                })
                .done();
        })
        .catch(function (error) {
            return res.status(400).json({error: error});
        })
        .done();
};

