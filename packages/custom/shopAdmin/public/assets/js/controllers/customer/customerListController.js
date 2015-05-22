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
                if(customers.length > $scope.numberOfDisplay) {
                    $scope.dispalayCustomer = $scope.customers.slice(0, $scope.numberOfDisplay);
                }
                $scope.displayOptionChange();
            });
        };

        $scope.getDefaultSearchCustomers();

        $scope.searchCustomers = function(){
            var searchCustomer = shopAdminService.searchCustomers($scope.roles, $scope.email, $scope.firstName);
            searchCustomer.$promise.then(function (customers) {
                $scope.customers = customers;
                $scope.bigTotalItems = customers.length;
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
                //console.log($scope.customers.length);
                if($scope.customers.length < $scope.numberOfDisplay) {
                    $scope.displayTo = $scope.customers.length;
                }
            }
        };
        //</editor-fold>

        //<editor-fold desc='start pagination functions'>

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        //</editor-fold>

        //<editor-fold desc='start date time picker functions'>

        $scope.today = function() {
            $scope.dateOfBirth = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dateOfBirth = null;
        };

        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        };

        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 2);
        $scope.events =
            [
                {
                    date: tomorrow,
                    status: 'full'
                },
                {
                    date: afterTomorrow,
                    status: 'partially'
                }
            ];

        $scope.getDayClass = function(date, mode) {
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0,0,0,0);

                for (var i=0;i<$scope.events.length; i+=1){
                    var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        };

        //</editor-fold>
    }
]);