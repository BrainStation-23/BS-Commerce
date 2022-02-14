'use strict';

angular.module('shopAdmin').directive('tabProductInfo', ['Global', '$http',
    function (Global, $http) {
        return {
            restrict:'AE',
            replace: true,
            templateUrl: 'modules/shopAdmin/views/product/template/tab-product-info.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);
