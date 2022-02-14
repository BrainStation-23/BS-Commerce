'use strict';

angular.module('shopAdmin').directive('tabCategoryInfo', ['Global', '$http',
    function (Global, $http) {
        return {
            restrict:'AE',
            replace: true,
            templateUrl: 'modules/shopAdmin/views/category/template/tab-category-info.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);
