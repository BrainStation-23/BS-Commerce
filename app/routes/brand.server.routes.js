'use strict';

var brandController = require('../controllers/brand.server.controller');


module.exports = function(app) {
    app.route('/api/brands')
        .get(brandController.getBrands)
        .post(brandController.createBrand)
        .put(brandController.updateBrand);

    app.route('/api/brands/:brandId')
        .get(brandController.getBrandById)
        .delete(brandController.deleteBrandById);
};
