'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Shopweb, app, auth, database) {

  app.get('/shopWeb/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/shopWeb/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/shopWeb/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/shopWeb/example/render', function(req, res, next) {
    Shopweb.render('index', {
      package: 'shopWeb'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
