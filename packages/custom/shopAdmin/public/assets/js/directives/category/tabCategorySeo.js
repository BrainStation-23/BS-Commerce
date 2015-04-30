'use strict';

angular.module('mean.shopAdmin').directive('tabCategorySeo', ['Global', '$http',
    function (Global, $http) {
        return {
            replace: true,
            templateUrl: 'shopAdmin/views/category/template/tab-category-seo.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);