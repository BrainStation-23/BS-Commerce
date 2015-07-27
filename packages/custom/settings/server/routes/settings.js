'use strict';

var settingsController = require('../controllers/settingsController');

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Settings, app, auth, database) {

  app.route('/api/settings')
      .get(settingsController.getSettings)
      .post(settingsController.createSettings)
      .put(settingsController.updateSettings);

  app.route('/api/settings/emails')
      .get(auth.requiresAdmin, settingsController.getSettings);

  //app.get('/api/settings/example/anyone', function(req, res, next) {
  //  res.send('Anyone can access this');
  //});

  //app.get('/api/settings/example/auth', auth.requiresLogin, function(req, res, next) {
  //  res.send('Only authenticated users can access this');
  //});
  //
  //app.get('/api/settings/example/admin', auth.requiresAdmin, function(req, res, next) {
  //  res.send('Only users with Admin role can access this');
  //});

  //app.get('/api/settings/example/render', function(req, res, next) {
  //  Settings.render('index', {
  //    package: 'settings'
  //  }, function(err, html) {
  //    //Rendering a view from the Package server/views
  //    res.send(html);
  //  });
  //});
};
