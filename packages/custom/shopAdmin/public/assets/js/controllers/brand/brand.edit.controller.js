'use strict';

angular.module('mean.shopAdmin').controller('brandEditController', ['$scope', '$stateParams', '$state', 'brandService',
    function ($scope, $stateParams, $state, brandService) {

        $scope.brand = {};

        $scope.getBrandById = function(){
            brandService.getBrandById($stateParams.brandId)
                .$promise
                .then(function(brand) {
                    $scope.brand = brand;
                });
        };
        $scope.getBrandById();

        $scope.update = function () {
            if(typeof $scope.brand.info.pageSizeOptions === 'string') {
                $scope.brand.info.pageSizeOptions = $scope.brand.info.pageSizeOptions ? $scope.brand.info.pageSizeOptions.split(',') : [];
            }
            brandService.updateBrand($scope.brand)
                .$promise
                .then(function(response) {
                    $state.go('Brand.List');
                });
        };

        $scope.delete = function () {
            brandService.deleteBrand($stateParams.brandId)
                .$promise
                .then(function(response) {
                    $state.go('Brand.List');
                });
        };
    }
]);