'use strict';

angular.module('mean.shopCatalog').directive('searchBox', ['Global', 'ShopCatalog',
    function (Global, ShopCatalog) {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: '/shopCatalog/views/search-box.html',
            link: function (scope, element, attrs) {
                scope.simpleSearch = function(){
                    console.log(scope.searchInput);
                };


            }
        };
    }
]);
