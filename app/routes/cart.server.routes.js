'use strict';

var cartController = require('../controllers/cart.server.controller');

module.exports = function(app) {
    app.route('/api/cart')
        .post(cartController.addToCart)
        .get(cartController.getCart)
        .delete(cartController.deleteCartById);

    app.route('/api/cart/item')
        .put(cartController.updateCartItem)
        .delete(cartController.deleteCartItem);

    app.route('/api/cart/allitems')
        .get(cartController.getItemsWithoutPopulate)
        .delete(cartController.deleteAllCartItems);

    app.route('/api/stripePublishableKey')
        .get(cartController.getStripePublishableKey);
};
