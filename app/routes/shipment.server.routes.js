'use strict';

var shipmentController = require('../controllers/shipment.server.controller');

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function( app) {

    app.route('/api/auth/shipment')
      .get(shipmentController.getShipments)
      .post(shipmentController.createShipment)
      .put(shipmentController.updateShipment);

    app.route('/api/auth/shipment/:shipmentId')
      .get(shipmentController.getShipmentById);

    app.route('/api/auth/shipmentByOrderId/:orderId')
        .get(shipmentController.getShipmentByOrderId);
};
