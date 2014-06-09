'use strict';

// The Package is past automatically as first parameter
module.exports = function(MeanMenu, app, auth, database) {

    app.get('/meanMenu/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/meanMenu/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/meanMenu/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/meanMenu/example/render', function(req, res, next) {
        MeanMenu.render('index', {
            package: 'mean-menu'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
