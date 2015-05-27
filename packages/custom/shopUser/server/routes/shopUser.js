'use strict';

var shopUser = require('../controllers/shopUser');

require('meanio').loadConfig();

module.exports = function(ShopUser, app, auth, database, passport) {
  // Setting up the users api
  app.route('/auth/register')
    .post(shopUser.create);

  app.route('/auth/login')
    .post(
      function(req,res,next){
        req.body.email = req.body.email.toLowerCase();
        next();
      },
      passport.authenticate('local', {
        failureFlash: true
      }),
      shopUser.login);

  app.route('/auth/logout')
    .get(shopUser.logout);

  app.route('/auth/password')
    .put(shopUser.changePassword);

  app.route('/auth/resetForgotPassword')
      .put(shopUser.resetForgotPassword);

  app.route('/auth/profile')
    .put(shopUser.updateProfile);

  app.route('/auth/user/:userId')
      .get(shopUser.getUserById);

  app.route('/auth/search/user')
      .get(shopUser.searchUser);

  app.route('/auth/user/changePassword')
      .put(shopUser.changeUserPassword);

  app.route('/auth/user/update')
      .put(shopUser.updateUserInfo);

  app.route('/auth/user/delete')
      .delete(shopUser.removeUserById);

};
