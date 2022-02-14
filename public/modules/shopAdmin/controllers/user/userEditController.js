/**
 * Created by shaishab on 5/25/15.
 */
'use strict';

angular.module('shopAdmin').controller('userEditController', ['$scope', '$window', 'Global', '$state', '$stateParams','userService','$location', '$timeout',
    function($scope, $window, Global, $state, $stateParams, userService, $location, $timeout) {

        //<editor-fold desc='Variable declaration'>
        $scope.user = {};
        $scope.newAddress = {};
        $scope.editAddress = {};
        //</editor-fold>

        $scope.getUserById = function() {
            var userId = $stateParams.userId;
            var getUser = userService.getUserById(userId);
            getUser.$promise.then(function (user){
                $scope.user = user;
                if(user.roles.indexOf('admin') !== -1)
                    $scope.roleAdmin = true;
                if(user.roles.indexOf('user') !== -1)
                    $scope.roleUser = true;
                if(user.roles.indexOf('guest') !== -1)
                    $scope.roleGuest = true;
                $scope.user.active = user.active || false;
                $scope.user.gender = user.gender || 'male';
            });
        };
        $scope.getUserById();

        $scope.changeUserPassword = function() {
            var getChangeResponse = userService.changeUserPassword($scope.user._id, $scope.user.password);
            getChangeResponse.$promise.then(function(data) {
                $window.toastr.success('Successfully changed password');
            },function(error) {
                $window.toastr.error('Failed to change password. Please try again');
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
                $scope.editAddress = angular.copy($scope.user.addresses[addressIndex]);//previous jQuery.extend({}, source)
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

        $scope.updateUserInfo = function() {
            $scope.user.active = $scope.user.active || false;
            var updateResponse = userService.updateUserInfo($scope.user);
            updateResponse.$promise.then(function(responseData) {
                $window.toastr.success(responseData.msg);
            },
            function(error) {
                $window.toastr.error(error.msg);
            });
        };

        $scope.deleteUserById = function() {
            if(confirm('Are you sure you want to delete this user ?')) {
                var deleteUserResponse = userService.deleteUserById($scope.user._id);
                deleteUserResponse.$promise.then(function(responseData) {
                        $window.toastr.success(responseData.msg);
                        $state.go('User.List');
                    },
                    function(error) {
                        console.log(error);
                        $window.toastr.error(error.data.msg);
                    });
            }
        };
    }
]);
