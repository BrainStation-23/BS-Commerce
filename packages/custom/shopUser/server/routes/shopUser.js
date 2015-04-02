'use strict';

var shopUser = require('../controllers/shopUser');

require('meanio').loadConfig();

module.exports = function(ShopUser, app, auth, database, passport) {
  // Setting up the users api
  app.route('/auth/register')
    .post(shopUser.create);

  app.route('/auth/login')
    .post(passport.authenticate('local', {
      failureFlash: true
    }), function(req, res) {
      res.session.cookie.maxAge = req.body.rememberMe ? app.config.clean.shop.sessionCookie.maxAgeWhenRemembered  : null;
      res.send({
        user: req.user,
        redirect: (req.user.roles.indexOf('admin') !== -1) ? req.get('referer') : false
      });
    });
};
