'use strict';

var compareController = require('../controllers/compare.server.controller');

module.exports = function(app) {
    app.route('/api/compare')
        .post(compareController.addToCompare)
        .get(compareController.getCompare)
        .delete(compareController.deleteCompareById);

    app.route('/api/compare/:compareId')
        .get(compareController.getCompareById);

    app.route('/api/compare/item')
        .delete(compareController.deleteCompareItem);

    app.route('/api/compare/allitems')
        .delete(compareController.deleteAllCompareItems);
};
