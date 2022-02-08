'use strict';

var controller = require('../controllers/product.server.controller');
var mediaService = require('../services/media.server.service'),
    multer = require('multer'),
    storage = multer.memoryStorage(),
    upload = multer({ storage: storage });

module.exports = function (app) {

    app.route('/api/products/:id([A-Za-z0-9]{24})')
        .get(controller.getById)
        .delete(controller.delete);

    app.route('/api/products/count')
        .get(controller.getCount);

    app.route('/api/products')
        .get(controller.list)
        .post(controller.create)
        .put(controller.update);

    app.route('/api/products/:sku')
        .get(controller.getBySKU);

    app.route('/api/photos')
        .post(function (req, res) {
            mediaService.create(req.files.upload)
                .then(function (file) {
                    return res.status(200).json(file);
                })
                .catch(function (error) {
                    return res.status(400).json({error: error});
                })
                .done();
        });

    app.route('/api/products/:productId/photos')
        .post(upload.single('file'), controller.addProductPhoto);

    app.route('/api/products/photos/:id')
        .get(function (req, res) {
            mediaService.get(req.params.id)
                .then(function (stream) {
                    stream.pipe(res);
                    return res.status(200);
                })
                .catch(function (error) {
                    return res.status(400).json({error: error});
                })
                .done();
        });

    app.route('/api/products/:productId/photos/:photoId')
        .delete(controller.deleteProductPhoto);

    app.route('/api/productsByCondition')
        .get(controller.getProductByCondition);

    app.route('/api/products/addBrandToProduct')
        .put(controller.updateProductsForBrand);

    app.route('/api/products/brand/:brandId')
        .get(controller.getProductsByBrand);


};
