'use strict';

angular.module('lightweight').controller('HeaderController', ['$scope', '$rootScope', '$window' ,'Global', '_', 'Menus','WishlistService',
    function($scope, $rootScope, $window, Global, _, Menus, WishlistService) {
        $scope.authentication = Global;
        $scope.isCollapsed = false;
        $scope.menu = Menus.getMenu('topbar');
        $rootScope.totalWishlistItems = 0;

        $scope.toggleCollapsibleMenu = function() {
            $scope.isCollapsed = !$scope.isCollapsed;
        };

        // Collapsing the menu after navigation
        $scope.$on('$stateChangeSuccess', function() {
            $scope.isCollapsed = false;
        });

        var wishlistCount = function() {
            WishlistService.getWishlist()
                .$promise
                .then(function(wishlist){
                    $rootScope.totalWishlistItems = 0;
                    _.forEach(wishlist.items, function (item) {
                        $rootScope.totalWishlistItems += item.quantity;
                    });
                });
        };
        wishlistCount();

        $rootScope.$on('wishlist:updated', function () {
            wishlistCount();
        });
    }
]);
