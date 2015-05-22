/**
 * Created by shaishab on 5/15/15.
 */
'use strict';

angular.module('mean.shopAdmin').controller('customerListController', ['$scope', 'Global', '$stateParams','shopAdminService',
    function($scope, Global, $stateParams, shopAdminService){
        //console.log('get customer list controller');

        /*--------------------------- start pegination functions ---------------------------------------- */
        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.maxSize = 4;
        $scope.bigTotalItems = 175;
        $scope.bigCurrentPage = 1;

        /*--------------------------- end pegination functions ---------------------------------------- */

        /*--------------------------- start date time picker functions ---------------------------------------- */
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

        /*--------------------------- end date time picker functions ---------------------------------------- */

        /*--------------------------- start custome functions ---------------------------------------- */
        $scope.roles ='';

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
            });
        };

        $scope.getDefaultSearchCustomers();

        $scope.searchCustomers = function(){
            var searchCustomer = shopAdminService.searchCustomers($scope.roles, $scope.email, $scope.firstName);
            searchCustomer.$promise.then(function (customers) {
                $scope.customers = customers;
            });
        };

    }
]);