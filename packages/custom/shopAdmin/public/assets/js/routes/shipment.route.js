'use strict';

angular.module('mean.shopAdmin').config(['$meanStateProvider',
    function($meanStateProvider) {
        $meanStateProvider
            .state('Shipment', {
                abstract: true,
                url: '/Shipment',
                template: '<ui-view/>'
            })
            .state('Shipment.List', {
                url: '/List',
                templateUrl: 'shopAdmin/views/shipment/shipment-list.html',
                controller: 'shipmentCreateController'
            });
    }
]);