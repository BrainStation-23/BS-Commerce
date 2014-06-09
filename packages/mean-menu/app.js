'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var MeanMenu = new Module('mean-menu');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
MeanMenu.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    MeanMenu.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    MeanMenu.menus.add({
        title: 'meanMenu example page',
        link: 'meanMenu example page',
        roles: ['authenticated'],
        menu: 'main.createArticle'
    });

    MeanMenu.menus.add({
        title: 'sec A',
        link: 'meanMenu example page',
        roles: ['authenticated'],
        menu: 'sec'
    });

    MeanMenu.menus.add({
        title: 'sec B',
        link: 'meanMenu example page',
        roles: ['authenticated'],
        menu: 'sec'
    });

    MeanMenu.menus.add({
        title: 'sec C',
        link: 'meanMenu example page',
        roles: ['authenticated'],
        menu: 'sec'
    });

    /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    MeanMenu.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    MeanMenu.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    MeanMenu.settings(function(err, settings) {
        //you now have the settings object
    });
    */

    return MeanMenu;
});
