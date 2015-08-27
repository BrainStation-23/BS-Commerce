'use strict';

var settingsController = require('../controllers/settingsController');

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(ShopSettings, app, auth, database) {

  app.route('/api/settings')
      .get(settingsController.getSettings)
      .post(settingsController.createSettings)
      .put(settingsController.updateSettings);

  app.route('/api/settings/emails')
      .get(auth.requiresAdmin, settingsController.getEmailSettings);

  app.route('/api/settings/emails/send')
      .post(settingsController.testEmailSettingsBySendEmail);

  //app.get('/api/shopSettings/example/anyone', function(req, res, next) {
  //  res.send('Anyone can access this');
  //});
  //
  //app.get('/api/shopSettings/example/auth', auth.requiresLogin, function(req, res, next) {
  //  res.send('Only authenticated users can access this');
  //});
  //
  //app.get('/api/shopSettings/example/admin', auth.requiresAdmin, function(req, res, next) {
  //  res.send('Only users with Admin role can access this');
  //});
  //
  //app.get('/api/shopSettings/example/render', function(req, res, next) {
  //  ShopSettings.render('index', {
  //    package: 'shopSettings'
  //  }, function(err, html) {
  //    //Rendering a view from the Package server/views
  //    res.send(html);
  //  });
  //});
};
