'use strict';

angular.module('lightweight').factory('CartService', ['$rootScope','Global', '_', '$resource',
    function($rootScope, Global, _, $resource) {
        return {
            getCart: function(){
                var getCart = $resource('api/cart', {}, {
                    'get': {method: 'GET'}
                });
                return getCart.get();
            },
            addToCart: function(product){
                var addToCart = $resource('/api/cart', {}, {
                    'add': {method: 'POST'}
                });
                return addToCart.add(product);
            },
            updateCartItem: function(product){
                var updateCartItem = $resource('/api/cart/item', {}, {
                    'update': {method: 'PUT'}
                });
                return updateCartItem.update(product);
            },
            deleteCartItem: function(product){
                var deleteCartItem = $resource('/api/cart/item', {}, {
                    'delete': {method: 'DELETE'}
                });
                return deleteCartItem.delete(product.item);
            },
            deleteAllCartItems: function(){
                var deleteAllItem = $resource('/api/cart/allitems', {}, {
                    'delete': {method: 'DELETE'}
                });
                return deleteAllItem.delete();
            },
            getItemsWithoutPopulate: function(){
                var getCart = $resource('/api/cart/allitems', {}, {
                    'get': {method: 'GET', isArray: true}
                });
                return getCart.get();
            },
            getStripePublishableKey: function() {
                var getPublishableKey = $resource('/api/stripePublishableKey', {}, {
                    'get': {method: 'GET'}
                });
                return getPublishableKey.get();
            }

        };
    }
]);


