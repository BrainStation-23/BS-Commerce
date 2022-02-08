'use strict';

angular.module('shopAdmin').directive('tabCategoryDiscounts', ['Global', '$http',
    function (Global, $http) {
        return {
            restrict:'AE',
            replace: true,
            templateUrl: 'modules/shopAdmin/views/category/template/tab-category-discounts.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);
