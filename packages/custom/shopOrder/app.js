'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var ShopOrder = new Module('shopOrder');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
ShopOrder.register(function(app, auth, database, shopCore) {

  //We enable routing. By default the Package Object is passed to the routes
  ShopOrder.routes(app, auth, database, shopCore);
  
  ShopOrder.aggregateAsset('css', 'shop-order.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Shoporder.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Shoporder.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Shoporder.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return ShopOrder;
});
