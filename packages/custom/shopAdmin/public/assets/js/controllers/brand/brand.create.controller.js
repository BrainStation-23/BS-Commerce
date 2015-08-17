'use strict';

angular.module('mean.shopAdmin').controller('brandCreateController', ['$scope', 'Global', '$http', '$state', 'brandService',
    function($scope, Global, $http, $state, brandService) {
        $scope.brand = {};

        $scope.create = function (brand) {
            brand.info.pageSizeOptions = brand.info.pageSizeOptions ? brand.info.pageSizeOptions.split(',') : [];
            brandService.createBrand(brand)
                .$promise
                .then(function(promise) {
                    $state.go('Brand.List');
                });
        };
    }
]);