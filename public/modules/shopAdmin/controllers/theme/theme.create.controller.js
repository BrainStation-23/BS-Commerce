'use strict';

angular.module('shopAdmin').controller('themeCreateController', ['$scope', '$window', 'Global', '$http', '$state', 'themeService',
    function($scope, $window, Global, $http, $state, themeService) {
        $scope.theme = {};

        $scope.create = function (theme) {
            themeService.createTheme(theme)
                .$promise
                .then(function(promise) {
                    $window.toastr.success('Successfully created theme');
                    $state.go('Theme.List');
                });
        };
    }
]);
