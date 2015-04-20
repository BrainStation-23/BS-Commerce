'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(ShopMedia, app, auth, database) {

  app.get('/shopMedia/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/shopMedia/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/shopMedia/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/shopMedia/example/render', function(req, res, next) {
    ShopMedia.render('index', {
      package: 'shopMedia'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
