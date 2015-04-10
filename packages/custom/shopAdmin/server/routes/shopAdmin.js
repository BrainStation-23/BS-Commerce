'use strict';

module.exports = function(ShopAdmin, app, auth, database) {
    // Home route
    var homeController = require('../controllers/index');
    app.route('/admin')
        .get(homeController.render);
};