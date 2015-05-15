/**
 * Created by shaishab on 5/15/15.
 */
'use strict';

angular.module('mean.shopAdmin').config(['$meanStateProvider',
    function ( $meanStateProvider) {

        $meanStateProvider
            .state('Customer', {
                abstract: true,
                url: '/Customer',
                template: '<ui-view/>'
            }).state('Customer.List', {
                url: '/List',
                templateUrl: 'shopAdmin/views/customer/customer-list.html',
                controller: 'customerListController'
            });
    }
]);