'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var ShopShipment = new Module('shopShipment');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
ShopShipment.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  ShopShipment.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  ShopShipment.menus.add({
    title: 'shopShipment example page',
    link: 'shopShipment example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  ShopShipment.aggregateAsset('css', 'shopShipment.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    ShopShipment.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    ShopShipment.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    ShopShipment.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return ShopShipment;
});
