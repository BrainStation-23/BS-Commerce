'use strict';

var cartController = require('../controllers/cartController'),
    orderController = require('../controllers/orderController');

module.exports = function(Shopcatalog, app, auth, database, shopCore) {
  app.route('/api/cart')
    .get(cartController.getCart)
    .put(cartController.update);

  app.route('/api/auth/order')
      .get(orderController.getOrders)
      .post(orderController.createOrder);
};
