'use strict';

(function() {
	// ShopAdmin Controller Spec
	describe('shopAdmin Controller Tests', function() {
		// Initialize global variables
		var ShopAdminsController,
		scope,
		$httpBackend,
		$stateParams,
		$location;

		// The $resource service augments the response object with methods for updating and deleting the resource.
		// If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
		// the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
		// When the toEqualData matcher compares two objects, it takes only object properties into
		// account and ignores methods.
		beforeEach(function() {
			jasmine.addMatchers({
				toEqualData: function(util, customEqualityTesters) {
					return {
						compare: function(actual, expected) {
							return {
								pass: angular.equals(actual, expected)
							};
						}
					};
				}
			});
		});

		// Then we can start by loading the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service but then attach it to a variable
		// with the same name as the service.
		beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {
			// Set a new global scope
			scope = $rootScope.$new();

			// Point global variables to injected services
			$stateParams = _$stateParams_;
			$httpBackend = _$httpBackend_;
			$location = _$location_;

			// Initialize the ShopAdmins controller.
			ShopAdminsController = $controller('shopAdminController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one shopAdmin object fetched from XHR', inject(function(ShopAdmins) {
			// Create sample ShopAdmin using the ShopAdmins service
			var sampleShopAdmin = new ShopAdmins({
				name: 'New shopAdmin'
			});

			// Create a sample ShopAdmins array that includes the new ShopAdmin
			var sampleShopAdmins = [sampleShopAdmin];

			// Set GET response
			$httpBackend.expectGET('shopAdmin').respond(sampleShopAdmins);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.shopAdmin).toEqualData(sampleShopAdmins);
		}));

		it('$scope.findOne() should create an array with one shopAdmin object fetched from XHR using a shopAdminId URL parameter', inject(function(ShopAdmin) {
			// Define a sample ShopAdmin object
			var sampleShopAdmin = new ShopAdmin({
				name: 'New shopAdmin'
			});

			// Set the URL parameter
			$stateParams.shopAdminId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/shopAdmin\/([0-9a-fA-F]{24})$/).respond(sampleShopAdmin);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.shopAdmin).toEqualData(sampleShopAdmin);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(ShopAdmin) {
			// Create a sample ShopAdmin object
			var sampleShopAdminPostData = new ShopAdmin({
				name: 'New shopAdmin'
			});

			// Create a sample ShopAdmin response
			var sampleShopAdminResponse = new ShopAdmin({
				_id: '525cf20451979dea2c000001',
				name: 'New shopAdmin'
			});

			// Fixture mock form input values
			scope.name = 'New shopAdmin';

			// Set POST response
			$httpBackend.expectPOST('shopAdmin', sampleShopAdminPostData).respond(sampleShopAdminResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the ShopAdmin was created
			expect($location.path()).toBe('/shopAdmin/' + sampleShopAdminResponse._id);
		}));

		it('$scope.update() should update a valid shopAdmin', inject(function(ShopAdmins) {
			// Define a sample ShopAdmin put data
			var sampleShopAdminPutData = new ShopAdmins({
				_id: '525cf20451979dea2c000001',
				name: 'New shopAdmin'
			});

			// Mock ShopAdmin in scope
			scope.shopAdmin = sampleShopAdminPutData;

			// Set PUT response
			$httpBackend.expectPUT(/shopAdmins\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/shopAdmin/' + sampleShopAdminPutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid shopAdminId and remove the ShopAdmin from the scope', inject(function(ShopAdmins) {
			// Create new ShopAdmin object
			var sampleShopAdmin = new ShopAdmins({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new ShopAdmins array and include the ShopAdmin
			scope.shopAdmins = [sampleShopAdmin];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/shopAdmin\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleShopAdmin);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.shopAdmins.length).toBe(0);
		}));
	});
}());
