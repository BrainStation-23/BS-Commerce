'use strict';

angular.module('shopAdmin').directive('tabCategorySeo', ['Global', '$http',
    function (Global, $http) {
        return {
            restrict:'AE',
            replace: true,
            templateUrl: 'modules/shopAdmin/views/category/template/tab-category-seo.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);
