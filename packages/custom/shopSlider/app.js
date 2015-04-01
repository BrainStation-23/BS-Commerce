'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var ShopSlider = new Module('shopSlider');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
ShopSlider.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  ShopSlider.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
 /* ShopSlider.menus.add({
    title: 'shopSlider example page',
    link: 'shopSlider example page',
    roles: ['authenticated'],
    menu: 'main'
  })*/;
  
  ShopSlider.aggregateAsset('css', 'shopSlider.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    ShopSlider.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    ShopSlider.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    ShopSlider.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return ShopSlider;
});
