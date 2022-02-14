'use strict';

angular.module('shopAdmin').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('Order.Shipment', {
                abstract: true,
                url: '/Shipment',
                template: '<ui-view/>'
            })
            .state('Order.Shipment.List', {
                url: '/List',
                templateUrl: 'modules/shopAdmin/views/shipment/shipment-list.html',
                controller: 'shipmentListController'
            })
            .state('Order.Shipment.Edit', {
                url: '/Edit/:shipmentId',
                templateUrl: 'modules/shopAdmin/views/shipment/shipment-edit.html',
                controller: 'shipmentEditController'
            });
    }
]);
