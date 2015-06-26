'use strict';

var orderService = require('../services/orderService'),
    cartService = require('../services/cartService');


exports.createOrder =function(req, res) {
    orderService.createOrder(req)
        .then(function(order){
            return res.status(200).json({orderId: order._id});
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while creating order', error: error});
        })
        .done();
};

exports.getOrders = function(req, res) {
    orderService.getOrders(req, res)
        .then(function(orders){
            return res.status(200).json(orders);
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while loading orders', error: error});
        })
        .done();
};

exports.getOrdersByCondition = function(req, res) {
    var condition = {};
    orderService.getOrdersByCondition(condition)
        .then(function(orders) {
            return res.status(200).json(orders);
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while loading orders', error: error});
        })
        .done();
};

exports.getOrderById = function(req, res) {
    orderService.getOrderById(req, res)
        .then(function(order) {
            return res.status(200).send(order);
        })
        .catch(function(error) {
            return res.status(500).send({msg: 'Error occurred while loading orders', error: error});
        })
        .done();
};

exports.deleteOrderById = function(req, res) {
    orderService.deleteOrderById(req, res)
        .then(function() {
            return res.status(200).send({msg: 'Successfully delete order'});
        })
        .catch(function(error) {
            return res.status(500).send({msg: 'Error occurred while deleting orders', error: error});
        })
        .done();
};