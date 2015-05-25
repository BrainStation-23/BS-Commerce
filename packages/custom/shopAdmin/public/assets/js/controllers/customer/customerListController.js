/**
 * Created by shaishab on 5/15/15.
 */
'use strict';

angular.module('mean.shopAdmin').controller('customerListController', ['$scope', 'Global', '$stateParams','shopAdminService',
    function($scope, Global, $stateParams, shopAdminService){

        //<editor-fold desc=' variable declaration with initialization '>

        $scope.numberOfDisplayOptions = [10, 15, 20, 50, 100];
        $scope.numberOfDisplay = 10;
        $scope.roles ='';

        $scope.maxSize = 4;
        $scope.bigTotalItems = 10;
        $scope.bigCurrentPage = 1;
        $scope.dispalayCustomer = [];
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

        $scope.getDefaultSearchCustomers = function() {
            $scope.roleAuthenticated = true;
            $scope.updateRoles();
            var getDefaultSearchCustomers = shopAdminService.searchCustomers($scope.roles, '', '');

            getDefaultSearchCustomers.$promise.then(function (customers) {
                $scope.customers = customers;
                $scope.bigTotalItems = customers.length;
                $scope.dispalayCustomer = customers;

                if(customers.length > $scope.numberOfDisplay) {
                    $scope.dispalayCustomer = $scope.customers.slice(0, $scope.numberOfDisplay);
                }
                $scope.displayOptionChange();
            });
        };

        $scope.getDefaultSearchCustomers();

        $scope.searchCustomers = function(){
            var searchCustomer = shopAdminService.searchCustomers($scope.roles, $scope.email, $scope.fullName);

            searchCustomer.$promise.then(function (customers) {
                $scope.customers = customers;
                $scope.bigTotalItems = customers.length;
                $scope.dispalayCustomer = customers;

                if(customers.length > $scope.numberOfDisplay) {
                    $scope.dispalayCustomer = $scope.customers.slice(0, $scope.numberOfDisplay);
                }
                $scope.displayOptionChange();
            });
        };

        $scope.displayOptionChange = function() {

            if($scope.customers.length > 0) {
                $scope.displayFrom = 1;
                $scope.displayTo = $scope.numberOfDisplay;

                if($scope.customers.length <= $scope.numberOfDisplay) {
                    $scope.displayTo = $scope.customers.length;

                    if($scope.dispalayCustomer.length !== $scope.customers.length)
                        $scope.dispalayCustomer = $scope.customers;
                }
                else if($scope.customers.length > $scope.numberOfDisplay) {
                    $scope.displayTo = $scope.numberOfDisplay;
                    $scope.dispalayCustomer = $scope.customers.slice(0, $scope.numberOfDisplay);
                }
            }
        };
        //</editor-fold>

        //<editor-fold desc='start pagination functions'>

        $scope.changePagination =function(pageNo) {
            $scope.displayFrom = (pageNo - 1) * 10 + 1;
            $scope.displayTo = $scope.displayFrom + $scope.numberOfDisplay - 1;

            if($scope.displayTo > $scope.customers.length)
                $scope.displayTo = $scope.displayFrom + ($scope.customers.length - $scope.displayFrom);
            $scope.dispalayCustomer = $scope.customers.slice($scope.displayFrom-1, $scope.displayTo);
        };

        $scope.setPage = function (pageNo) {
            $scope.bigCurrentPage = pageNo;
            $scope.changePagination(pageNo);
        };

        //</editor-fold>
    }
]);