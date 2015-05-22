'use strict';

angular.module('mean.shopAdmin').factory('shopAdminService', ['$http', '$resource',
  function($http, $resource) {

    return {
        searchCustomers: function(roles, email, name){
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
        getCustomers: function() {
            var getCustomers = $resource('/auth/user', {}, {
                'get': {method: 'GET', isArray: true}
            });
            var getResponse = getCustomers.get({});
            return getResponse;
        }
    };
  }
]);
