'use strict';

angular.module('mean.shopAdmin').directive('tabBrandProducts', ['Global', '$http',
    function (Global, $http) {
        return {
            replace: true,
            templateUrl: 'shopAdmin/views/brand/template/tab-brand-products.html',
            link: function (scope, element, attrs) {

            }

        };
    }
]);