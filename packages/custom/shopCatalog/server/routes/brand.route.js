'use strict';

var brandController = require('../controllers/brand.controller');


module.exports = function(shopCatalog, app, auth, database, shopCore) {
    app.route('/api/brands')
        .get(brandController.getBrands)
        .post(brandController.createBrand);

    app.route('/api/brands/:id')
        .get(brandController.getBrandById)
        .put(brandController.update)
        .delete(brandController.deleteBrandById);

    app.route('/api/brands/count')
        .get(brandController.getCount);

};