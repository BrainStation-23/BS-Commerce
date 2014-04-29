'use strict';

/*
 * Defining the Package
 */

var Module = require('meanio').Module;

var System = new Module('System');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
System.register(function(app, database) {

    //We enable routing. By default the Package Object is passed to the routes
    System.routes(app, database);

    /*
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    System.settings({'someSetting':'some value'},function (err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    System.settings({'anotherSettings':'some value'});

    // Get settings. Retrieves latest saved settigns
    System.settings(function (err, settings) {
        //you now have the settings object
    });
    */

    return System;
});
