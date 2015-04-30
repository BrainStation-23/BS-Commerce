'use strict';

angular.module('mean.shopAdmin').directive('tabCategoryDiscounts', ['Global', '$http',
    function (Global, $http) {
        return {
            replace: true,
            templateUrl: 'shopAdmin/views/category/template/tab-category-discounts.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);