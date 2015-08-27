'use strict';

angular.module('mean.shopAdmin').directive('tabBrandStores', ['Global', '$http',
    function (Global, $http) {
        return {
            replace: true,
            templateUrl: 'shopAdmin/views/brand/template/tab-brand-stores.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);