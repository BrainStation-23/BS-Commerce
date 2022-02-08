'use strict';

var orderService = require('../services/order.server.service');
    //cartService = require('../services/cartService');
var mongoose = require('mongoose'),
    Order = mongoose.model('Orders');


exports.createOrder =function(req, res) {
    orderService.createOrder(req)
        .then(function(order){
            if(order.paypalRedirectUrl) {
                return res.status(200).json({orderId: order._id, paypalRedirectUrl: order.paypalRedirectUrl});
            }
            return res.status(200).json({orderId: order._id});
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while creating order', error: error});
        })
        .done();
};

var getSearchQuery = function(req, callback) {
    var query = {};
    var oDate = req.query.startDate === undefined || req.query.startDate === null;
    var oStatus = req.query.selectedOrderStatus === undefined || req.query.selectedOrderStatus === '' ;
    var pStatus = req.query.selectedPaymentStatus === undefined || req.query.selectedPaymentStatus === '';
    var sStatus = req.query.selectedShippingStatus === undefined || req.query.selectedShippingStatus === '';
    var oId = req.query.orderId === undefined || req.query.orderId === '';

    if(!oDate) {
        query = {
            orderedDate: {$gte: req.query.startDate, $lte: req.query.endDate}
        };
    }
    if(!oStatus) {
        query.orderStatus = req.query.selectedOrderStatus;
    }
    if(!pStatus) {
        query.paymentStatus = req.query.selectedPaymentStatus;
    }
    if(!sStatus) {
        query.shippingStatus = req.query.selectedShippingStatus;
    }
    if(!oId) {
        query._id = req.query.orderId;
    }
    callback(query);
};

exports.getOrders = function(req, res) {
    var skipSize = req.query.numberOfSkip|| 0;
    var limitSize = req.query.numberOfDisplay || 0;
    getSearchQuery(req, function(searchQuery) {
        orderService.getOrders(searchQuery, skipSize, limitSize)
            .then(function(orders){
                orderService.getOrdersNumber(searchQuery, function(total) {
                    return res.status(200).json({orders: orders, totalOrders: total});
                });
            })
            .catch(function(error){
                return res.status(500).json({msg: 'Error occurred while loading orders', error: error});
            })
            .done();
    });
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

exports.getOrderEnums = function(req, res) {
    var orderStatus = Order.schema.path('orderStatus').enumValues;
    var paymentStatus = Order.schema.path('paymentStatus').enumValues;
    var shippingStatus = Order.schema.path('shippingStatus').enumValues;
    return res.status(200).send({orderStatus:orderStatus, paymentStatus: paymentStatus, shippingStatus: shippingStatus});
};

exports.updateOrder = function(req, res) {
    orderService.updateOrder(req)
        .then(function(){
            return res.status(200).json({msg: 'Successfully update !'});
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while creating order', error: error});
        })
        .done();
};

exports.updateOrderForPaypalPayment = function(req, res) {
    orderService.updateOrderForPaypalPayment(req)
        .then(function(order){
            return res.status(200).json({orderId: order._id});
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while changing payment status of order', error: error});
        })
        .done();
};

exports.getOrdersStatistics = function(req, res) {
    orderService.getOrdersStatistics(req)
        .then(function(orders) {
            return res.status(200).send(orders);
        })
        .catch(function(error) {
            return res.status(500).json({msg: 'Error occurred while getting orders info'});
        })
        .done();
};

exports.getIncompleteOrdersStatistics = function(req, res) {
    orderService.getIncompleteOrdersStatistics(req)
        .then(function(orderStatus) {
            return res.status(200).send(orderStatus);
        })
        .catch(function(error) {
            return res.status(500).json({msg: 'Error occurred while getting orders info'});
        })
        .done();
};
