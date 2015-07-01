'use strict';

angular.module('mean.shopAdmin').factory('orderService', ['$resource', '$http',
    function($resource, $http) {
        return {
          getOrderEnums: function() {
              var ordersEnums = $resource('/api/auth/orders/enums', {});
              return ordersEnums.get({});
          },
            searchOrders: function(query) {
                var ordersEnums = $resource('/api/auth/order', {});
                return ordersEnums.get(query);
            }
        };
    }
]);