'use strict';

angular.module('mean.shopAdmin').directive('tabBrandSeo', ['Global', '$http',
    function (Global, $http) {
        return {
            replace: true,
            templateUrl: 'shopAdmin/views/brand/template/tab-brand-seo.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);