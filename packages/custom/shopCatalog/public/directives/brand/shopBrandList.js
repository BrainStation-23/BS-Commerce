'use strict';

angular.module('mean.shopCatalog').directive('shopBrandList', ['Global', 'ShopCatalog', '$http',
    function (Global, ShopCatalog, $http) {
        return {
            replace: true,
            templateUrl: '/shopCatalog/views/brand/shop-brand-list.html',
            link: function (scope, element, attrs) {
                scope.brands = [];
                $http.get('/api/brands')
                    .success(function (data, status, headers, config) {
                        //console.log(data);
                        scope.brands = data.brands;
                    })
                    .error(function (data, status, headers, config) {

                    });
            }
        };
    }
]);
