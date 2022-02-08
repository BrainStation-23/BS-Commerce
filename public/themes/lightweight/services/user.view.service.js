'use strict';

angular.module('lightweight').factory('UserService', ['$resource',
    function($resource) {
        return {
            createGuestUser: function() {
                var createUser = $resource('/auth/user/guest', {}, {
                    'create': {method: 'POST'}
                });
                return createUser.create();
            },
            getUserById: function (userId) {
                var userById = $resource('/auth/user/:userId', {userId: '@userId'});
                return userById.get({userId: userId});
            },
            signInUser: function(userCredential) {
                var signIn = $resource('/auth/signin', {}, {
                    'post': {method: 'POST'}
                });
                return signIn.post(userCredential);
            },
            signInUserWithGuestUserItems: function(user) {
                var signIn = $resource('/auth/guest/to/user/signin', {}, {
                    'post': {method: 'POST'}
                });
                return signIn.post(user);
            },
            updateUser: function(user) {
                var updateUser = $resource('/auth/user/profile', {}, {
                    'update': {method: 'PUT'}
                });
                return updateUser.update(user);
            },
        };
    }
]);
