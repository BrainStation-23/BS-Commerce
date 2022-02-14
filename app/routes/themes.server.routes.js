'use strict';

module.exports = function(app) {
    // Home route
    var themeController = require('../controllers/theme.server.controller');
    //app.route('/')
    //    .get(themeController.render);

    app.route('/api/admin/theme')
        .get(themeController.getThemes)
        .post(themeController.createTheme)
        .put(themeController.updateTheme);

    app.route('/api/admin/theme/:themeId')
        .get(themeController.getThemeById)
        .delete(themeController.deleteTheme);

    app.route('/api/theme')
        .get(themeController.getDefaultTheme);


    //app.get('/*',function(req,res,next){
    //    res.header('workerID' , JSON.stringify(mean.options.workerid) );
    //    next(); // http://expressjs.com/guide.html#passing-route control
    //});
};
