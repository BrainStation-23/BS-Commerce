'use strict';

angular.module('shopAdmin').directive('tabCategoryAcl', ['Global', '$http',
    function (Global, $http) {
        return {
            restrict:'AE',
            replace: true,
            templateUrl: 'modules/shopAdmin/views/category/template/tab-category-acl.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);
