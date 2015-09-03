'use strict';

angular.module('mean.shopCatalog').directive('searchBox', ['Global', 'ShopCatalog', '$http','$location', '$state','$stateParams',
    function (Global, ShopCatalog, $http, $location, $state, $stateParams) {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: '/shopCatalog/views/search-box.html',
            link: function (scope, element, attrs) {
                scope.simpleSearch = function () {
                    console.log($state);
                    //scope.$apply(function () {
                    //$location.path('/search?q=' + scope.searchInput);
                    $state.go('search',{q: scope.searchInput});
                    //});
                    /*$http.get('/api/search?q=' + scope.searchInput)
                     .then(function (response) {
                     console.log(response.data);
                     }, function (error) {
                     console.log(error);
                     });*/
                };


            }
        };
    }
]);
