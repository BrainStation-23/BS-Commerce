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
ShopUser.register(function(app, auth, users, database, shopCore, passport) {
  //We enable routing. By default the Package Object is passed to the routes
  ShopUser.routes(app, auth, database, passport);

  ShopUser.aggregateAsset('css', 'shopUser.css');

  ShopUser.angularDependencies(['mean.system', 'mean.users']);

  return ShopUser;
});
