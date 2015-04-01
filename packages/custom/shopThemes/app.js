'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var ShopThemes = new Module('shopThemes');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
ShopThemes.register(function (system, app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    ShopThemes.routes(app, auth, database);


    var libDir = '../lib/';
    ShopThemes.aggregateAsset('css', libDir + 'e-shopper/css/main.css');
    ShopThemes.aggregateAsset('css', libDir + 'e-shopper/css/responsive.css');
    ShopThemes.aggregateAsset('css', libDir + 'font-awesome/css/font-awesome.css');
    ShopThemes.aggregateAsset('css', libDir + 'seiyria-bootstrap-slider/css/bootstrap-slider.css');
    ShopThemes.aggregateAsset('css', libDir + 'jquery-prettyPhoto/css/prettyPhoto.css');
    ShopThemes.aggregateAsset('css', libDir + 'animate.css/animate.css');
    ShopThemes.aggregateAsset('css', 'shopThemes.css');

    ShopThemes.aggregateAsset('js', libDir + 'jquery-prettyPhoto/js/jquery.prettyPhoto.js');
    ShopThemes.aggregateAsset('js', libDir + 'bower-bootstrap-slider/js/bootstrap-slider.js');
    ShopThemes.aggregateAsset('js', libDir + 'scrollup/src/jquery.scrollUp.js');
    ShopThemes.aggregateAsset('js', 'shopThemes.js');

    ShopThemes.angularDependencies(['mean.system']);

    app.set('views', __dirname + '/server/views');

    return ShopThemes;
});
