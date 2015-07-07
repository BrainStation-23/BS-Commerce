'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var ShopCatalog = new Module('shopCatalog');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
ShopCatalog.register(function(app, auth, database) {
  //We enable routing. By default the Package Object is passed to the routes
  ShopCatalog.routes(app, auth, database);
  ShopCatalog.aggregateAsset('css', 'shopCatalog.css');

  return ShopCatalog;
});
