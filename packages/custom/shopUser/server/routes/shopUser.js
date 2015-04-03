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
};
