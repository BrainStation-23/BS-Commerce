'use strict';

angular.module('mean.shopAdmin').directive('tabCategoryStores', ['Global', '$http',
    function (Global, $http) {
        return {
            replace: true,
            templateUrl: 'shopAdmin/views/category/template/tab-category-stores.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);