'use strict';

angular.module('mean.shopAdmin').directive('shopAdminSideMenu', ['Global',
    function(Global) {
        return{
            replace: true,
            templateUrl: '/shopAdmin/views/side-menu.html',
            link: function(scope, element, attrs){
                element.find('#side-menu').metisMenu();
            }
        };
    }
]);
