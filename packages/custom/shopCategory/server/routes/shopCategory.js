'use strict';

var controller = require('../controllers/shopCategory');

module.exports = function (ShopCategory, app, auth, database, shopCore) {
    app.route('/api/categories')
        .get(controller.list);

    app.route('/api/categories/:id([A-Za-z0-9]{24})')
        .get(controller.getById);

    app.route('/api/categories/:slug')
        .get(controller.getBySlug);

    app.route('/api/categories')
        .post(function (req, res) {
            shopCore.media.create(req.files.file)
                .then(function (file) {
                    console.log(file);
                    return res.status(200).json(file);
                })
                .catch(function (error) {
                    return res.status(500).json({error: error});
                })
                .done();
        });
};
