'use strict';

angular.module('mean.shopCatalog').directive('searchBox', ['Global', 'ShopCatalog', '$http', '$location', '$state', '$stateParams',
    function (Global, ShopCatalog, $http, $location, $state, $stateParams) {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: '/shopCatalog/views/search-box.html',
            link: function (scope, element, attrs) {
                scope.simpleSearch = function () {

                    $state.go('search', {q: scope.searchInput, limit: 6, page: 1});
                    scope.searchInput = '';
                };


            }
        };
    }
]);
