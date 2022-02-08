'use strict';

var settingsController = require('../controllers/settings.server.controller');
var auth = require('../../app/controllers/users.server.controller');

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(app) {

  app.route('/api/settings')
      .get(settingsController.getSettings)
      .post(settingsController.createSettings)
      .put(settingsController.updateSettings);

  app.route('/api/settings/emails')
      .get(auth.requiresAdmin, settingsController.getEmailSettings);

  app.route('/api/settings/emails/send')
      .post(settingsController.testEmailSettingsBySendEmail);

};
