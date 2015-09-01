'use strict';

angular.module('mean.shopCatalog').directive('searchBox', ['Global', 'ShopCatalog','$http',
    function (Global, ShopCatalog, $http) {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: '/shopCatalog/views/search-box.html',
            link: function (scope, element, attrs) {
                scope.simpleSearch = function(){
                    console.log(scope.searchInput);
                    $http.get('/categories')
                };


            }
        };
    }
]);
