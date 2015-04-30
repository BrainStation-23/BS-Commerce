'use strict';

angular.module('mean.shopAdmin').directive('tabCategoryProducts', ['Global', '$http',
    function (Global, $http) {
        return {
            replace: true,
            templateUrl: 'shopAdmin/views/category/template/tab-category-products.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);