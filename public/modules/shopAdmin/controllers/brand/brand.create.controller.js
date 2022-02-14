'use strict';

angular.module('shopAdmin').controller('brandCreateController', ['$scope', '$window', 'Global', '$http', '$state', 'brandService',
    function($scope, $window, Global, $http, $state, brandService) {
        $scope.brand = {};
        $scope.brand.meta = {};
        $scope.brand.info = {};

        $scope.create = function () {
            if($scope.brand.meta && $scope.brand.meta.keywords && typeof $scope.brand.meta.keywords === 'string') {
                $scope.brand.meta.keywords = $scope.brand.meta.keywords.length ? $scope.brand.meta.keywords.split(',') : [];
            }

            if($scope.brand.info && $scope.brand.info.pageSizeOptions && typeof $scope.brand.info.pageSizeOptions === 'string') {
                $scope.brand.info.pageSizeOptions = $scope.brand.info.pageSizeOptions.length ? $scope.brand.info.pageSizeOptions.split(',') : [];
            }
            
            brandService.createBrand($scope.brand)
                .$promise
                .then(function(promise) {
                    $window.toastr.success('Created new brand');
                    $state.go('Brand.List');
                });
        };
    }
]);
