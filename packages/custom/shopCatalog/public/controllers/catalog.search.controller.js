'use strict';

angular.module('mean.shopCatalog').controller('CatalogSearchController',
    ['$scope', '$timeout', '$state', '$location', '$http', 'Global', 'shopBrandService', 'cartService', 'ShopCatalog',
        function ($scope, $timeout, $state, $location, $http, Global, shopBrandService, cartService, ShopCatalog) {

            $scope.global = Global;

            $scope.state = {
                totalRecords: 0,
                pageSize: 6,
                currentPage: $state.params.page,
                orderBy: {
                    value: 'name',
                    text: 'Name'
                }
            };

            $http.get('/api/brands').then(function (response) {
                $scope.brands = response.data.brands;
            }, function (error) {
                console.log(error);
                $scope.brands = [];
            });

            var generateCategoriesForDropDownList = function(getCategories, callback) {
                var generatedCategories = [];

                var generateCategoriesWithParent = function(categories, parentCategoryName) {
                    angular.forEach(categories, function(category) {
                        if(parentCategoryName) {
                            category.name = parentCategoryName + ' >> ' + category.name;
                        }

                        generatedCategories.push(category);

                        if(category.subCategories) {
                            generateCategoriesWithParent(category.subCategories, category.name);
                        }
                    });
                };
                generateCategoriesWithParent(getCategories, null);
                callback(generatedCategories);
            };

            $http.get('/api/categories').then(function (response) {
                generateCategoriesForDropDownList(response.data, function(categories) {
                    $scope.categories = categories;
                });
            }, function (error) {
                console.log(error);
                $scope.categories = [];
            });

            $scope.products = [];
            $scope.searchInfo = {};
            $scope.limit = $state.params.limit;
            $scope.state.currentPage = $state.params.page;

            $timeout(function () {
                $scope.searchInfo = $location.search();
                if($scope.searchInfo.advS) $scope.searchInfo.advS = JSON.parse($scope.searchInfo.advS);
                if($scope.searchInfo.isInSubCat) $scope.searchInfo.isInSubCat = JSON.parse($scope.searchInfo.isInSubCat);
                if($scope.searchInfo.priceMin) $scope.searchInfo.priceMin = parseFloat($scope.searchInfo.priceMin);
                if($scope.searchInfo.priceMax) $scope.searchInfo.priceMax = parseFloat($scope.searchInfo.priceMax);

                $scope.getProducts();

            },500);

            $scope.generateSearchUrl = function() {
                var searchString = $scope.searchInfo.q;
                if($scope.searchInfo.advS) {
                    if($scope.searchInfo.advS) searchString = searchString + '&advS='+$scope.searchInfo.advS;
                    if($scope.searchInfo.cat) searchString = searchString + '&cat='+$scope.searchInfo.cat;
                    if($scope.searchInfo.isInSubCat) searchString = searchString + '&isInSubCat='+$scope.searchInfo.isInSubCat;
                    if($scope.searchInfo.brand) searchString = searchString + '&brand='+$scope.searchInfo.brand;
                    if($scope.searchInfo.priceMin) searchString = searchString + '&priceMin='+$scope.searchInfo.priceMin;
                    if($scope.searchInfo.priceMax) searchString = searchString + '&priceMax='+$scope.searchInfo.priceMax;
                }
                var url = '/search?q=' + searchString + '&limit=' + $scope.limit + '&page=' + $scope.state.currentPage;
                return url;
            };

            $scope.getProducts = function () {

                var url = $scope.generateSearchUrl();

                $http.get('/api' + url)
                    .then(function (response) {
                        $scope.products = response.data.products;
                        $scope.state.totalRecords = response.data.total;

                    }, function (error) {
                        //console.log(error);
                    });
            };

            $scope.pageChangedFirstTime = true;
            $scope.pageChanged = function (page) {
                if ($scope.pageChangedFirstTime) {
                    $scope.pageChangedFirstTime = true;
                    $scope.state.currentPage = $state.params.page;
                }
                $location.url('/search' + '?q=' + $scope.query + '&limit=' + $scope.limit + '&page=' + $scope.state.currentPage);

            };

            $scope.advancedSearch = function() {
                var url = $scope.generateSearchUrl();
                $location.url(url);
                $scope.getProducts();
            };

        }]);
