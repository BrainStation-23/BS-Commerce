/**
 * Created by shaishab on 5/15/15.
 */
'use strict';

angular.module('mean.shopAdmin').controller('customerListController', ['$scope', 'Global', '$stateParams',
    function($scope, Global, $stateParams){
        //console.log('get customer list controller');

        /*--------------------------- start pegination functions ---------------------------------------- */
        //$scope.totalItems = 150;
        //$scope.currentPage = 4;

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        //$scope.pageChanged = function() {
        //    $log.log('Page changed to: ' + $scope.currentPage);
        //};

        $scope.maxSize = 4;
        $scope.bigTotalItems = 175;
        $scope.bigCurrentPage = 1;

        /*--------------------------- end pegination functions ---------------------------------------- */

        /*--------------------------- start date time picker functions ---------------------------------------- */
        $scope.today = function() {
            $scope.dt = null;
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
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

                for (var i=0;i<$scope.events.length;i++){
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
        //$scope.customers=[];
        $scope.customers=[
            {
                "id":3,
                "email": "shaishab.cse@gmail.com",
                "name": "shaishab",
                "roles": "admin",
                "company": "own",
                "active": false,
                "createdOn": "12/3/2013 8:48:33 PM",
                "lastActivityOn": "12/3/2013 8:48:33 PM"
            },
            {
                "id":15,
                "email": "shaishab.roy@bs-23.com",
                "name": "shaishab roy",
                "roles": "registered",
                "company": "bs-23",
                "active": true,
                "createdOn": "12/3/2013 8:48:33 PM",
                "lastActivityOn": "12/3/2013 8:48:33 PM"
            }
        ];

    }
]);