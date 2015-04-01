'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(ShopSlider, app, auth, database) {

  app.get('/shopSlider/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/shopSlider/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/shopSlider/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/shopSlider/example/render', function(req, res, next) {
    ShopSlider.render('index', {
      package: 'shopSlider'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
