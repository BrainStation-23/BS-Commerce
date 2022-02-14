'use strict';

angular.module('mean.shopAdmin').controller('themeCreateController', ['$scope', 'Global', '$http', '$state', 'themeService',
    function($scope, Global, $http, $state, themeService) {
        $scope.theme = {};

        $scope.create = function (theme) {
            themeService.createTheme(theme)
                .$promise
                .then(function(promise) {
                    $state.go('Theme.List');
                });
        };
    }
]);