'use strict';

angular.module('mean.shopCatalog').controller('CatalogSearchController',
    ['$scope', '$timeout', '$state', '$location', '$http', 'Global', 'shopBrandService', 'cartService', 'ShopCatalog',
        function ($scope, $timeout, $state, $location, $http, Global, shopBrandService, cartService, ShopCatalog) {

            $scope.global = Global;

            $scope.items = [
                'The first choice!',
                'And another choice for you.',
                'but wait! A third!'
            ];

            $scope.state = {
                totalRecords: 0,
                pageSize: 6,
                currentPage: 1,
                orderBy: {
                    value: 'name',
                    text: 'Name'
                }
            };

            $scope.products = [];

            $scope.query = $state.params.q;

            $http.get('/api' + $location.url())
                .then(function (response) {
                    //console.log(response.data);
                    $scope.products = response.data;
                }, function (error) {
                    console.log(error);
                });
        }]);
