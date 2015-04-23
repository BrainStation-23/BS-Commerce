'use strict';

var controller = require('../controllers/shopCategory');

module.exports = function(ShopCategory, app, auth, database) {
  app.route('/api/categories')
    .get(controller.list);

  app.route('/api/categories/:id([A-Za-z0-9]{24})')
    .get(controller.getById);

  app.route('/api/categories/:slug')
    .get(controller.getBySlug);
};
