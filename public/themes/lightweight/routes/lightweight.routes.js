'use strict';

// Setting up route
angular.module('lightweight').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/');

        // Home state routing
        $stateProvider
            .state('master', {
                abstract: true,
                templateUrl: 'themes/lightweight/views/master.html'
            })
            .state('home', {
                url: '/',
                templateUrl: 'themes/lightweight/views/index.html'
            })
            .state('Category', {
                url: '/category/:slug',
                parent: 'master',
                controller: 'ProductByCategoryController',
                templateUrl: 'themes/lightweight/views/product/product-list-by-category.html'
            })
            .state('Product', {
                url: '/product/:sku',
                parent: 'master',
                controller: 'ProductDetailsController',
                templateUrl: 'themes/lightweight/views/product/product-details.html'
            })
            .state('Cart', {
                url: '/cart',
                controller: 'CartController',
                templateUrl: 'themes/lightweight/views/cart/cart.html'
            })
            .state('Checkout', {
                url: '/checkout',
                controller: 'CheckoutController',
                templateUrl: 'themes/lightweight/views/cart/checkout.html'
            })
            .state('CheckoutSuccess', {
                url: '/checkout/success/:orderId',
                controller: 'CheckoutSuccessController',
                templateUrl: 'themes/lightweight/views/cart/checkout-success.html'
            })
            .state('emptyCart', {
                url: '/cart/empty',
                templateUrl: 'themes/lightweight/views/cart/empty-cart.html'
            })
            .state('orderDetails/:orderId', {
                url: '/order/:orderId',
                controller: 'OrderDetailsController',
                templateUrl: 'themes/lightweight/views/order/order-details.html'
            })
            .state('search', {
                url: '/search?q&limit&page',
                parent: 'master',
                controller: 'AdvanceSearchController',
                templateUrl: 'themes/lightweight/views/advance-search.html'
            })
            .state('CheckoutAsGuest', {
                url: '/login/checkoutasguest?returnUrl',
                controller: 'CheckoutAsGuestController',
                templateUrl: 'themes/lightweight/views/cart/checkout-as-guest.html'
            })
            .state('Wishlist', {
                url: '/wishlist',
                controller: 'WishlistController',
                templateUrl: 'themes/lightweight/views/wishlist/wishlist.html'
            })
            .state('WishlistDetails', {
                url: '/wishlist/:wishlistId',
                controller: 'WishlistShareableController',
                templateUrl: 'themes/lightweight/views/wishlist/wishlist-shareable.html'
            })
            .state('PaypalPaymentSuccess', {
                url: '/payment/success/:orderId?paymentId&token&PayerID',
                controller: 'PaypalPaymentSuccessController',
                templateUrl: 'themes/lightweight/views/cart/payment-success.html'
            })
            .state('PaypalPaymentCancel', {
                url: '/payment/cancel/:orderId',
                //controller:'PaypalPaymentCancelController', // need to work
                templateUrl: 'themes/lightweight/views/cart/payment-cancel.html'
            })
            .state('CompareList', {
                url: '/compareList',
                controller: 'CompareController',
                templateUrl: 'themes/lightweight/views/compare/compare-list.html'
            });
    }
]);
