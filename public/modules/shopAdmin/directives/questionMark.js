'use strict';


angular.module('shopAdmin').directive('questionMark', ['Global', '$http', '$state',
    function (Global, $http, $state) {
        return {
            restrict:'AE',
            replace: true,
            template: '<span class="bs-fa-color" tooltip-trigger tooltip-placement="top"><i class="fa fa-question-circle fa-fw"></i></span> ',
            link: function (scope, element, attrs) {


            }

        };
    }
]);


