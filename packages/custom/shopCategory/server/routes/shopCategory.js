'use strict';

var controller = require('../controllers/shopCategory');

module.exports = function(ShopCategory, app, auth, database) {
  app.route('/api/categories')
    .get(controller.list);

  app.route('/api/categories/:id')
    .get(controller.get);
};
