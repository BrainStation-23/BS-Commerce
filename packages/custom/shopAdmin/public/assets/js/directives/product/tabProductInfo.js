'use strict';

angular.module('mean.shopAdmin').directive('tabProductInfo', ['Global', '$http',
    function (Global, $http) {
        return {
            replace: true,
            templateUrl: 'shopAdmin/views/product/template/tab-product-info.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);