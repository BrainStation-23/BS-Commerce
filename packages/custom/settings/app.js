'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Settings = new Module('settings');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Settings.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Settings.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Settings.menus.add({
    title: 'settings example page',
    link: 'settings example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Settings.aggregateAsset('css', 'settings.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Settings.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Settings.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Settings.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Settings;
});
