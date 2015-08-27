'use strict';
require('../models/ordersModel');
var mongoose = require('mongoose'),
    Order = mongoose.model('Orders'),
    Q = require('q');

exports.createOrder = function(req) {
    var deferred = Q.defer();
    var newOrder = new Order(req.body);
    newOrder.save(function(error, order) {
       if(error) {
           return deferred.reject(error);
       }
        return deferred.resolve(order);
    });
    return deferred.promise;
};

exports.getOrders = function(searchQuery, skipSize, limitSize) {
    var deferred = Q.defer();
    Order.find(searchQuery).skip(skipSize).limit(limitSize).populate('user', 'email name')
        .exec(function(error, orders) {
            if(error) {
                return deferred.reject(error);
            }
            return deferred.resolve(orders);
        });
    return deferred.promise;
};

exports.getOrdersNumber = function(searchQuery, callback) {
    Order.find(searchQuery).count()
        .exec(function(error, total) {
            if(error) {
                callback(0);
            }
            callback(total);
        });
};

exports.getOrdersByCondition = function(condition, res) {
    var deferred = Q.defer();
    Order.find(condition)
        .exec(function(error, orders) {
            if(error) {
                return deferred.reject(error);
            }
            return deferred.resolve(orders);
        });
    return deferred.promise;
};

exports.getOrderById = function(req, res) {
    var deferred = Q.defer();
    Order.findOne({_id: req.params.orderId}).populate('user', 'name email')
        .exec(function(error, order) {
            if(error) {
                return deferred.reject(error);
            }

            var options = { path: 'products.productId', select: 'photos' };
            Order.populate(order, options, function (err, nOrder) {
                if(err) {
                    return deferred.reject(err);
                }
                return deferred.resolve(nOrder);
            });
        });
    return deferred.promise;
};

exports.deleteOrderById = function(req, res) {
    var deferred = Q.defer();

    Order.findByIdAndRemove(req.query.orderId, function(error, doc) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.promise;
    });
    return deferred.promise;
};

exports.updateOrder = function(req) {
    var deferred = Q.defer();

    Order.findByIdAndUpdate(req.body._id, req.body, function(error, order) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.resolve(order);
    });
    return deferred.promise;
};

exports.getOrdersStatistics = function(req) {
    var deferred = Q.defer();

    var today = new Date();
    today.setHours(0,0,0,0);
    var thisWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
    var thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    var thisYear = new Date(today.getFullYear(), 0, 1);

    Order.aggregate(
        [
            {
                $group : {
                    _id : '$orderStatus',
                    todayTotal: { $sum: {$cond: [ { $gte: [ '$orderedDate', today ] }, '$totalCost', 0 ] } },
                    weekTotal: { $sum: {$cond: [ { $gte: [ '$orderedDate', thisWeek ] }, '$totalCost', 0 ] } },
                    monthTotal: { $sum: {$cond: [ { $gte: [ '$orderedDate', thisMonth ] }, '$totalCost', 0 ] } },
                    yearTotal: { $sum: {$cond: [ { $gte: [ '$orderedDate', thisYear ] }, '$totalCost', 0 ] } },
                    allTimeTotal: { $sum: '$totalCost' }
                }
            }
        ]
    ).exec(function(error, order) {
            if(error) {
                return deferred.reject(error);
            }
            return deferred.resolve(order);
        });

    return deferred.promise;
};

exports.getIncompleteOrdersStatistics = function(req) {
    var deferred = Q.defer();

    Order.aggregate(
        [
            {
                $group : {
                    _id : null,
                    orderPendingTotal: { $sum: {$cond: [ { $eq: [ '$orderStatus', 'pending' ] }, '$totalCost', 0 ] } },
                    orderPendingCount: { $sum: {$cond: [ { $eq: [ '$orderStatus', 'pending' ] }, 1, 0 ] } },
                    paymentPendingTotal: { $sum: {$cond: [ { $eq: [ '$paymentStatus', 'pending' ] }, '$totalCost', 0 ] } },
                    paymentPendingCount: { $sum: {$cond: [ { $eq: [ '$paymentStatus', 'pending' ] }, 1, 0 ] } },
                    shippingPendingTotal: { $sum: {$cond: [ { $eq: [ '$shippingStatus', 'notYetShipped' ] }, '$totalCost', 0 ] } },
                    shippingPendingCount: { $sum: {$cond: [ { $eq: [ '$shippingStatus', 'notYetShipped' ] }, 1, 0 ] } }
                }
            }
        ]
    ).exec(function(error, orderStatus) {
            if(error) {
                return deferred.reject(error);
            }
            return deferred.resolve(orderStatus);
        });

    return deferred.promise;
};

