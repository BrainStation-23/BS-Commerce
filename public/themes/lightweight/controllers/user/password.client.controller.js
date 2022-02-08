'use strict';

angular.module('lightweight').controller('PasswordController', ['$scope', '$stateParams', '$http', '$location', '$window', 'Global',
	function($scope, $stateParams, $http, $location, $window, Authentication) {
		$scope.authentication = Authentication;

		//If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		// Submit forgotten password account id
		$scope.askForPasswordReset = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/user/forgot', $scope.credentials).then(function(response) {
				// Show user success message and clear form
				$scope.credentials = null;
				$scope.success = response.data.message;

			},function(error) {
				// Show user error message and clear form
				$scope.credentials = null;
				$scope.error = error.data.message;
			});
		};

		// Change user password
		$scope.resetUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/user/reset/' + $stateParams.token, $scope.passwordDetails).then(function(response) {
				// If successful show success message and clear form
				$scope.passwordDetails = null;
				// Attach user profile
				Authentication.user = response.data;

				// And redirect to the index page
				$window.location.reload();
				$location.path('/password/reset/success');
			},function(error) {
				$scope.error = error.data.message;
			});
		};
	}
]);
