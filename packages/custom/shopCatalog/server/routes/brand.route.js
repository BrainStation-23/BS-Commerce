'use strict';

var brandController = require('../controllers/brand.controller');


module.exports = function(shopCatalog, app, auth, database, shopCore) {
    app.route('/api/brands')
        .get(brandController.getBrands)
        .post(brandController.createBrand)
        .put(brandController.updateBrand);

    app.route('/api/brands/:brandId')
        .get(brandController.getBrandById)
        .delete(brandController.deleteBrandById);
};