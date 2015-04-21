'use strict';

angular.module('mean.shopAdmin').directive('tabCategoryAcl', ['Global', '$http',
    function (Global, $http) {
        return {
            replace: true,
            templateUrl: 'shopAdmin/views/category/template/tab-category-acl.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);