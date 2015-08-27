'use strict';


angular.module('mean.shopAdmin').directive('questionMark', ['Global', '$http', '$state',
    function (Global, $http, $state) {
        return {
            replace: true,
            template: '<span class="bs-fa-color"><i class="fa fa-question-circle fa-fw"></i></span> ',
            link: function (scope, element, attrs) {


            }

        };
    }
]);


