'use strict';

angular.module('lightweight').controller('ProductByCategoryController',
    ['$scope', '$rootScope', '$timeout', '$state', '$window', 'Global', 'ProductService', 'UserService', 'CartService', 'WishlistService', 'CompareService',
    function($scope, $rootScope, $timeout, $state, $window, Global, ProductService, UserService, CartService, WishlistService, CompareService) {
        var slug = $state.params.slug;
        $scope.global = Global;

        $scope.pageSizeOptions = ['6','9','12'];
        $scope.orderByOptions = [{name: 'Name', value:'name'},{name: 'Price', value:'price'},{name: 'Date Published', value:'publishDate'}];

        $scope.state={
            totalRecords:0,
            pageSize:6,
            currentPage : 1,
            orderBy:{
                value: 'name',
                text: 'Name'
            }
        };

        $scope.products = [];

        var getProducts = function() {
            ProductService.getProductByCategory().get({
                slug:slug,
                orderBy: $scope.state.orderBy.value,
                pageSize: $scope.state.pageSize,
                currentPage: $scope.state.currentPage
            },function(data, getHeader){
                $scope.products = data.products;
                $scope.state.totalRecords = data.total;
            });
        };
        getProducts();


        $scope.pageChanged = function(){
            getProducts();
        };

        $scope.setPageSize = function(pageSize, event){
            event.preventDefault();

            $scope.state.currentPage = 1;
            $scope.state.pageSize = pageSize;
            getProducts();
        };

        $scope.setOrderBy = function(text, value, event){
            event.preventDefault();

            $scope.state.currentPage = 1;
            $scope.state.orderBy.text = text;
            $scope.state.orderBy.value = value;

            getProducts();
        };

        $scope.addToCart = function(product, event){

            var item = {product:product._id, quantity: 1};

            if(!$scope.global.authenticated) {

                UserService.createGuestUser().$promise.then(function(user) {
                    CartService.addToCart({item: item}).$promise.then(function(cartResponse) {
                        $scope.global.user = user;
                        $window.location.reload();
                        $rootScope.$emit('cart:updated');
                        $window.toastr.success('Added to cart');
                    });
                });
            } else {
                CartService.addToCart({item: item}).$promise.then(function(data) {
                    $rootScope.$emit('cart:updated');
                    $window.toastr.success('Added to cart');
                });
            }
            event.preventDefault();

        };

        $scope.addToWishlist = function(product, event){
            event.preventDefault();
            var item = {product:product._id, quantity: 1};

            if(!$scope.global.authenticated) {

                UserService.createGuestUser().$promise.then(function(user) {
                    WishlistService.addToWishlist({item: item}).$promise.then(function(wishlistResponse) {
                        $scope.global.user = user;
                        $window.location.reload();
                        $rootScope.$emit('wishlist:updated');
                        $window.toastr.success('Added to wishlist');
                    });
                });
            } else {
                WishlistService.addToWishlist({item: item}).$promise.then(function(data) {
                    //console.log(data);
                    $rootScope.$emit('wishlist:updated');
                    $window.toastr.success('Added to wishlist');
                });
            }
        };

        $scope.addToCompare = function(product, event){
            event.preventDefault();
            var item = {product:product._id};

            if(!$scope.global.authenticated) {

                UserService.createGuestUser().$promise.then(function(user) {
                    CompareService.addToCompare({item: item}).$promise.then(function(compareResponse) {
                        $scope.global.user = user;
                        $window.toastr.success('Added to compare list');
                        $window.location.reload();
                    });
                });
            } else {
                CompareService.addToCompare({item: item}).$promise.then(function(data) {
                    $window.toastr.success('Added to compare list');
                });
            }
        };
    }
]);
