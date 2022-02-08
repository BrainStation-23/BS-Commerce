'use strict';

angular.module('shopAdmin').directive('tabCategoryStores', ['Global', '$http',
    function (Global, $http) {
        return {
            restrict:'AE',
            replace: true,
            templateUrl: 'modules/shopAdmin/views/category/template/tab-category-stores.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);
