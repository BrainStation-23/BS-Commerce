'use strict';

angular.module('shopAdmin').directive('tabProductPictures', ['Global', '$http',
    function (Global, $http) {
        return {
            restrict:'AE',
            replace: true,
            templateUrl: 'modules/shopAdmin/views/product/template/tab-product-pictures.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);
