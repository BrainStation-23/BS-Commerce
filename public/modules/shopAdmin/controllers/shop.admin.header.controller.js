'use strict';

angular.module('shopAdmin').controller('AdminHeaderController', ['$scope', 'Global', 'Menus',
    function($scope, Global, Menus) {
        $scope.authentication = Global;
        $scope.isCollapsed = false;
        $scope.menu = Menus.getMenu('topbar');

        $scope.toggleCollapsibleMenu = function() {
            $scope.isCollapsed = !$scope.isCollapsed;
        };

        // Collapsing the menu after navigation
        $scope.$on('$stateChangeSuccess', function() {
            $scope.isCollapsed = false;
        });
    }
]);
