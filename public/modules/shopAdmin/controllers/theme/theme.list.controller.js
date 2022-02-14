'use strict';

angular.module('shopAdmin').controller('themeListController', ['$scope', 'Global', '$http', '$state', 'themeService',
    function($scope, Global, $http, $state, themeService) {
        $scope.themes = {};

        $scope.getAllThemes = function () {
            themeService.getThemes()
                .$promise
                .then(function(response) {
                    $scope.themes = response;
                });
        };
        $scope.getAllThemes();

    }
]);
