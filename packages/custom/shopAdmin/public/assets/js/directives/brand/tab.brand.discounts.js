'use strict';

angular.module('mean.shopAdmin').directive('tabBrandDiscounts', ['Global', '$http',
    function (Global, $http) {
        return {
            replace: true,
            templateUrl: 'shopAdmin/views/brand/template/tab-brand-discounts.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);