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

            //console.log($scope.state.currentPage);
            console.log($state.params.page);

            $scope.state = {
                totalRecords: 0,
                pageSize: 6,
                currentPage: $state.params.page,
                orderBy: {
                    value: 'name',
                    text: 'Name'
                }
            };

            /*console.log($scope.state.currentPage);
             console.log($state.params.page);*/

            $scope.products = [];

            $scope.query = $state.params.q;
            $scope.limit = $state.params.limit;
            $scope.state.currentPage = $state.params.page;

            /*console.log($scope.state.currentPage);
             console.log($state.params.page);*/

            $scope.getProducts = function () {

                var url = '/search' + '?q=' + $scope.query + '&limit=' + $scope.limit + '&page=' + $scope.state.currentPage;
                $http.get('/api' + url)
                    .then(function (response) {
                        $scope.products = response.data.products;
                        $scope.state.totalRecords = response.data.total;
                        /*console.log($scope.state.currentPage);
                         console.log($state.params.page);*/

                    }, function (error) {
                        //console.log(error);
                    });
            };
            $scope.getProducts();

            $scope.pageChangedFirstTime = false;
            $scope.pageChanged = function (page) {
                if (!$scope.pageChangedFirstTime) {
                    $scope.pageChangedFirstTime = true;
                    $scope.state.currentPage = $state.params.page;
                }

                console.log('current  product page: ', $scope.state.currentPage);
                $location.url('/search' + '?q=' + $scope.query + '&limit=' + $scope.limit + '&page=' + $scope.state.currentPage);
                //$scope.getProducts();
                //$location.search('page', $scope.state.currentPage);
            };
        }]);
