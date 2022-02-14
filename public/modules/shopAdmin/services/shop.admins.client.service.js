'use strict';

//ShopAdmins service used to communicate ShopAdmins REST endpoints
angular.module('shopAdmin').factory('ShopAdmins', ['$resource',
	function($resource) {
		return {
			adminHomePage: function() {
				console.log('get call');
				var loadIndex = $resource('/admin', {}, {
					get: {
						method: 'GET'
					}
				});
				return 'name';
			}
		};
	}
]);
