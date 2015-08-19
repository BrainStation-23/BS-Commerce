'use strict';

var controller = require('../controllers/category.controller');

module.exports = function (shopCatalog, app, auth, database, shopCore) {
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
            var stream = shopCore.media.get(req.params.id);
            stream.pipe(res);
            return res.status(200);
        });

    app.route('/api/categories')
        .post(function (req, res) {
            if(req.files.file){
                shopCore.media.create(req.files.file)
                    .then(function (file) {
                        controller.addCategory(JSON.parse(req.body.category), file._id);
                        return res.status(200).json(file);
                    },function () {
                        controller.addCategory(JSON.parse(req.body.category));
                        return res.status(200);
                    })
                    .catch(function (error) {
                        return res.status(500).json({error: error});
                    })
                    .done();
            }else{
                controller.addCategory(JSON.parse(req.body.category));
                return res.status(200).json({msg: 'success'});
            }

        });

};


