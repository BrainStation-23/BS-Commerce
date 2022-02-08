'use strict';

var extensionUserController = require('../controllers/user.extension.server.controller'),
    exUserPasswordController = require('../controllers/userExtension/password.server.controller'),
    exUserAuthenticationController = require('../controllers/userExtension/authentication.server.controller'),
    exUserProfileController = require('../controllers/userExtension/profile.server.controller');


module.exports = function(app) {

  app.route('/auth/user/:userId')
      .get(extensionUserController.getUserById);

  app.route('/auth/search/user')
      .get(extensionUserController.searchUser);

  app.route('/auth/user/changePassword')
      .put(extensionUserController.changeUserPassword);

  app.route('/auth/user/update')
      .put(extensionUserController.updateUserInfo);

  app.route('/auth/user/delete')
      .delete(extensionUserController.removeUserById);

  app.route('/auth/user/create')
      .post(extensionUserController.createUser);

  app.route('/auth/users/statistics')
      .get(extensionUserController.getUserStatistics);

  app.route('/auth/user/guest')
      .post(extensionUserController.createGuestUser);
  
  app.route('/auth/guest/to/user/signin')
      .post(extensionUserController.signInUserWithGuestUserItems);

  // Setting up the users password api
  app.route('/auth/user/password')
      .post(exUserPasswordController.changePassword);
  app.route('/auth/user/forgot')
      .post(exUserPasswordController.forgot);
  app.route('/auth/user/reset/:token')
      .get(exUserPasswordController.validateResetToken);
  app.route('/auth/user/reset/:token')
      .post(exUserPasswordController.reset);

  // Setting up the users authentication api
  app.route('/auth/user/signup')
      .post(exUserAuthenticationController.signup);
  app.route('/auth/user/signin')
      .post(exUserAuthenticationController.signin);
  app.route('/auth/user/signout')
      .get(exUserAuthenticationController.signout);

  // Setting up the users profile api
  app.route('/auth/users/me')
      .get(exUserProfileController.me);
  app.route('/auth/user/profile')
      .put(exUserProfileController.updateProfile);
  app.route('/auth/users/accounts')
      .delete(exUserAuthenticationController.removeOAuthProvider);

};
