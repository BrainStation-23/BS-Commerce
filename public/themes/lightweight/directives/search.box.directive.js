'use strict';

angular.module('lightweight').directive('searchBox', ['Global', '$http', '$location', '$state', '$stateParams',
    function (Global, $http, $location, $state, $stateParams) {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'themes/lightweight/views/search-box.html',
            link: function (scope, element, attrs) {
                scope.simpleSearch = function () {

                    $state.go('search', {q: scope.searchInput, limit: 6, page: 1});
                    scope.searchInput = '';
                };


            }
        };
    }
]);
