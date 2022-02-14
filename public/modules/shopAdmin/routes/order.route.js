'use strict';

angular.module('shopAdmin').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('Order', {
                abstract: true,
                url: '/Order',
                template: '<ui-view/>'
            })
            .state('Order.List', {
                url: '/List?paymentStatus?orderStatus?shippingStatus',
                templateUrl: 'modules/shopAdmin/views/order/order-list.html',
                controller: 'orderListController'
            })
            .state('Order.Edit', {
                url: '/Edit/:orderId',
                controller: 'orderEditController',
                templateUrl: 'modules/shopAdmin/views/order/order-edit.html'
            })
            .state('Order.AddShipment', {
                url: '/:orderId/AddShipment',
                templateUrl: 'modules/shopAdmin/views/shipment/shipment-add.html',
                controller: 'shipmentCreateController'
            });
    }
]);
