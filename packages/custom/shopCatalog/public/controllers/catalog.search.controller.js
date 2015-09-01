'use strict';

angular.module('mean.shopCatalog').controller('CatalogSearchController',
    ['$scope', '$timeout', '$stateParams', 'Global', 'shopBrandService', 'cartService',
        function ($scope, $timeout, $stateParams, Global, shopBrandService, cartService) {
            console.log('catalog search controller');
        }]);
