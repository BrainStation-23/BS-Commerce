'use strict';

var mean = require('meanio');
module.exports = function(ShopThemes, app, auth, database) {
    // Home route
    var index = require('../controllers/index');
    app.route('/')
        .get(index.render);


    app.get('/*',function(req,res,next){
        res.header('workerID' , JSON.stringify(mean.options.workerid) );
        next(); // http://expressjs.com/guide.html#passing-route control
    });
};

/*'use strict';

*//* jshint -W098 *//*
// The Package is past automatically as first parameter
module.exports = function(ShopThemes, app, auth, database) {

  app.get('/shopThemes/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/shopThemes/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/shopThemes/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/shopThemes/example/render', function(req, res, next) {
    ShopThemes.render('index', {
      package: 'shopThemes'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};*/
