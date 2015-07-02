'use strict';

var service = require('../services/shopProduct');

exports.list = function (req, res) {
    console.log('list   '+ req.params.id);
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
    console.log('id      .....    '+ req.params.id);
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
    console.log(req.body.product);
    service.create(req.body.product)
        .then(function (id) {
            return res.status(200).json(id);
        })
        .catch(function (error) {
            console.log(error);
            return res.status(500).json([{msg: 'Unhandled Error!'}]);
        })
        .done();


};

exports.update = function (req, res) {
    console.log(req.params.id);
    console.log(req.body.product);

    service.update(req.params.id, req.body.product)
        .then(function (product) {
            return res.status(200).json(product);
        })
        .catch(function (error) {
            console.log(error);
            return res.status(500).json([{msg: 'Unhandled Error!'}]);
        })
        .done();


};