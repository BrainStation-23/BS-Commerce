/**
 * Created by shaishab on 5/27/15.
 */
'use strict';

angular.module('shopAdmin').controller('userCreateController', ['$scope', '$window', '$timeout', '$location', 'userService',
    function($scope, $window, $timeout, $location, userService) {

        //<editor-fold desc='Variable declaration'>
        $scope.user = {addresses: [],roles: []};
        $scope.newAddress = {};
        $scope.editAddress = {};
        //</editor-fold>

        $scope.updateRoles = function( roleName) {
            if($scope.user.roles.indexOf(roleName) === -1)
                $scope.user.roles.push(roleName);
            else if($scope.user.roles.indexOf(roleName) > -1)
                $scope.user.roles.pop(roleName);
        };

        $scope.showAddressForm = function(active) {
            $scope.newAddress = {};
            if(active) {
                $scope.activeAddNewAddress = true;
                $scope.addressTableBtnsDisable = true;
            }
            else if(!active) {
                $scope.activeAddNewAddress = false;
                $scope.addressTableBtnsDisable = false;
            }
        };

        $scope.addNewAddress = function() {
            var address= {
                addressLine1: $scope.newAddress.addressLine1,
                addressLine2: $scope.newAddress.addressLine2,
                city: $scope.newAddress.city,
                country: $scope.newAddress.country,
                postCode: $scope.newAddress.postCode
            };
            $scope.user.addresses.push(address);
            $scope.activeAddNewAddress = false;
            $scope.addressTableBtnsDisable = false;
        };

        $scope.deleteAddress = function(addressIndex) {
            if (confirm('Are you sure you want to delete this address ?')) {
                $scope.user.addresses.splice(addressIndex, 1);
            }
        };

        $scope.showEditAddressForm = function(active, addressIndex) {
            $scope.editAddress = {};
            if(active) {
                $scope.activeEditAddress =true;
                $scope.editAddress = angular.copy($scope.user.addresses[addressIndex]);
                $scope.editAddress.index = addressIndex;
                $scope.addressTableBtnsDisable = true;
            }
            else if(!active) {
                $scope.activeEditAddress =false;
                $scope.addressTableBtnsDisable = false;
            }
        };

        $scope.updateAddress = function(addressIndex) {
            var address = {
                addressLine1:$scope.editAddress.addressLine1,
                addressLine2:$scope.editAddress.addressLine2,
                city: $scope.editAddress.city,
                country: $scope.editAddress.country,
                postCode: $scope.editAddress.postCode
            };
            $scope.user.addresses[addressIndex] = address;
            $scope.addressTableBtnsDisable = false;
            $scope.editAddress = {};
            $scope.activeEditAddress =false;
        };

        $scope.createNewUser = function() {
            if($scope.user.email === undefined || $scope.user.phoneNumber === undefined || $scope.user.password === undefined || $scope.user.gender === undefined) {
                $scope.requiredErrorMsg = true;
                return;
            }
            $scope.user.active = $scope.user.active || true;
            var createUserResponse = userService.createUser($scope.user);
            createUserResponse.$promise.then(function(promiseData) {
                    $timeout(function() {
                        $window.toastr.success(promiseData.msg);
                        $location.path('/User/List');
                    },2000);
                },
                function(error) {
                    $window.toastr.error(error.data.msg);
                });
        };
    }
]);
