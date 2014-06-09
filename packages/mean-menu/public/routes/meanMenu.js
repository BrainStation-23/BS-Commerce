'use strict';

angular.module('mean.mean-menu').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('meanMenu example page', {
            url: '/meanMenu/example',
            templateUrl: 'mean-menu/views/index.html'
        });
    }
]);
