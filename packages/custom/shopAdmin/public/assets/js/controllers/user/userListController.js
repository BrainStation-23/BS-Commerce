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
        $scope.bigTotalItems = 10;
        $scope.bigCurrentPage = 1;
        $scope.dispalayUsers = [];
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
            var getDefaultSearchUsers = userService.searchUsers($scope.roles, '', '');

            getDefaultSearchUsers.$promise.then(function (users) {
                $scope.users = users;
                $scope.bigTotalItems = users.length;
                $scope.dispalayUsers = users;

                if(users.length > $scope.numberOfDisplay) {
                    $scope.dispalayUsers = $scope.users.slice(0, $scope.numberOfDisplay);
                }
                $scope.displayOptionChange();
            });
        };

        $scope.getDefaultSearchUsers();

        $scope.searchUsers = function(){
            var responseUsers = userService.searchUsers($scope.roles, $scope.email, $scope.fullName);

            responseUsers.$promise.then(function (users) {
                $scope.users = users;
                $scope.bigTotalItems = users.length;
                $scope.dispalayUsers = users;

                if(users.length > $scope.numberOfDisplay) {
                    $scope.dispalayUsers = $scope.users.slice(0, $scope.numberOfDisplay);
                }
                $scope.displayOptionChange();
            });
        };

        $scope.displayOptionChange = function() {

            if($scope.users.length > 0) {
                $scope.displayFrom = 1;
                $scope.displayTo = $scope.numberOfDisplay;

                if($scope.users.length <= $scope.numberOfDisplay) {
                    $scope.displayTo = $scope.users.length;

                    if($scope.dispalayUsers.length !== $scope.users.length)
                        $scope.dispalayUsers = $scope.users;
                }
                else if($scope.users.length > $scope.numberOfDisplay) {
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
            $scope.displayFrom = (pageNo - 1) * 10 + 1;
            $scope.displayTo = $scope.displayFrom + $scope.numberOfDisplay - 1;

            if($scope.displayTo > $scope.users.length)
                $scope.displayTo = $scope.displayFrom + ($scope.users.length - $scope.displayFrom);
            $scope.dispalayUsers = $scope.users.slice($scope.displayFrom-1, $scope.displayTo);
        };

        $scope.setPage = function (pageNo) {
            $scope.bigCurrentPage = pageNo;
            $scope.changePagination(pageNo);
        };

        //</editor-fold>
    }
]);