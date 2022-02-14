'use strict';

var cartController = require('../controllers/cart.server.controller'),
    orderController = require('../controllers/order.server.controller');

module.exports = function(app) {
    app.route('/api/auth/order')
      .get(orderController.getOrders)
      .post(orderController.createOrder)
      .put(orderController.updateOrder);

    app.route('/api/auth/order/:orderId')
      .get(orderController.getOrderById);

    app.route('/api/auth/orders/enums')
        .get(orderController.getOrderEnums);

    app.route('/api/auth/orders/statistics')
        .get(orderController.getOrdersStatistics);

    app.route('/api/auth/orders/incomplete/statistics')
        .get(orderController.getIncompleteOrdersStatistics);

    app.route('/api/auth/order/:orderId/:paymentId/:payerId')
        .put(orderController.updateOrderForPaypalPayment);
};
