'use strict';

angular.module('mean.shopCatalog').config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider.state('search', {
            url: '/search?q&limit&page',
            parent: 'master',
            controller: 'CatalogSearchController',
            templateUrl: 'shopCatalog/views/search.html'
            //templateUrl: 'shopCatalog/views/search.html'
        });
    }
]);
