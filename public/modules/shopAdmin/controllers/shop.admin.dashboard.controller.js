'use strict';

// ShopAdmins controller
angular.module('shopAdmin').controller('DashboardController', ['$scope', '$stateParams', '$location', 'Global',
    function($scope, $stateParams, $location, Authentication) {
        $scope.authentication = Authentication;
        //console.log('load dashboard controller');
        // Create new ShopAdmin

        //ShopAdmins.adminHomePage();

    }
]);
