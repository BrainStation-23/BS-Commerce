'use strict';

var controller = require('../controllers/shopCategory');

module.exports = function(ShopCategory, app, auth, database) {
  app.route('/categories')
    .get(controller.list);

  app.get('/shopCategory/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/shopCategory/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/shopCategory/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/shopCategory/example/render', function(req, res, next) {
    ShopCategory.render('index', {
      package: 'shopCategory'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
