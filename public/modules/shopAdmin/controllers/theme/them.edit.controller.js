'use strict';

angular.module('shopAdmin').controller('themeEditController', ['$scope', '$window', '$stateParams', '$state', 'themeService',
    function ($scope, $window, $stateParams, $state, themeService) {

        $scope.theme = {};

        $scope.getThemeById = function(){
            themeService.getThemeById($stateParams.themeId)
                .$promise
                .then(function(theme) {
                    $scope.theme = theme;
                });
        };
        $scope.getThemeById();

        $scope.update = function () {
            themeService.updateTheme($scope.theme)
                .$promise
                .then(function(response) {
                    $window.toastr.success('Successfully update theme information');
                    $state.go('Theme.List');
                });
        };

        $scope.delete = function () {
            if(confirm('Are you sure want to delete this theme ?')) {
                themeService.deleteTheme($stateParams.themeId)
                    .$promise
                    .then(function (response) {
                        $window.toastr.success('Successfully deleted theme');
                        $state.go('Theme.List');
                    });
            }
        };
    }
]);
