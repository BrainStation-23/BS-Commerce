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

  //We are adding a link to the main menu for all authenticated users
  ShopUser.menus.add({
    title: 'Manage Users',
    link: 'admin.settings.users',
    roles: ['authenticated'],
    menu: 'main'
  });

  ShopUser.aggregateAsset('css', 'shopUser.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Shopuser.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Shopuser.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Shopuser.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return ShopUser;
});
