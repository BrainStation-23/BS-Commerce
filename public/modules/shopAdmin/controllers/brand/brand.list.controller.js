'use strict';

angular.module('shopAdmin').controller('brandListController', ['$scope', 'Global', '$http', 'brandService',
    function ($scope, Global, $http, brandService) {
        $scope.numberOfDisplayOptions = [10, 15, 20, 50, 100];
        $scope.totalItems = 10;
        $scope.currentPage = 1;
        $scope.maxSize = 4;
        $scope.numberOfDisplay = 10;
        $scope.brands = [];
        $scope.dispalayBrands = [];
        $scope.searchQuery = {};


        $scope.displayOptionChange = function() {
            var brandsLength = $scope.brands.length;
            if(brandsLength > 0) {
                $scope.currentPage = 1;
                $scope.displayFrom = 1;
                $scope.displayTo = $scope.numberOfDisplay;

                if(brandsLength === $scope.numberOfDisplay) {
                    $scope.displayTo = brandsLength;
                    $scope.dispalayBrands = $scope.brands;
                }
                else if((brandsLength < $scope.numberOfDisplay) && (brandsLength < $scope.totalItems)) {
                    $scope.searchOrders(brandsLength, ($scope.numberOfDisplay - brandsLength), function() {
                        $scope.displayTo = $scope.brands.length;
                        $scope.dispalayBrands = $scope.brands;
                    });
                }
                else if((brandsLength < $scope.numberOfDisplay) && (brandsLength === $scope.totalItems)) {
                    $scope.displayTo = brandsLength;
                    $scope.dispalayBrands = $scope.brands;
                }
                else if(brandsLength > $scope.numberOfDisplay) {
                    $scope.displayTo = $scope.numberOfDisplay;
                    $scope.dispalayBrands = $scope.brands.slice(0, $scope.numberOfDisplay);
                }
            }
        };

        $scope.defaultSearchBrands = function () {
            $scope.searchQuery.numberOfSkip =0;
            $scope.searchQuery.numberOfDisplay = $scope.numberOfDisplay;
            brandService.searchBrand($scope.searchQuery)
                .$promise
                .then(function(response) {
                    $scope.brands = response.brands;
                    $scope.totalItems = response.totalBrands;
                    $scope.dispalayBrands = response.brands;
                    $scope.displayOptionChange();
                });
        };
        $scope.defaultSearchBrands();

        $scope.searchOrders = function(numberOfSkip, numberOfDisplay, callback) {
            $scope.searchQuery.numberOfSkip = numberOfSkip;
            $scope.searchQuery.numberOfDisplay = numberOfDisplay;

            brandService.searchBrand($scope.searchQuery)
                .$promise
                .then(function(response) {
                    $scope.brands = $scope.brands.concat(response.brands);
                    callback();
                });
        };

        $scope.changePagination = function (pageNo) {
            $scope.displayFrom = (pageNo - 1) * $scope.numberOfDisplay + 1;
            $scope.displayTo = $scope.displayFrom + $scope.numberOfDisplay - 1;

            if($scope.displayTo > $scope.brands.length)
                $scope.displayTo = $scope.displayFrom + ($scope.brands.length - $scope.displayFrom);
            $scope.dispalayBrands = $scope.brands.slice($scope.displayFrom-1, $scope.displayTo);
        };

        $scope.setPage = function (pageNo) {
            if($scope.totalItems > $scope.brands.length) {
                var numberOfSkip = (pageNo -1) * $scope.numberOfDisplay;
                $scope.searchOrders(numberOfSkip, $scope.numberOfDisplay, function() {
                    $scope.changePagination(pageNo);
                });
            } else {
                $scope.changePagination(pageNo);
            }
            $scope.currentPage = pageNo;
        };
    }
]);
