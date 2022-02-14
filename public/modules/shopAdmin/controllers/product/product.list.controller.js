'use strict';

angular.module('shopAdmin').controller('productListController', ['$scope', 'Global', '$http', 'productService',
    function ($scope, Global, $http, productService) {

        $scope.totalItems = 20;
        $scope.currentPage = 1;
        $scope.maxSize = 3;
        $scope.numberOfDisplay = 5;
        $scope.products = [];

        productService.getProductCount()
            .$promise
            .then(function(data) {
                $scope.totalItems = data.count;
                $scope.getPage(1);
            });

        $scope.getPage = function (pageNumber) {
            var searchQuery ={};
            searchQuery.pageSize = $scope.numberOfDisplay;
            searchQuery.currentPage = pageNumber;
            productService.getProducts(searchQuery)
                .$promise
                .then(function(products) {
                    $scope.products = [];
                    angular.forEach(products, function(product) {
                        var item = {};
                        item._id =product._id;
                        if(product.photos.length) {
                            item.picture = product.photos[0].id;
                        }
                        item.name = product.info.name;
                        item.sku = product.info.sku;
                        item.price = parseInt(product.info.price);
                        item.id = product._id;
                        $scope.products.push(item);
                    });
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
