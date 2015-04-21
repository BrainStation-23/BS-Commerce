'use strict';


angular.module('mean.shopAdmin').directive('shopAdminCategoryTabMenu', ['Global', '$http',
    function (Global, $http) {
        return {
            replace: true,
            templateUrl: 'shopAdmin/views/category/category-tab.html',
            link: function (scope, element, attrs) {


                scope.tabs = [
                    { title:'Dynamic Title 1', content:'Dynamic content 1' },
                    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
                ];

                 scope.alertMe = function() {
                    setTimeout(function() {
                        //$window.alert('You\'ve selected the alert tab!');
                    });
                };

            }

        };
    }
]);




