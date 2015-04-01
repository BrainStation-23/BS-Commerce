'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var ShopWeb = new Module('shopWeb');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
ShopWeb.register(function (app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    ShopWeb.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
   /* ShopWeb.menus.add({
        title: 'shopWeb example page',
        link: 'shopWeb example page',
        roles: ['authenticated'],
        menu: 'main'
    });*/

    ShopWeb.aggregateAsset('css', 'shopWeb.css');
    ShopWeb.angularDependencies(['mean.system', 'mean.shopCategory', 'mean.shopSlider']);
    /**
     //Uncomment to use. Requires meanio@0.3.7 or above
     // Save settings with callback
     // Use this for saving data from administration pages
     ShopWeb.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

     // Another save settings example this time with no callback
     // This writes over the last settings.
     ShopWeb.settings({
        'anotherSettings': 'some value'
    });

     // Get settings. Retrieves latest saved settigns
     ShopWeb.settings(function(err, settings) {
        //you now have the settings object
    });
     */

    return ShopWeb;
});
