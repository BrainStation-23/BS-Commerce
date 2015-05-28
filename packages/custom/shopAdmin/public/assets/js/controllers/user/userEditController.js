/**
 * Created by shaishab on 5/25/15.
 */
'use strict';

angular.module('mean.shopAdmin').controller('userEditController', ['$scope', 'Global', '$stateParams','userService','$location', '$timeout',
    function($scope, Global, $stateParms, userService, $location, $timeout) {

        //<editor-fold desc='Variable declaration'>
        $scope.user = {};
        $scope.newAddress = {};
        $scope.editAddress = {};
        //</editor-fold>

        $scope.getUserById = function() {
            var customerId = $location.path().split('/')[3];
            var getCustomer = userService.getUserById(customerId);
            getCustomer.$promise.then(function (user){
                $scope.user = user;
                if(user.roles.indexOf('admin') !== -1)
                    $scope.roleAdmin = true;
                if(user.roles.indexOf('rergistered') !== -1)
                    $scope.roleRegistered = true;
                if(user.roles.indexOf('authenticated') !== -1)
                    $scope.roleAuthenticated = true;
                $scope.user.active = user.active || false;
            });
        };
        $scope.getUserById();

        $scope.changeUserPassword = function() {
            var getChangeResponse = userService.changeUserPassword($scope.user._id, $scope.user.password);
            getChangeResponse.$promise.then(function(data) {
                $scope.passwordChanged = true;
                $timeout(function() {
                    $scope.passwordChanged = false;
                },2000);
            },function(error) {
                $scope.passwordChangedError = true;
                $timeout(function() {
                    $scope.passwordChangedError = false;
                },2000);
            });
        };

        $scope.updateRoles = function( roleName) {
            if($scope.user.roles.indexOf(roleName) === -1)
                $scope.user.roles.push(roleName);
            else if($scope.user.roles.indexOf(roleName) >= -1)
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
                addressLine1:$scope.newAddress.addressLine1,
                addressLine2:$scope.newAddress.addressLine2,
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
                Object.assign($scope.editAddress, $scope.user.addresses[addressIndex]);
                $scope.editAddress.index = addressIndex;
                $scope.addressTableBtnsDisable = true;
            }
            else if(!active) {
                $scope.activeEditAddress =false;
                $scope.addressTableBtnsDisable = false;
            }
        };

        $scope.updateAddress = function() {
            var address = {
                addressLine1:$scope.editAddress.addressLine1,
                addressLine2:$scope.editAddress.addressLine2,
                city: $scope.editAddress.city,
                country: $scope.editAddress.country,
                postCode: $scope.editAddress.postCode
            };
            $scope.user.addresses[$scope.editAddress.index] = address;
            $scope.addressTableBtnsDisable = false;
            $scope.editAddress = {};
            $scope.activeEditAddress =false;
        };

        $scope.updateUserInfo = function() {
            $scope.user.active = $scope.user.active || false;
            var updateResponse = userService.updateUserInfo($scope.user);
            updateResponse.$promise.then(function(responseData) {
                $scope.updateSuccessMsg = responseData.msg;
                    $timeout(function() {
                        $scope.updateSuccessMsg = '';
                    },2000);
            },
            function(error) {
                $scope.updateErrorMsg = error.msg;
                $timeout(function() {
                    $scope.updateErrorMsg = '';
                },2000);
            });
        };

        $scope.deleteUserById = function() {
            if(confirm('Are you sure you want to delete this user ?')) {
                var deleteUserResponse = userService.deleteUserById($scope.user._id);
                deleteUserResponse.$promise.then(function(responseData) {
                        $scope.deleteSuccessMsg = responseData.msg;
                        $timeout(function() {
                            $scope.deleteSuccessMsg = '';
                            $location.path('/User/List');
                        },3000);
                    },
                    function(error) {
                        $scope.deleteErrorMsg = error.msg;
                        $timeout(function() {
                            $scope.deleteErrorMsg = '';
                        },3000);
                    });
            }
        };
    }
]);