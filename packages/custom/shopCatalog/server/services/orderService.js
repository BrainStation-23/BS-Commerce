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

exports.getOrders = function(req, res) {
    var deferred = Q.defer();
    Order.find({})
        .exec(function(error, orders) {
            if(error) {
                return deferred.reject(error);
            }
            return deferred.resolve(orders);
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
};

exports.getOrderById = function(req, res) {
    var deferred = Q.defer();
    Order.findOne({_id: req.body.orderId})
        .exec(function(error, orders) {
            if(error) {
                return deferred.reject(error);
            }
            return deferred.resolve(orders);
        });
};

exports.deleteOrderById = function(req, res) {
    var deferred = Q.defer();

    Order.findByIdAndRemove(req.query.orderId, function(error, doc) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.promise;
    });
};

