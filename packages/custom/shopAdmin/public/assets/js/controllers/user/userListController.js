/**
 * Created by shaishab on 5/15/15.
 */
'use strict';

angular.module('mean.shopAdmin').controller('userListController', ['$scope', 'Global', '$stateParams','userService', '$location',
    function($scope, Global, $stateParams, userService, $location){

        //<editor-fold desc=' variable declaration with initialization '>

        $scope.numberOfDisplayOptions = [10, 15, 20, 50, 100];
        $scope.numberOfDisplay = 10;
        $scope.roles ='';

        $scope.maxSize = 4;
        $scope.totalItems = 10;
        $scope.currentPage = 1;
        $scope.dispalayUsers = [];
        $scope.searchQuery = {};
            //fruits.slice(1, 3);

        //</editor-flod>

        //<editor-fold desc='start custom functions'>
        $scope.updateRoles = function() {
            $scope.roles = '';
            if($scope.roleAdmin)
                $scope.roles+= 'admin,';
            if($scope.roleRegistered)
                $scope.roles+= 'registered,';
            if($scope.roleAuthenticated)
                $scope.roles+= 'authenticated';
        };



        $scope.getDefaultSearchUsers = function() {
            $scope.roleAuthenticated = true;
            $scope.updateRoles();
            $scope.searchQuery.numberOfSkip =0;
            $scope.searchQuery.numberOfDisplay = $scope.numberOfDisplay;
            $scope.searchQuery.roles = $scope.roles;
            userService.searchUsers($scope.searchQuery)
                .$promise.then(function (response) {
                    $scope.users = response.users;
                    $scope.totalItems = response.totalUser;
                    $scope.dispalayUsers = response.users;
                    $scope.displayOptionChange();
                });
        };

        $scope.getDefaultSearchUsers();

        $scope.searchUsers = function(numberOfSkip, numberOfDisplay, callback){
            $scope.updateRoles();
            $scope.searchQuery.numberOfSkip = numberOfSkip;
            $scope.searchQuery.numberOfDisplay = numberOfDisplay;
            $scope.searchQuery.roles = $scope.roles;

            userService.searchUsers($scope.searchQuery)
                .$promise
                .then(function(response) {
                    $scope.users = $scope.users.concat(response.users);
                    callback();
                });
        };

        $scope.displayOptionChange = function() {
            var usersLength = $scope.users.length;
            if(usersLength > 0) {
                $scope.currentPage = 1;
                $scope.displayFrom = 1;
                $scope.displayTo = $scope.numberOfDisplay;

                if(usersLength === $scope.numberOfDisplay) {
                    $scope.displayTo = usersLength;
                    $scope.dispalayUsers = $scope.users;
                }
                else if((usersLength < $scope.numberOfDisplay) && (usersLength < $scope.totalItems)) {
                    $scope.searchUsers(usersLength, ($scope.numberOfDisplay - usersLength), function() {
                        $scope.displayTo = $scope.users.length;
                        $scope.dispalayUsers = $scope.users;
                    });
                }
                else if((usersLength < $scope.numberOfDisplay) && (usersLength === $scope.totalItems)) {
                    $scope.displayTo = usersLength;
                    $scope.dispalayUsers = $scope.users;
                }
                else if(usersLength > $scope.numberOfDisplay) {
                    $scope.displayTo = $scope.numberOfDisplay;
                    $scope.dispalayUsers = $scope.users.slice(0, $scope.numberOfDisplay);
                }
            }
        };


        $scope.showAddUserForm = function() {
            $location.path('/User/Create');
        };
        //</editor-fold>

        //<editor-fold desc='start pagination functions'>

        $scope.changePagination =function(pageNo) {
            $scope.displayFrom = (pageNo - 1) * $scope.numberOfDisplay + 1;
            $scope.displayTo = $scope.displayFrom + $scope.numberOfDisplay - 1;

            if($scope.displayTo > $scope.users.length)
                $scope.displayTo = $scope.displayFrom + ($scope.users.length - $scope.displayFrom);
            $scope.dispalayUsers = $scope.users.slice($scope.displayFrom-1, $scope.displayTo);
        };

        $scope.setPage = function (pageNo) {
            if($scope.totalItems > $scope.users.length) {
                var numberOfSkip = (pageNo -1) * $scope.numberOfDisplay;
                $scope.searchUsers(numberOfSkip, $scope.numberOfDisplay, function() {
                    $scope.changePagination(pageNo);
                });
            } else {
                $scope.changePagination(pageNo);
            }
            $scope.currentPage = pageNo;
        };

        //</editor-fold>
    }
]);