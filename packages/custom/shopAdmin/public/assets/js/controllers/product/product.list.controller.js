'use strict';

angular.module('mean.shopAdmin').controller('productListController', ['$scope', 'Global', '$http',
    function($scope, Global, $http) {

        $scope.totalItems =20;
        $scope.currentPage =1 ;
        $scope.maxSize = 5;
        $scope.numberOfDisplay =5;
        $scope.products = [];

        $scope.getPage = function(pageNumber){
            $http.get('/api/products?pageSize='+$scope.maxSize+'&currentPage='+pageNumber).
                success(function(data, status, headers, config) {
                    console.log(data);
                    $scope.products = [];
                    for(var i in data){
                        var item = data[i];
                        if(data[i].photos.length>0){
                            item.picture = data[i].photos[0];
                        }
                        item.name = data[i].info.name;
                        item.sku = data[i].info.sku;
                        item.price = parseInt(data[i].info.price);
                        item.id = data[i]._id;
                        $scope.products.push(item);
                    }
                    //angular.element('.pagination li').removeClass('active');
                    //console.log(angular.element('.pagination li'));
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
        };
        $scope.getPage(1);

        $scope.changePagination =function(pageNo) {
            $scope.getPage(pageNo);
        };

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
            $scope.changePagination(pageNo);
        };
    }
]);