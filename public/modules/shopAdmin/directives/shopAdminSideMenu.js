'use strict';

angular.module('shopAdmin').directive('shopAdminSideMenu', [
    function() {
        return{
            restrict: 'AE',
            replace: true,
            templateUrl: 'modules/shopAdmin/views/layout/side-menu.html',
            link: function(scope, element, attrs){
                element.find('#side-menu').metisMenu();
            }
        };
    }
]);
