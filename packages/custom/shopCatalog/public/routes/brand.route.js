'use strict';

angular.module('mean.shopCatalog').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('products-in-brands', {
            url: '/brands/:id',
            parent: 'master',
            controller: 'ShopBrandController',
            templateUrl: 'shopCatalog/views/brand/shop-brand-product-list.html'
        });
    }
]);
