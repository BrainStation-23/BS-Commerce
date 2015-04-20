'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var ShopMedia = new Module('shopMedia');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
ShopMedia.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  ShopMedia.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  ShopMedia.menus.add({
    title: 'shopMedia example page',
    link: 'shopMedia example page',
    roles: ['authenticated'],
    menu: 'main'
  });

  ShopMedia.aggregateAsset('css', 'shopMedia.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    ShopMedia.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    ShopMedia.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    ShopMedia.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return ShopMedia;
});
