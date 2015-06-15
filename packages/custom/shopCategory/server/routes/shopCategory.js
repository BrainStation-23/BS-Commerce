'use strict';

var controller = require('../controllers/shopCategory');

module.exports = function (ShopCategory, app, auth, database, shopCore) {
    app.route('/api/categories')
        .get(controller.list);

    app.route('/api/categories/:id([A-Za-z0-9]{24})')
        .get(controller.getById);

    app.route('/api/categories/:id([A-Za-z0-9]{24})')
        .delete(controller.deleteById);

    app.route('/api/categories/:slug')
        .get(controller.getBySlug);

    app.route('/api/categories')
        .post(function (req, res) {
            console.log(req.files);
            console.log(req.files.file);
            shopCore.media.create(req.files.file)
                .then(function (file) {
                    console.log(req.body.cat);
                    controller.addCategory(JSON.parse(req.body.cat), file._id);
                    return res.status(200).json(file);
                },function () {
                    console.log(req.body.cat);
                    controller.addCategory(JSON.parse(req.body.cat));
                    return res.status(200);
                })
                .catch(function (error) {
                    console.log(error);
                    return res.status(500).json({error: error});
                })
                .done();
        });

};


