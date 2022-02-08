'use strict';

angular.module('shopAdmin').factory('userService', ['$http', '$resource',
  function($http, $resource) {

    return {
        searchUsers: function(searchQuery){
            var searchRequest = $resource('/auth/search/user', {}, {
                'get': {method: 'GET'}
            });
            return searchRequest.get(searchQuery);
        },
        getUserById: function(userId) {
            var userById = $resource('/auth/user/:userId', {userId:'@userId'});
            return userById.get({userId: userId});
        },
        changeUserPassword: function(userId, password) {
            var changePassword = $resource('/auth/user/changePassword', {}, {
                'update': {method: 'PUT'}
            });
            return changePassword.update({userId: userId, password: password});
        },
        updateUserInfo: function(user) {
            var updateUser = $resource('/auth/user/update', {}, {
               'update': {method: 'PUT'}
            });
            return updateUser.update(user);
        },
        deleteUserById: function(userId) {
            var deleteUser = $resource('/auth/user/delete', {userId: '@userId'}, {
                'delete': {method: 'DELETE'}
            });
            return deleteUser.delete({userId: userId});
        },
        createUser: function(user) {
            var addUser = $resource('/auth/user/create', {}, {
                'create': {method: 'POST'}
            });
            return addUser.create(user);
        },

        userLogin: function(email, password, rememberMe) {
            var loginUser = $resource('/auth/login', {}, {
               'login': {method: 'POST'}
            });

            return loginUser.login({email: email, password: password, rememberMe: rememberMe});
        },

        userLogout: function() {
            var logoutUser = $resource('/auth/logout', {}, {
                'logout': {method: 'GET'}
            });

            return logoutUser.logout({});
        },

        getUserStatistics: function() {
            var getUserStatistics = $resource('/auth/users/statistics', {}, {
                'get': {method: 'GET', isArray: true}
            });
            return getUserStatistics.get({});
        }
    };
  }
]);
