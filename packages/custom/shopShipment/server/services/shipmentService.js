'use strict';

var mongoose = require('mongoose'),
    Shipment = mongoose.model('Shipments'),
    Q = require('q');

exports.createShipment = function(req) {
    var deferred = Q.defer();
    var newShipment = new Shipment(req.body);
    newShipment.save(function(error, shipment) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.resolve(shipment);
    });
    return deferred.promise;
};

exports.getShipments = function(searchQuery, skipSize, limitSize) {
    var deferred = Q.defer();
    Shipment.find(searchQuery).skip(skipSize).limit(limitSize).populate('order')
        .exec(function(error, shipments) {
            if(error) {
                return deferred.reject(error);
            }
            return deferred.resolve(shipments);
        });
    return deferred.promise;
};

exports.getShipmentsNumber = function(searchQuery, callback) {
    Shipment.find(searchQuery).count()
        .exec(function(error, total) {
            if(error) {
                callback(0);
            }
            callback(total);
        });
};

exports.getShipmentsByCondition = function(condition, res) {
    var deferred = Q.defer();
    Shipment.find(condition)
        .exec(function(error, shipments) {
            if(error) {
                return deferred.reject(error);
            }
            return deferred.resolve(shipments);
        });
    return deferred.promise;
};

exports.getShipmentById = function(req, res) {
    var deferred = Q.defer();
    Shipment.findOne({_id: req.params.shipmentId}).populate('order', 'shippingMethod shippingAddress')
        .exec(function(error, shipment) {
            if(error) {
                return deferred.reject(error);
            }

            var options = { path: 'products.productId', select: 'photos' };
            Shipment.populate(shipment, options, function (err, nShipment) {
                if(err) {
                    return deferred.reject(err);
                }
                return deferred.resolve(nShipment);
            });
        });
    return deferred.promise;
};

exports.deleteShipmentById = function(req, res) {
    var deferred = Q.defer();

    Shipment.findByIdAndRemove(req.query.shipmentId, function(error, doc) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.promise;
    });
    return deferred.promise;
};

exports.updateShipment = function(req) {
    var deferred = Q.defer();

    Shipment.findByIdAndUpdate(req.body._id, req.body, function(error, shipment) {
        if(error) {
            return deferred.reject(error);
        }
        return deferred.resolve(shipment);
    });
    return deferred.promise;
};