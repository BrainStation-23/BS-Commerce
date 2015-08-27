'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var ShopSettings = new Module('shopSettings');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
ShopSettings.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  ShopSettings.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  ShopSettings.menus.add({
    title: 'shopSettings example page',
    link: 'shopSettings example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  ShopSettings.aggregateAsset('css', 'shopSettings.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    ShopSettings.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    ShopSettings.settings({
        'anotherSettings': 'some value'
    });

    // Get Settings. Retrieves latest saved settigns
    ShopSettings.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return ShopSettings;
});
