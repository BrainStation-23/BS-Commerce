'use strict';

var mongoose = require('mongoose'),
  Category = mongoose.model('Category'),
  Product = mongoose.model('Product'),
  controller = require('../controllers/shopProduct'),
  _ = require('lodash');

module.exports = function(ShopProduct, app, auth, database, shopCore) {
  app.route('/api/products')
    .get(controller.list);

  app.route('/api/photos')
    .post(function(req, res){
      shopCore.media.create(req.files.upload)
        .then(function(file){
          return res.status(200).json(file);
        })
        .catch(function(error){
          return res.status(500).json({error: error});
        })
        .done();
    });
  app.route('/api/products/photos/:id')
    .get(function(req, res){
      var stream = shopCore.media.get(req.params.id);
      stream.pipe(res);
      return res.status(200);
    })
    .delete(function(req, res){
      shopCore.media.delete(req.params.id)
        .then(function(){
          return res.status(200).json({msg: 'Deleted successfully!'});
        })
        .catch(function(error){
          return res.status(500).json({error: error});
        })
        .done();
    });
};
