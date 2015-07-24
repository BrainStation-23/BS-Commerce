'use strict';

var cartController = require('../controllers/cartController'),
    orderController = require('../controllers/orderController');

module.exports = function(Shopcatalog, app, auth, database, shopCore) {
    app.route('/api/cart')
      .get(cartController.getCart)
      .put(cartController.update)
      .delete(cartController.deleteCartById);

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
};