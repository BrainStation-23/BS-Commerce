'use strict';

var controller = require('../controllers/category.server.controller'),
    mediaService = require('../services/media.server.service'),
    multer = require('multer'),
    storage = multer.memoryStorage(),
    upload = multer({ storage: storage });

module.exports = function (app) {
    app.route('/api/categories')
        .get(controller.list)
        .put(controller.update);

    app.route('/api/categories/:id([A-Za-z0-9]{24})')
        .get(controller.getById)
        .delete(controller.deleteById);

    app.route('/api/categories/:slug')
        .get(controller.getBySlug);

    app.route('/api/categories/imageId/:id')
        .get(function (req, res) {
            var stream = mediaService.get(req.params.id);
            stream.pipe(res);
            return res.status(200);
        });

    app.route('/api/categories')
        .post(upload.single('file'), controller.addCategory);

};


