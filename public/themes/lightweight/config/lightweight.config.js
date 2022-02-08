'use strict';

angular.module('lightweight').config(['$httpProvider',
    function($httpProvider) {
        $httpProvider.interceptors.push(['$q', '$location','$rootScope',
            function($q, $location, $rootScope) {
                return {
                    'request': function(config) {
                        // do something on success
                        $rootScope.isBusy = true;
                        return config;
                    },

                    // optional method
                    'requestError': function(rejection) {
                        // do something on error
                        $rootScope.isBusy = false;
                        return $q.reject(rejection);
                    },



                    // optional method
                    'response': function(response) {
                        // do something on success
                        $rootScope.isBusy = false;
                        return response;
                    },

                    // optional method
                    'responseError': function(rejection) {
                        // do something on error
                        $rootScope.isBusy = false;
                        return $q.reject(rejection);
                    }

                    //responseError: function(rejection) {
                    //
                    //    return $q.reject(rejection);
                    //}
                };
            }
        ]);
    }
]);
