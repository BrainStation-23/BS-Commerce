'use strict';

// Config HTTP Error Handling
angular.module('shopAdmin').config(['$httpProvider',
    function($httpProvider) {
        // Set the httpProvider "not authorized" interceptor
        $httpProvider.interceptors.push(['$q', '$location', 'Global', '$rootScope',
            function($q, $location, Global, $rootScope) {
                //console.log('Global data = ',Global.isAdmin);
                if(!Global.user || !Global.isAdmin) {
                    $location.path('signin');
                }
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

                    responseError: function(rejection) {
                        $rootScope.isBusy = false;
                        switch (rejection.status) {
                            case 401:
                                // Deauthenticate the global user
                                Global.user = null;

                                // Redirect to signin page
                                $location.path('signin');
                                break;
                            case 403:
                                // Add unauthorized behaviour
                                break;
                        }

                        return $q.reject(rejection);
                    }
                };
            }
        ]);
    }
]).run(['$rootScope', '$state', 'Global', function ($rootScope, $state, Global) {
    $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams) {
            if (!Global.isAdmin && toState.name !== 'signin' && toState.name !== 'signup' && toState.name !== 'logout') {
                event.preventDefault();
                $state.go('signin');
            }
        });

    $rootScope.$on('signin', function (event, user) {
        Global.user = user;
        if (Global.user && Global.user.roles) {
            Global.authenticated = Global.user.roles.length;
            Global.isAdmin = Global.user.roles.indexOf('admin') !== -1;
        }
    });
}]);
