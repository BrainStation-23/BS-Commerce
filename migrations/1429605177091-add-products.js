'use strict';

var mean = require('meanio'),
  mongoose = require('mongoose'),
  Grid = require('gridfs-stream'),
  Q = require('q'),
  fs = require('fs'),
  async = require('async'),
  _ = require('lodash');

  Grid.mongo  = mongoose.mongo;
  var gfs = new Grid(mongoose.connection.db);

require('../packages/custom/shopCategory/server/models/Category');
require('../packages/custom/shopProduct/server/models/Product');

var Product = mongoose.model('Product');
var Category = mongoose.model('Category');

var deleteFile = function(id){
  var deferred = Q.defer();

  gfs.remove({
    _id: id
  },function(err){
    if(err){
      deferred.reject(err);
    }else{
      deferred.resolve();
    }
  });

  return deferred.promise;
};

var clearFiles = function(){
  var deferred = Q.defer();

  var productPhotoIdList = [];
  Product.find({},function(err, products){
    if(err){
      return deferred.reject(err);
    }
    _.forEach(products, function(product){
      productPhotoIdList = productPhotoIdList.concat(product.photos);

    });

    var promises = _.map(productPhotoIdList, function(id){
      return deleteFile(id);
    });

    Q.all(promises)
      .then(deferred.resolve)
      .catch(deferred.reject);
  });

  return deferred.promise;
};

var clearProducts = function(){
  var deferred = Q.defer();

  Product.remove({},function(err){
    if(err){
      deferred.reject(err);
    }else{
      deferred.resolve();
    }
  });

  return deferred.promise;
};

var isDirectory = function(directoryPath){
  var deferred = Q.defer();

  fs.stat(directoryPath, function(error, stat){
    if(error){
      deferred.reject(error);
    }else{
      if(stat.isDirectory()){
        deferred.resolve(true);
      }else{
        deferred.resolve(false);
      }
    }
  });

  return deferred.promise;
};

var getSubdirectories = function(directoryPath, options){
  options = options || {};
  options.type = options.type || 'all';

  var deferred = Q.defer();

  fs.readdir(directoryPath, function(error, files){
    if(error){
      deferred.reject(error);
    }else{
      var statusPromises = _.map(files, function(file){
        var subDirectoryPath = directoryPath + '/' + file;
        return isDirectory(subDirectoryPath);
      });

      Q.all(statusPromises)
        .then(function(status){
          var result = [];
          _.forEach(files,function(file, index){
            if(options.type !== 'file' && status[index]){
              result.push(file);
            }else if(options.type !== 'directory' && !status[index]){
              result.push(file);
            }

          });
          deferred.resolve(result);
        })
        .catch(deferred.reject);
    }
  });

  return deferred.promise;
};

var getCategories = function(){
  var deferred = Q.defer();

  getSubdirectories('./migrations/data/products',{type: 'directory'})
    .then(deferred.resolve)
    .catch(deferred.reject);

  return deferred.promise;
};

var getProducts = function(category){
  var deferred = Q.defer();

  getSubdirectories('./migrations/data/products/' + category, {type: 'directory'})
    .then(function(products){
      deferred.resolve([category, products]);
    })
    .catch(deferred.reject);

  return deferred.promise;
};

var createPhoto = function(category, product, photo){
  var deferred = Q.defer();

  var ext = photo.substr(photo.lastIndexOf('.') + 1);
  var contentType = (ext === 'jpg' || ext === 'jpeg') ? 'image/jpg' : (ext === 'png' ? 'image/png' : '');
  var writeStream = gfs.createWriteStream({
    filename: photo,
    mode: 'w',
    content_type: contentType
  });

  var photoPath = './migrations/data/products/' + category + '/' + product + '/' + photo;
  fs.createReadStream(photoPath).pipe(writeStream);

  writeStream.on('close', function (file) {
    deferred.resolve(file._id);
  });

  writeStream.on('error', function (error) {
    deferred.reject(error);
  });

  return deferred.promise;
};

var createPhotos = function(category, product){
  var deferred = Q.defer();

  getSubdirectories('./migrations/data/products/' + category + '/' + product, {type: 'file'})
    .then(function(files){
      var promises = [];

      _.forEach(files, function(photo){
        promises.push(createPhoto(category,product,photo));
      });

      Q.all(promises)
        .then(deferred.resolve)
        .catch(deferred.reject);
    })
    .catch(deferred.reject);

  return deferred.promise;
};

