'use strict';

angular.module('lightweight').controller('AdvanceSearchController',
    ['$scope', '$rootScope', '$timeout', '$state', '$location', '$window', 'Global', 'BrandService', 'CategoryService', 'CartService', 'UserService', 'ProductService',
        function ($scope, $rootScope, $timeout, $state, $location, $window, Global, BrandService, CategoryService, CartService, UserService, ProductService) {

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

            BrandService.getBrands()
                .$promise
                .then(function (response) {
                    $scope.brands = response.brands;
                }, function (error) {
                    $scope.brands = [];
                });

            var generateCategoriesForDropDownList = function (getCategories, callback) {
                var generatedCategories = [];

                var generateCategoriesWithParent = function (categories, parentCategoryName) {
                    angular.forEach(categories, function (category) {
                        if (parentCategoryName) {
                            category.name = parentCategoryName + ' >> ' + category.name;
                        }

                        generatedCategories.push(category);

                        if (category.subCategories) {
                            generateCategoriesWithParent(category.subCategories, category.name);
                        }
                    });
                };
                generateCategoriesWithParent(getCategories, null);
                callback(generatedCategories);
            };

            CategoryService.getCategories()
                .$promise
                .then(function (categories) {
                    generateCategoriesForDropDownList(categories, function (categories) {
                        $scope.categories = categories;
                    });
                }, function (error) {
                    $scope.categories = [];
                });

            $scope.products = [];
            $scope.searchInfo = {};
            $scope.limit = $state.params.limit;
            $scope.state.currentPage = $state.params.page;

            $timeout(function () {
                $scope.searchInfo = $location.search();
                if ($scope.searchInfo.advS) $scope.searchInfo.advS = JSON.parse($scope.searchInfo.advS);
                if ($scope.searchInfo.isInSubCat) $scope.searchInfo.isInSubCat = JSON.parse($scope.searchInfo.isInSubCat);
                if ($scope.searchInfo.priceMin) $scope.searchInfo.priceMin = parseFloat($scope.searchInfo.priceMin);
                if ($scope.searchInfo.priceMax) $scope.searchInfo.priceMax = parseFloat($scope.searchInfo.priceMax);

                $scope.getProducts();

            });

            $scope.generateSearchUrl = function () {
                var searchString = $scope.searchInfo.q;
                if ($scope.searchInfo.advS) {
                    if ($scope.searchInfo.advS) searchString = searchString + '&advS=' + $scope.searchInfo.advS;
                    if ($scope.searchInfo.cat) searchString = searchString + '&cat=' + $scope.searchInfo.cat;
                    if ($scope.searchInfo.isInSubCat) searchString = searchString + '&isInSubCat=' + $scope.searchInfo.isInSubCat;
                    if ($scope.searchInfo.brand) searchString = searchString + '&brand=' + $scope.searchInfo.brand;
                    if ($scope.searchInfo.priceMin) searchString = searchString + '&priceMin=' + $scope.searchInfo.priceMin;
                    if ($scope.searchInfo.priceMax) searchString = searchString + '&priceMax=' + $scope.searchInfo.priceMax;
                }
                var url = '/search?q=' + searchString + '&limit=' + $scope.limit + '&page=' + $scope.state.currentPage;
                return url;
            };

            $scope.getProducts = function () {
                var url = $scope.generateSearchUrl();

                ProductService.getSearchProduct(url)
                    .$promise
                    .then(function (responseData) {
                        $scope.products = responseData.products;
                        $scope.state.totalRecords = responseData.total;
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

            $scope.advancedSearch = function () {
                var url = $scope.generateSearchUrl();
                $location.url(url);
                $scope.getProducts();
            };

            $scope.addToCart = function (product, event) {

                var item = {product: product._id, quantity: 1};

                if (!$scope.global.authenticated) {

                    UserService.createGuestUser().$promise.then(function (user) {
                        CartService.addToCart({item: item}).$promise.then(function (cartResponse) {

                            $scope.global.user = user;
                            $window.location.reload();
                            $rootScope.$emit('cart:updated');
                        });
                    });
                } else {
                    CartService.addToCart({item: item}).$promise.then(function (data) {
                        $rootScope.$emit('cart:updated');
                    });
                }
                event.preventDefault();

            };

        }
    ]);
