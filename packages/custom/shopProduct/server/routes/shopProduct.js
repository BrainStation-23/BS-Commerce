'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(ShopProduct, app, auth, database) {

  app.get('/shopProduct/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/shopProduct/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/shopProduct/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/shopProduct/example/render', function(req, res, next) {
    ShopProduct.render('index', {
      package: 'shopProduct'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
