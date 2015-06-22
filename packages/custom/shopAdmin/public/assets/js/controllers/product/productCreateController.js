'use strict';
//var apps = angular.module('mean.shopAdmin');

angular.module('mean.shopAdmin').controller('productCreateController', ['$scope', 'Global', '$stateParams', '$http','Upload','$state',
    function ($scope, Global, $stateParams, $http, Upload, $state) {

        $scope.add = function(p){
            console.log('product is : '+p);
        }
    }
]);