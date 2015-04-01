'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var ShopCategory = new Module('shopCategory');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
ShopCategory.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  ShopCategory.routes(app, auth, database);


  ShopCategory.aggregateAsset('css', 'shopCategory.css');



  return ShopCategory;
});
