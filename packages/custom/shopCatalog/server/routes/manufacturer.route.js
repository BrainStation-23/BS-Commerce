'use strict';

var controller = require('../controllers/manufacturer.controller');

module.exports = function (shopCatalog, app, auth, database, shopCore) {
    app.route('/api/manufacturer')
        .get(controller.getManufacturers);
};


