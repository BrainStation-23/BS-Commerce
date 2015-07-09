'use strict';

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

