'use strict';

var controller = require('../controllers/catalog.server.controller');

module.exports = function (app) {
    app.route('/api/search').get(controller.searchList);
};
