'use strict';

var brandController = require('../controllers/brand.controller');


module.exports = function(shopCatalog, app, auth, database, shopCore) {
    app.route('/api/brand')
        .get(brandController.getBrands)
        .post(brandController.createBrand);

    app.route('api/brand/:id')
        .get(brandController.getBrandById)
        .put(brandController.update)
        .delete(brandController.deleteBrandById);

};