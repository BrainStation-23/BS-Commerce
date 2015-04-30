'use strict';

angular.module('mean.shopAdmin').directive('paginatedTable', ['Global',
    function (Global) {
        return {
            replace: true,
            templateUrl: '/shopAdmin/views/paginated-table.html',
            link: function (scope, element, attrs) {

            }
        };
    }
]);



