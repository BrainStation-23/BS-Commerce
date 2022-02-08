'use strict';

var should = require('should'),
	request = require('supertest'),
	app = require('../../server'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	ShopAdmin = mongoose.model('ShopAdmin'),
	agent = request.agent(app);

/**
 * Globals
 */
var credentials, user, shopAdmin;

/**
 * ShopAdmin routes tests
 */
describe('ShopAdmin CRUD tests', function() {
	beforeEach(function(done) {
		// Create user credentials
		credentials = {
			username: 'username',
			password: 'password'
		};

		// Create a new user
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: credentials.username,
			password: credentials.password,
			provider: 'local'
		});

		// Save a user to the test db and create new ShopAdmin
		user.save(function() {
			shopAdmin = {
				name: 'ShopAdmin Name'
			};

			done();
		});
	});

	it('should be able to save ShopAdmin instance if logged in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new ShopAdmin
				agent.post('/shopAdmins')
					.send(shopAdmin)
					.expect(200)
					.end(function(shopAdminSaveErr, shopAdminSaveRes) {
						// Handle ShopAdmin save error
						if (shopAdminSaveErr) done(shopAdminSaveErr);

						// Get a list of ShopAdmins
						agent.get('/shopAdmins')
							.end(function(shopAdminsGetErr, shopAdminsGetRes) {
								// Handle ShopAdmin save error
								if (shopAdminsGetErr) done(shopAdminsGetErr);

								// Get ShopAdmins list
								var shopAdmins = shopAdminsGetRes.body;

								// Set assertions
								(shopAdmins[0].user._id).should.equal(userId);
								(shopAdmins[0].name).should.match('ShopAdmin Name');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to save ShopAdmin instance if not logged in', function(done) {
		agent.post('/shopAdmins')
			.send(shopAdmin)
			.expect(401)
			.end(function(shopAdminSaveErr, shopAdminSaveRes) {
				// Call the assertion callback
				done(shopAdminSaveErr);
			});
	});

	it('should not be able to save ShopAdmin instance if no name is provided', function(done) {
		// Invalidate name field
		shopAdmin.name = '';

		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new ShopAdmin
				agent.post('/shopAdmins')
					.send(shopAdmin)
					.expect(400)
					.end(function(shopAdminSaveErr, shopAdminSaveRes) {
						// Set message assertion
						(shopAdminSaveRes.body.message).should.match('Please fill ShopAdmin name');
						
						// Handle ShopAdmin save error
						done(shopAdminSaveErr);
					});
			});
	});

	it('should be able to update ShopAdmin instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new ShopAdmin
				agent.post('/shopAdmins')
					.send(shopAdmin)
					.expect(200)
					.end(function(shopAdminSaveErr, shopAdminSaveRes) {
						// Handle ShopAdmin save error
						if (shopAdminSaveErr) done(shopAdminSaveErr);

						// Update ShopAdmin name
						shopAdmin.name = 'WHY YOU GOTTA BE SO MEAN?';

						// Update existing ShopAdmin
						agent.put('/shopAdmins/' + shopAdminSaveRes.body._id)
							.send(shopAdmin)
							.expect(200)
							.end(function(shopAdminUpdateErr, shopAdminUpdateRes) {
								// Handle ShopAdmin update error
								if (shopAdminUpdateErr) done(shopAdminUpdateErr);

								// Set assertions
								(shopAdminUpdateRes.body._id).should.equal(shopAdminSaveRes.body._id);
								(shopAdminUpdateRes.body.name).should.match('WHY YOU GOTTA BE SO MEAN?');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should be able to get a list of ShopAdmins if not signed in', function(done) {
		// Create new ShopAdmin model instance
		var shopAdminObj = new ShopAdmin(shopAdmin);

		// Save the ShopAdmin
		shopAdminObj.save(function() {
			// Request ShopAdmins
			request(app).get('/shopAdmins')
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Array.with.lengthOf(1);

					// Call the assertion callback
					done();
				});

		});
	});


	it('should be able to get a single ShopAdmin if not signed in', function(done) {
		// Create new ShopAdmin model instance
		var shopAdminObj = new ShopAdmin(shopAdmin);

		// Save the ShopAdmin
		shopAdminObj.save(function() {
			request(app).get('/shopAdmins/' + shopAdminObj._id)
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Object.with.property('name', shopAdmin.name);

					// Call the assertion callback
					done();
				});
		});
	});

	it('should be able to delete ShopAdmin instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new ShopAdmin
				agent.post('/shopAdmins')
					.send(shopAdmin)
					.expect(200)
					.end(function(shopAdminSaveErr, shopAdminSaveRes) {
						// Handle ShopAdmin save error
						if (shopAdminSaveErr) done(shopAdminSaveErr);

						// Delete existing ShopAdmin
						agent.delete('/shopAdmins/' + shopAdminSaveRes.body._id)
							.send(shopAdmin)
							.expect(200)
							.end(function(shopAdminDeleteErr, shopAdminDeleteRes) {
								// Handle ShopAdmin error error
								if (shopAdminDeleteErr) done(shopAdminDeleteErr);

								// Set assertions
								(shopAdminDeleteRes.body._id).should.equal(shopAdminSaveRes.body._id);

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to delete ShopAdmin instance if not signed in', function(done) {
		// Set ShopAdmin user
		shopAdmin.user = user;

		// Create new ShopAdmin model instance
		var shopAdminObj = new ShopAdmin(shopAdmin);

		// Save the ShopAdmin
		shopAdminObj.save(function() {
			// Try deleting ShopAdmin
			request(app).delete('/shopAdmins/' + shopAdminObj._id)
			.expect(401)
			.end(function(shopAdminDeleteErr, shopAdminDeleteRes) {
				// Set message assertion
				(shopAdminDeleteRes.body.message).should.match('User is not logged in');

				// Handle ShopAdmin error error
				done(shopAdminDeleteErr);
			});

		});
	});

	afterEach(function(done) {
		User.remove().exec();
		ShopAdmin.remove().exec();
		done();
	});
});
