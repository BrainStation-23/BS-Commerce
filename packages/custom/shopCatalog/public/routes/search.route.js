'use strict';

angular.module('mean.shopCatalog').config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider.state('search', {
            url: '/search?q',
            parent: 'master',
            controller: 'CatalogSearchController',
            templateUrl: 'shopCatalog/views/category/shop-category-product-list.html'
            //templateUrl: 'shopCatalog/views/search.html'
        });
    }
]);
