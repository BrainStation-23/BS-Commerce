'use strict';

var catalogService = require('../services/catalog.service');

var searchQueryGenerator = function(reqQuery, callback) {
    var query = {};
    query = { $text: { $search: reqQuery.q }};

    if(reqQuery.advS) {

        if(reqQuery.priceMin && reqQuery.priceMax) {
            query["info.price"] = {"$gte": reqQuery.priceMin, "$lte": reqQuery.priceMax};
        } else if(reqQuery.priceMin) {
            query["info.price"] = {"$gte": reqQuery.priceMin};
        } else if(reqQuery.priceMax) {
            query["info.price"] = {"$lte": reqQuery.priceMax};
        }

        if(reqQuery.cat && reqQuery.brand) {
            getCategories(reqQuery.cat, reqQuery.isInSubCat, function(categories) {
                if(categories)
                    query["categories.categoryId"] = {"$in": categories};

                getBrand(reqQuery.brand, function(brandId) {
                    if(brandId)
                        query.brands = brandId;
                    return callback(query);
                })
            });
        } else if(reqQuery.cat) {
            getCategories(reqQuery.cat, reqQuery.isInSubCat, function(categories) {
               query["categories.categoryId"] = {"$in": categories};
                return callback(query);
            });
        } else if(reqQuery.brand) {
            getBrand(reqQuery.brand, function(brandId) {
                query.brands = brandId;
                return callback(query);
            });
        } else {
            return callback(query);
        }
    } else {
        return callback(query);
    }
};

var getCategories = function(cat, subCat, callback) {
    var categories = [];
    catalogService.getCategoryBySlug(cat, function(categoryId) {
        if(categoryId) {
            if(subCat) {
                catalogService.getCategoriesByQuery({parent: categoryId}, function(categoryIds) {
                    categories = categoryIds;
                    categories.push(categoryId);
                    return callback(categories);
                });
            } else {
                categories.push(categoryId);
                return callback(categories);
            }

        } else {
            return callback(categories);
        }

    });
};

var getBrand = function(brandName, callback) {
    catalogService.getBrandByName(brandName, function(brandId) {
        if(brandId) {
            return callback(brandId);
        }
        return callback(null);
    });
};

exports.searchList = function(req, res){
    searchQueryGenerator(req.query, function(query) {
        catalogService.searchList(query ,req.query.page, req.query.limit)
            .then(function(list){
                return res.status(200).send(list);
            })
            .catch(function(error){
                return res.status(500).send({msg: 'Error occurred while loading products', error: error});
            })
            .done();
    });

};
