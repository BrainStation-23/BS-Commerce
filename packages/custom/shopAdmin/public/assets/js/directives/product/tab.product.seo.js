'use strict';

angular.module('mean.shopAdmin').directive('tabProductSeo', ['Global', '$http',
    function (Global, $http) {
        return {
            replace: true,
            templateUrl: 'shopAdmin/views/product/template/tab-product-seo.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);