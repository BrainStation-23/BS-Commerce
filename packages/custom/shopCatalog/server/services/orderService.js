'use strict';

var mongoose = require('mongoose'),
    Order = mongoose.model('Orders'),
    _ = require('lodash'),
    Q = require('q');

exports.createOrder = function(req, res) {
    var deferred = Q.defer();
    var order = new Order(req.bodt.order);

    order.save(function(error) {
       if(error) {
           return deferred.reject(error);
       }
        return deferred.promise;
    });
};

exports.getOrders = function(req, res) {
    var deferred = Q.defer();
    Order.find({})
        .exec(function(error, orders) {
            if(error) {
                return deferred.reject(error);
            }
            return deferred.resolve(orders);
        })
};

exports.getOrdersByCondition = function(condition, res) {
    var deferred = Q.defer();
    Order.find(condition)
        .exec(function(error, orders) {
            if(error) {
                return deferred.reject(error);
            }
            return deferred.resolve(orders);
        })
};

exports.getOrderById = function(req, res) {
    var deferred = Q.defer();
    Order.findOne({_id: req.body.orderId})
        .exec(function(error, orders) {
            if(error) {
                return deferred.reject(error);
            }
            return deferred.resolve(orders);
        })
};

exports.deleteOrderById = function(req, res) {
    var deferred = Q.defer();

    Order.findByIdAndRemove(req.query.orderId, function(err, doc) {
        if(err) {
            return deferred.reject(error);
        }
        return deferred.promise;
    });
};

