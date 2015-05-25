'use strict';

angular.module('mean.shopAdmin').factory('userService', ['$http', '$resource',
  function($http, $resource) {

    return {
        searchUsers: function(roles, email, name){
            if(email === undefined)
                email='';
            if(name === undefined)
                name='';
            if(roles === undefined)
                roles='';
            var searchRequest = $resource('/auth/search/user', {}, {
                'get': {method: 'GET', isArray: true}
            });
            var searchResponse = searchRequest.get({roles: roles, email: email, name: name});
            return searchResponse;
        },
        getUserById: function(userId) {
            //var getUser = $resource('/auth/userById', {}, {
            //    'get': {method: 'GET', isArray: true}
            //});
            //var getResponse = getUser.get({userId: userId});
            //return getResponse;
            var userById = $resource('/auth/user/:userId', {userId:'@userId'});
            return userById.get({userId: userId});
        }
    };
  }
]);
