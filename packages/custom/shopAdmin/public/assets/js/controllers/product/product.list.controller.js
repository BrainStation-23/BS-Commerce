'use strict';

angular.module('mean.shopAdmin').controller('productListController', ['$scope', 'Global', '$http',
    function ($scope, Global, $http) {

        $scope.totalItems = 20;
        $scope.currentPage = 1;
        $scope.maxSize = 3;
        $scope.numberOfDisplay = 5;
        $scope.products = [];

        $http.get('/api/products/count')
            .success(function (data, status, headers, config) {
                console.log('Total Product: ' + data);
                $scope.totalItems = data;
                //$scope.totalItems = 300;
                //$scope.maxSize = Math.ceil($scope.totalItems/$scope.numberOfDisplay);
                //console.log('max size: ' + $scope.maxSize);
                //$scope.maxSize = $scope.;
                $scope.getPage(1);
            })
            .error(function (data, status, headers, config) {

            });

        $scope.getPage = function (pageNumber) {
            $http.get('/api/products?pageSize=' + $scope.numberOfDisplay + '&currentPage=' + pageNumber).
                success(function (data, status, headers, config) {
                    console.log(data);
                    $scope.products = [];
                    for (var i in data) {
                        var item = data[i];
                        if (data[i].photos.length > 0) {
                            item.picture = data[i].photos[0];
                        }
                        item.name = data[i].info.name;
                        item.sku = data[i].info.sku;
                        item.price = parseInt(data[i].info.price);
                        item.id = data[i]._id;
                        $scope.products.push(item);
                    }

                }).
                error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
        };


        $scope.changePagination = function (pageNo) {
            $scope.getPage(pageNo);
        };

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
            $scope.changePagination(pageNo);
        };
    }
]);