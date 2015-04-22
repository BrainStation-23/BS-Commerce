'use strict';


angular.module('mean.shopAdmin').directive('questionMark', ['Global', '$http', '$state',
    function (Global, $http, $state) {
        return {
            replace: true,
            template: '<span class="glyphicon glyphicon-question-sign"></span>',
            link: function (scope, element, attrs) {


            }

        };
    }
]);


