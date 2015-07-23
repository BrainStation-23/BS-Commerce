'use strict';

angular.module('mean.shopAdmin').config(['$meanStateProvider',
    function($meanStateProvider) {
        $meanStateProvider
            .state('Order', {
                abstract: true,
                url: '/Order',
                template: '<ui-view/>'
            })
            .state('Order.List', {
                url: '/List?paymentStatus?orderStatus?shippingStatus',
                templateUrl: 'shopAdmin/views/order/order-list.html',
                controller: 'orderListController'
            })
            .state('Order.Edit', {
                url: '/Edit/:orderId',
                controller: 'orderEditController',
                templateUrl: 'shopAdmin/views/order/order-edit.html'
            });
    }
]);