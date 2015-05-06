'use strict';

var cartController = require('../controllers/cartController');

module.exports = function(Shopcatalog, app, auth, database, shopCore) {
  app.route('/api/cart')
    .get(cartController.getCart)
    .put(cartController.update);
};
