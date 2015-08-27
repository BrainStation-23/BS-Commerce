'use strict';

angular.module('mean.shopAdmin').config(['$viewPathProvider', '$meanStateProvider',
    function ($viewPathProvider, $meanStateProvider) {
        $viewPathProvider.override('system/views/index.html', '/shopAdmin/views/index.html');

        $meanStateProvider
            .state('auth', {
                abstract: true,
                url: '/auth',
                template: '<ui-view/>'
            })
            .state('auth.login', {
                url: '/login',
                templateUrl: 'shopAdmin/views/anonymous.html',
                controller: 'loginController'
            })
            .state('auth.register', {
                url: '/register',
                templateUrl: 'shopAdmin/views/anonymous.html',
                controller: 'registrationController'
            })
            .state('dashboard',{
                url: '/',
                templateUrl: 'shopAdmin/views/index.html',
                controller: 'dashboardController'
            });
    }
]).run(['$rootScope', '$state', 'Global', function ($rootScope, $state, Global) {
    $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams) {
            if (!Global.isAdmin && toState.name !== 'auth.login' && toState.name !== 'auth.register' && toState.name !== 'auth.logout') {
                event.preventDefault();
                $state.go('auth.login');
            }
        });

    $rootScope.$on('loggedin', function (event, user) {
        Global.user = user;
        if (Global.user && Global.user.roles) {
            Global.authenticated = Global.user.roles.length;
            Global.isAdmin = Global.user.roles.indexOf('admin') !== -1;
        }
    });
}]);