var getShortDesctiption = function(){
  return 'Suspendisse potenti. Nam quis sodales odio. Curabitur semper, dui vitae tempor laoreet, diam eros imperdiet justo, nec dictum ligula neque vel libero. Maecenas vitae massa eu dolor vehicula finibus. Morbi nec eros a mauris luctus gravida eu in quam. Praesent dignissim erat a ex mattis, sed fermentum erat convallis. Nullam iaculis aliquam tristique.';
};

var getFullDescription = function(){
  return 'Morbi vitae pulvinar ipsum. Nunc faucibus lacinia elit. Etiam consequat pharetra velit vel commodo. Nunc eu eros sem. Nunc suscipit metus ac erat mollis, eget tempus orci iaculis. Nulla vulputate nisi nisl, vitae congue ipsum venenatis pellentesque. Donec pulvinar, massa et bibendum ullamcorper, purus orci gravida ante, sed rhoncus nisi magna vitae ipsum. Vestibulum id mauris justo.Aenean suscipit lobortis risus at feugiat. In porttitor ullamcorper nulla, vitae scelerisque orci luctus ut. Pellentesque at varius metus. Integer velit ligula, gravida id urna in, ultricies tempor massa. Curabitur lobortis ornare risus, at semper diam dapibus vitae. Integer ornare, dolor sed ullamcorper blandit, felis ante imperdiet leo, a posuere diam nibh tincidunt magna. Quisque sodales sem a convallis tincidunt.Ut finibus, urna a maximus rutrum, nisi ipsum maximus enim, non pharetra diam quam vel nisl. Aenean nisi nibh, ultricies ac tristique vel, rhoncus sed quam. Nullam rutrum euismod tellus, sit amet suscipit eros dapibus nec. Curabitur porttitor metus orci, at auctor dui vehicula vitae. Donec a orci tempus, dignissim nisl nec, tempus tellus. Aliquam commodo ipsum eget neque ullamcorper, sed ullamcorper est egestas. Aliquam dui sapien, eleifend non metus non, maximus finibus metus. Nullam a velit eget nulla ultricies convallis. Aenean eget purus blandit, tempor dolor sed, iaculis est. Maecenas posuere ut turpis in placerat.';
};

var createProduct = function(category, product){
  var deferred = Q.defer();

  createPhotos(category, product)
    .then(function(photos){
      var categorySlug = category.replace(/\s+/g,'-').toLowerCase();
      var productSlug = product.replace(/\s+/g, '-').toLowerCase();

      Category.findOne({slug: categorySlug}, function(error, cat){
        if(error){
          deferred.reject(error);
        }else{
          if(cat){
            var price = Math.floor((Math.random() * 100) + 20);
            Product.create({
              info:{
                name: product,
                shortDescription: getShortDesctiption(),
                fullDescription: getFullDescription(),
                sku: productSlug,
                price: price,
                oldPrice: price + 10,
                cost: price - 15
              },
              meta:{
                friendlyPageName: productSlug
              },
              photos:photos,
              categories:[{
                categoryId: cat._id,
                isFeatured: true
              }]
            }, function(err, p){
              if(err){
                deferred.reject(err);
              }else{
                deferred.resolve(p);
              }
            });
            deferred.resolve();
          }
        }
      });
    }).
    catch(deferred.reject);

  return deferred.promise;
};

var createProducts = function(category, products){
  var deferred = Q.defer();

  var promises = [];

  _.forEach(products, function(product){
      promises.push(createProduct(category, product));
  });

  Q.all(promises)
    .then(deferred.resolve)
    .catch(deferred.reject);

  return deferred.promise;
};

var createProductsInCategory = function(category){
  var deferred = Q.defer();

  getProducts(category)
    .spread(createProducts)
    .then(deferred.resolve)
    .catch(deferred.reject);

  return deferred.promise;
};

var createProductsInCategories = function(categories){
  var deferred = Q.defer(),
    promises =[];

  _.forEach(categories, function(category){
    promises.push(createProductsInCategory(category));
  });

  Q.all(promises)
    .then(deferred.resolve)
    .catch(deferred.reject);

  return deferred.promise;
};

exports.up = function(next){
  clearFiles()
    .then(clearProducts)
    .then(getCategories)
    .then(createProductsInCategories)
    .catch(console.log)
    .finally(function(){
      next();
    })
    .done();
};

exports.down = function(next){
  next();
};
