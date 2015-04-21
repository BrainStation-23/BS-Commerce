'use strict';

angular.module('mean.shopAdmin').directive('tabCategoryInfo', ['Global', '$http',
    function (Global, $http) {
        return {
            replace: true,
            templateUrl: 'shopAdmin/views/category/template/tab-category-info.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);