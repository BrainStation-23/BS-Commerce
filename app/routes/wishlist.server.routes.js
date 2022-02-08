'use strict';

var wishlistController = require('../controllers/wishlist.server.controller');

module.exports = function(app) {
    app.route('/api/wishlist')
        .post(wishlistController.addToWishlist)
        .get(wishlistController.getWishlist)
        .delete(wishlistController.deleteWishlistById);

    app.route('/api/wishlist/:wishlistId')
        .get(wishlistController.getWishlistById);

    app.route('/api/wishlist/item')
        .put(wishlistController.updateWishlistItem)
        .delete(wishlistController.deleteWishlistItem);

    app.route('/api/wishlist/allitems')
        .get(wishlistController.getItemsWithoutPopulate)
        .delete(wishlistController.deleteAllWishlistItems);

    app.route('/api/wishlist/to/cart')
        .post(wishlistController.addWishlistItemsToCart);
};
