'use strict';

angular.module('mean.shopCatalog').controller('ShopBrandController', ['$scope', '$state', '$stateParams', 'Global',
    'ShopCatalog', 'ShopProduct', 'cartService', '$resource',
    function ($scope, $state, $stateParams, Global, ShopCatalog, ShopProduct, cartService, $resource) {

        var Brand = $resource('/api/brands/:id', {id:'@id'});
        $scope.brand = Brand.get({id:$stateParams.id}, function() {
            console.log($scope.brand);
        });
    }
]);