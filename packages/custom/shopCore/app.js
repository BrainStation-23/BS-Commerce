'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var ShopCore = new Module('shopCore');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
ShopCore.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  ShopCore.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  ShopCore.menus.add({
    title: 'shopCore example page',
    link: 'shopCore example page',
    roles: ['authenticated'],
    menu: 'main'
  });

  ShopCore.aggregateAsset('css', 'shopCore.css');

  return ShopCore;
});
