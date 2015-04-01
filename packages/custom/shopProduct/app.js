'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var ShopProduct = new Module('shopProduct');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
ShopProduct.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  ShopProduct.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  ShopProduct.menus.add({
    title: 'shopProduct example page',
    link: 'shopProduct example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  ShopProduct.aggregateAsset('css', 'shopProduct.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    ShopProduct.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    ShopProduct.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    ShopProduct.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return ShopProduct;
});
