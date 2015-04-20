'use strict';

angular.module('mean.shopAdmin').controller('categoryEditController', ['$scope', 'Global', '$stateParams',
    function($scope, Global, $stateParams) {
        $scope.catId = $stateParams.catId;
        console.log($scope.catId);
    }
]);