'use strict';

angular.module('shopAdmin').directive('tabBrandSeo', ['Global', '$http',
    function (Global, $http) {
        return {
            restrict:'AE',
            replace: true,
            templateUrl: 'modules/shopAdmin/views/brand/template/tab-brand-seo.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);
