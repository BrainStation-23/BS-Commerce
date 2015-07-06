'use strict';

angular.module('mean.shopAdmin').controller('brandListController', ['$scope', 'Global', '$http',
    function($scope, Global, $http) {
        $scope.totalItems =20;
        $scope.currentPage =1 ;
        $scope.maxSize = 5;
        $scope.numberOfDisplay =5;
        $scope.brands = [];

        $scope.getPage = function(pageNumber){
            $http.get('/api/brands?pageSize='+$scope.maxSize+'&currentPage='+pageNumber).
                success(function(data, status, headers, config) {
                    console.log(data);
                    $scope.brands = data;
                    for(var i in $scope.brands){
                        $scope.brands[i].info.pageSizeOptions =$scope.brands[i].info.pageSizeOptions.toString();
                    }
                }).
                error(function(data, status, headers, config) {
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