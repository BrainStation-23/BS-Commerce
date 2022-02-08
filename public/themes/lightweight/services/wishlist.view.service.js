'use strict';

angular.module('lightweight').factory('WishlistService', ['$rootScope','Global', '_', '$resource',
    function($rootScope, Global, _, $resource) {
        return {
            getWishlist: function(){
                var getWishlist = $resource('api/wishlist', {}, {
                    'get': {method: 'GET'}
                });
                return getWishlist.get();
            },
            getWishlistById: function(id){
                var getWishlistById = $resource('api/wishlist/:wishlistId', {wishlistId: '@id'}, {
                    'get': {method: 'GET'}
                });
                return getWishlistById.get({wishlistId: id});
            },
            addToWishlist: function(product){
                var addToWishlist = $resource('/api/wishlist', {}, {
                    'add': {method: 'POST'}
                });
                return addToWishlist.add(product);
            },
            updateWishlistItem: function(product){
                var updateWishlistItem = $resource('/api/wishlist/item', {}, {
                    'update': {method: 'PUT'}
                });
                return updateWishlistItem.update(product);
            },
            deleteWishlistItem: function(product){
                var deleteWishlistItem = $resource('/api/wishlist/item', {}, {
                    'delete': {method: 'DELETE'}
                });
                return deleteWishlistItem.delete(product.item);
            },
            deleteAllWishlistItems: function(){
                var deleteAllItem = $resource('/api/wishlist/allitems', {}, {
                    'delete': {method: 'DELETE'}
                });
                return deleteAllItem.delete();
            },
            getItemsWithoutPopulate: function(){
                var getWishlist = $resource('/api/wishlist/allitems', {}, {
                    'get': {method: 'GET', isArray: true}
                });
                return getWishlist.get();
            },
            addWishlistItemsToCart: function(items) {
                var addToCart = $resource('/api/wishlist/to/cart', {}, {
                    'add': {method: 'POST'}
                });
                return addToCart.add(items);
            }

        };
    }
]);


