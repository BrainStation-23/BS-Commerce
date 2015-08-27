'use strict';

angular.module('mean.shopAdmin').config(['$meanStateProvider',
    function($meanStateProvider) {
        $meanStateProvider
            .state('Order.Shipment', {
                abstract: true,
                url: '/Shipment',
                template: '<ui-view/>'
            })
            .state('Order.Shipment.List', {
                url: '/List',
                templateUrl: 'shopAdmin/views/shipment/shipment-list.html',
                controller: 'shipmentListController'
            })
            .state('Order.Shipment.Edit', {
                url: '/Edit/:shipmentId',
                templateUrl: 'shopAdmin/views/shipment/shipment-edit.html',
                controller: 'shipmentEditController'
            });
    }
]);