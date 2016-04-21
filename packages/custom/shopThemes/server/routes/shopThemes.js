'use strict';

var mean = require('meanio');
module.exports = function(ShopThemes, app, auth, database) {
    // Home route
    var themeController = require('../controllers/index');
    app.route('/')
        .get(themeController.render);

    app.route('/api/admin/theme')
        .get(themeController.getThemes)
        .post(themeController.createTheme);

    app.route('/api/admin/theme/:themeId')
        //.get(themeController.getThemeById)
        .put(themeController.updateTheme);

    app.route('/api/theme/default')
        .get(themeController.getDefaultTheme);


    app.get('/*',function(req,res,next){
        res.header('workerID' , JSON.stringify(mean.options.workerid) );
        next(); // http://expressjs.com/guide.html#passing-route control
    });
};