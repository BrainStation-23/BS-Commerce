'use strict';

angular.module('lightweight').controller('SettingsController', ['$scope', '$http', '$location', 'UserService', 'Global',
	function($scope, $http, $location, UserService, Authentication) {
		$scope.user = Authentication.user;

		// If user is not signed in then redirect back home
		if (!$scope.user) $location.path('/');

		 //Update a user profile

		$scope.updateUerInfo = function() {
			console.log($scope.user);
			return UserService.updateUser($scope.user);
		};

		$scope.updateUserProfile = function(isValid) {
			if (isValid) {
				$scope.success = $scope.error = null;
				console.log($scope.user);
				$scope.updateUerInfo()
					.$promise
					.then(function(response) {
						console.log(response);
						$scope.success = true;
						Authentication.user = response;
					}, function(error) {
						$scope.error = error.msg;
					});
			} else {
				$scope.submitted = true;
			}
		};

		// Change user password
		$scope.changeUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/user/password', $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.passwordDetails = null;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
