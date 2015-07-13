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
                        scope.brands = data;
                    })
                    .error(function (data, status, headers, config) {

                    });

                /*<li><a href="#"> <span class="pull-right">(50)</span>Acne</a></li>
                 <li><a href="#"> <span class="pull-right">(56)</span>Grüne Erde</a></li>
                 <li><a href="#"> <span class="pull-right">(27)</span>Albiro</a></li>
                 <li><a href="#"> <span class="pull-right">(32)</span>Ronhill</a></li>
                 <li><a href="#"> <span class="pull-right">(5)</span>Oddmolly</a></li>
                 <li><a href="#"> <span class="pull-right">(9)</span>Boudestijn</a></li>
                 <li><a href="#"> <span class="pull-right">(4)</span>Rösch creative culture</a></li>*/
            }
        };
    }
]);
