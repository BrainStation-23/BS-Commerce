'use strict';

angular.module('mean.shopAdmin').directive('tabCategoryPictures', ['Global', '$http',
    function (Global, $http) {
        return {
            replace: true,
            templateUrl: 'shopAdmin/views/category/template/tab-category-pictures.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);