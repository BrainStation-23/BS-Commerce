'use strict';

angular.module('mean.shopAdmin').controller('brandEditController', ['$scope', 'Global', '$http', '$stateParams', '$state',
    function ($scope, Global, $http, $stateParams, $state) {
        console.log($stateParams.id);

        $scope.brand = {};

        $scope.getDataForPage = function(){
            $http.get('/api/brands/' + $stateParams.id)
                .success(function (data, status, headers, config) {
                    console.log(data);
                    $scope.brand = data;
                })
                .error(function (data, status, headers, config) {

                });
        };

        $scope.getDataForPage();


        $scope.update = function () {
            $http.put('/api/brands/' + $stateParams.id, {brand: $scope.brand})
                .success(function (data, status, headers, config) {
                    console.log(data);
                    $state.go('Brand.List');

                })
                .error(function (data, status, headers, config) {
                    console.log(data);
                });
        };
    }
]);