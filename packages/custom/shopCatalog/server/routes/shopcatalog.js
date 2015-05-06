'use strict';

var cartController = require('../controller/cartController');

module.exports = function(Shopcatalog, app, auth, database, shopCore) {
  app.route('/api/cart')
    .get(cartController.getCart)
    .post(cartController.addItem);
};
