'use strict';

var shipmentService = require('../services/shipment.server.service');


exports.createShipment =function(req, res) {
    shipmentService.createShipment(req)
        .then(function(shipment){
            return res.status(200).json({shipmentId: shipment._id});
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while creating shipment', error: error});
        })
        .done();
};

var getSearchQuery = function(req, callback) {
    var query = {};
    var shippedDate = req.query.startDate === undefined || req.query.startDate === null;
    var shipmentId = req.query.shipmentId === undefined || req.query.shipmentId === '';
    var orderId = req.query.orderId === undefined || req.query.orderId === '';
    var trackingNumber = req.query.trackingNumber === undefined || req.query.trackingNumber === '' ;

    if(!shippedDate) {
        query = {
            shippedDate: {$gte: req.query.startDate, $lte: req.query.endDate}
        };
    }
    if(!shipmentId) {
        query._id = req.query.shipmentId;
    }
    if(!orderId) {
        query.order = req.query.orderId;
    }
    if(!trackingNumber) {
        query.trackingNumber = req.query.trackingNumber;
    }

    callback(query);
};

exports.getShipments = function(req, res) {
    var skipSize = req.query.numberOfSkip|| 0;
    var limitSize = req.query.numberOfDisplay || 0;
    getSearchQuery(req, function(searchQuery) {
        shipmentService.getShipments(searchQuery, skipSize, limitSize)
            .then(function(shipments){
                shipmentService.getShipmentsNumber(searchQuery, function(total) {
                    return res.status(200).json({shipments: shipments, totalShipments: total});
                });
            })
            .catch(function(error){
                return res.status(500).json({msg: 'Error occurred while loading shipments', error: error});
            })
            .done();
    });
};

exports.getShipmentsByCondition = function(req, res) {
    var condition = {};
    shipmentService.getShipmentsByCondition(condition)
        .then(function(shipments) {
            return res.status(200).json(shipments);
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while loading shipments', error: error});
        })
        .done();
};

exports.getShipmentById = function(req, res) {
    shipmentService.getShipmentById(req, res)
        .then(function(shipment) {
            return res.status(200).send(shipment);
        })
        .catch(function(error) {
            return res.status(500).send({msg: 'Error occurred while loading shipments', error: error});
        })
        .done();
};

exports.deleteShipmentById = function(req, res) {
    shipmentService.deleteShipmentById(req, res)
        .then(function() {
            return res.status(200).send({msg: 'Successfully delete shipment'});
        })
        .catch(function(error) {
            return res.status(500).send({msg: 'Error occurred while deleting shipments', error: error});
        })
        .done();
};

exports.updateShipment = function(req, res) {
    shipmentService.updateShipment(req)
        .then(function(){
            return res.status(200).json({msg: 'Successfully update !'});
        })
        .catch(function(error){
            return res.status(500).json({msg: 'Error occurred while creating shipment', error: error});
        })
        .done();
};

exports.getShipmentByOrderId = function(req, res) {
    var condition = {order: req.params.orderId};
    shipmentService.getShipmentsByCondition(condition)
        .then(function(shipments) {
            return res.status(200).send(shipments);
        })
        .catch(function(error) {
            return res.status(500).send({msg: 'Error occurred while loading shipments', error: error});
        })
        .done();
};
