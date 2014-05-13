'use strict';

/*
 * Defining the Package
 */

var mean = require('meanio');

var Module = mean.Module;
var Auth = new Module('Auth');

var passport = require('passport');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Auth.register(function(app, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Auth.routes(app, passport, database);

    mean.events.on('modulesFound', function() {
        require('./server/config/passport')(passport);

        // Register passport dependency
        mean.register('passport', function() {
            return passport;
        });
        // Register auth dependency
        mean.register('authorization', function() {
            // This needs to be replaced with proper package middleware handling.
            return require('./server/routes/middlewares/authorization');
        });

        // Use passport session
        app.use(passport.initialize());
        app.use(passport.session());
    });

    /*
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Auth.settings({'someSetting':'some value'},function (err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Auth.settings({'anotherSettings':'some value'});

    // Get settings. Retrieves latest saved settigns
    Auth.settings(function (err, settings) {
        //you now have the settings object
    });
    */

    return Auth;
});
