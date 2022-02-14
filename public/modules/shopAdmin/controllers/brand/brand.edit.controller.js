'use strict';

angular.module('shopAdmin').controller('brandEditController', ['$scope', '$window' ,'$stateParams', '$state', 'brandService',
    function ($scope, $window, $stateParams, $state, brandService) {

        $scope.brand = {};
        $scope.brand.meta = {};
        $scope.brand.info = {};

        $scope.getBrandById = function(){
            brandService.getBrandById($stateParams.brandId)
                .$promise
                .then(function(brand) {
                    $scope.brand = brand;
                });
        };
        $scope.getBrandById();

        $scope.update = function () {
            
            if($scope.brand.meta && $scope.brand.meta.keywords && typeof $scope.brand.meta.keywords === 'string') {
                $scope.brand.meta.keywords = $scope.brand.meta.keywords.length ? $scope.brand.meta.keywords.split(',') : [];
            }

            if($scope.brand.info && $scope.brand.info.pageSizeOptions && typeof $scope.brand.info.pageSizeOptions === 'string') {
                $scope.brand.info.pageSizeOptions = $scope.brand.info.pageSizeOptions.length ? $scope.brand.info.pageSizeOptions.split(',') : [];
            }

            brandService.updateBrand($scope.brand)
                .$promise
                .then(function(response) {
                    $window.toastr.success('Updated brand information');
                    $state.go('Brand.List');
                });
        };

        $scope.delete = function () {
            if(confirm('Are you sure want to delete this brand')) {
                brandService.deleteBrand($stateParams.brandId)
                    .$promise
                    .then(function(response) {
                        $window.toastr.success('Deleted brand');
                        $state.go('Brand.List');
                    });
            }
        };
    }
]);
