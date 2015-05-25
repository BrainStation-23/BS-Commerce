/**
 * Created by shaishab on 5/25/15.
 */
'use strict';

angular.module('mean.shopAdmin').controller('userEditController', ['$scope', 'Global', '$stateParams','userService','$location',
    function($scope, Global, $stateParms, userService, $location) {
        $scope.user = {};
        $scope.getUserById = function() {
            var customerId = $location.path().split('/')[3];
            //console.log(customerId);
            var getCustomer = userService.getUserById(customerId);

            getCustomer.$promise.then(function (user){
                $scope.user = user;
                //console.log(user);
            });
        };
        $scope.getUserById();
    }
]);