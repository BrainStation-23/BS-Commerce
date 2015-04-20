'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module,
    multer = require('multer'),
    media  = require('./server/services/mediaService'),
    ShopCore = new Module('shopCore');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
ShopCore.register(function(app, auth, database) {
  //Configure multer to keep uploaded contents in memory
  app.use(multer({
    inMemory: true
  }));

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

  //Assign services to be used by other components
  ShopCore.media = media;
  return ShopCore;
});
