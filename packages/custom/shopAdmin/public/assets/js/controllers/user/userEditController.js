/**
 * Created by shaishab on 5/25/15.
 */
'use strict';

angular.module('mean.shopAdmin').controller('userEditController', ['$scope', 'Global', '$stateParams','customerService','$location',
    function($scope, Global, $stateParms, customerService, $location) {
        $scope.user = {};
        $scope.getUserById = function() {
            var customerId = $location.path().split('/')[3];
            //console.log(customerId);
            var getCustomer = customerService.getCustomerById(customerId);

            getCustomer.$promise.then(function (user){
                $scope.user = user[0];
                console.log($scope.user);
            });
        };
        $scope.getUserById();
    }
]);