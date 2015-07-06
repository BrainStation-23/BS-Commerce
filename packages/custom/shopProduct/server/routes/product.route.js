'use strict';

var controller = require('../controllers/shopProduct');

module.exports = function (ShopProduct, app, auth, database, shopCore) {
    //
    app.route('/api/products/:id([A-Za-z0-9]{24})')
        .get(controller.getById);

    app.route('/api/products')
        .get(controller.list);

    app.route('/api/products/:sku')
        .get(controller.getBySKU);

    app.route('/api/photos')
        .post(function (req, res) {
            shopCore.media.create(req.files.upload)
                .then(function (file) {
                    return res.status(200).json(file);
                })
                .catch(function (error) {
                    return res.status(500).json({error: error});
                })
                .done();
        });
    app.route('/api/products/photos')
        .post(function (req, res) {
            shopCore.media.create(req.files.file)
                .then(function (file) {
                    return res.status(200).json(file);
                })
                .catch(function (error) {
                    return res.status(500).json({error: error});
                })
                .done();
        });
    app.route('/api/products/photos/:id')
        .get(function (req, res) {
            /*var stream = shopCore.media.get(req.params.id);
            stream.pipe(res);
            return res.status(200);*/

            shopCore.media.get(req.params.id)
                .then(function (stream) {
                    stream.pipe(res);
                    return res.status(200);
                })
                .catch(function (error) {
                    console.log(error);
                    return res.status(500).json({error: error});
                })
                .done();
        })
        .delete(function (req, res) {
            shopCore.media.delete(req.params.id)
                .then(function () {
                    return res.status(200).json({msg: 'Deleted successfully!'});
                })
                .catch(function (error) {
                    return res.status(500).json({error: error});
                })
                .done();
        });

    app.route('/api/products/:id')
        .post(function(req, res){
            controller.create(req, res);
        })
        .put(function(req, res){
            controller.update(req, res);
        });

};
