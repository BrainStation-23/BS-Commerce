'use strict';

angular.module('mean.shopAdmin').directive('tabProductPictures', ['Global', '$http',
    function (Global, $http) {
        return {
            replace: true,
            templateUrl: 'shopAdmin/views/product/template/tab-product-pictures.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);