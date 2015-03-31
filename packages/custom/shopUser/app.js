'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var ShopUser = new Module('shopUser');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
ShopUser.register(function(app, auth, database, shopCore) {

  //We enable routing. By default the Package Object is passed to the routes
  ShopUser.routes(app, auth, database);

  ShopUser.aggregateAsset('css', 'shopUser.css');

  ShopUser.angularDependencies(['mean.system','user']);

  return ShopUser;
});
