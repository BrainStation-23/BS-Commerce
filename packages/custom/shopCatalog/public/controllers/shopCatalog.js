'use strict';

/* jshint -W098 */
angular.module('mean.shopCatalog').controller('ShopCatalogController', ['$scope', 'Global', 'ShopCatalog',
    function($scope, Global, ShopCatalog) {
        $scope.global = Global;
        $scope.package = {
            name: 'ShopCatalog'
        };
    }
]);