'use strict';

angular.module('mean.mean-menu').controller('MeanMenuController', ['$scope', 'Global', 'MeanMenu',
    function($scope, Global, MeanMenu) {
        $scope.global = Global;
        $scope.package = {
            name: 'mean-menu'
        };
    }
]);
