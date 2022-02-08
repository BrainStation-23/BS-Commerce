'use strict';

angular.module('shopAdmin').directive('tabBrandDiscounts', ['Global', '$http',
    function (Global, $http) {
        return {
            restrict:'AE',
            replace: true,
            templateUrl: 'modules/shopAdmin/views/brand/template/tab-brand-discounts.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);
