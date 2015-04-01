'use strict';

var shopUser = require('../controllers/shopUser');

require('meanio').loadConfig();

module.exports = function(ShopUser, app, auth, database) {
  // Setting up the users api
  app.route('/auth/register')
    .post(shopUser.create);

  app.get('/shopuser/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/shopuser/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/shopuser/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/shopuser/example/render', function(req, res, next) {
    ShopUser.render('index', {
      package: 'shopuser'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
