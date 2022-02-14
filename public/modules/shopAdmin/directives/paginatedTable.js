'use strict';

angular.module('shopAdmin').directive('paginatedTable', ['Global',
    function (Global) {
        return {
            restrict:'AE',
            replace: true,
            templateUrl: 'modules/shopAdmin/views/paginated-table.html',
            link: function (scope, element, attrs) {

            }
        };
    }
]);



