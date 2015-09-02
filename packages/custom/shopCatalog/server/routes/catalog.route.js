'use strict';

var controller = require('../controllers/catalog.controller');

module.exports = function (shopCatalog, app, auth, database, shopCore) {
    app.route('/api/search').get(controller.searchList);
};