'use strict';

/**
 * Module dependencies.
 */
var mean = require('meanio');

/**
 * Main application entry file.
 **/
var options = {};

mean.app(options, function(app, config) {

    console.log('Mean app started on port ' + config.port + ' (' + process.env.NODE_ENV + ')');

    // Register auth dependency
    mean.register('auth', function() {
        return require('./server/routes/middlewares/authorization');
    });

    // Expose app
    exports = module.exports = app;
});
