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

    //Set layout from the theme


    ShopThemes.aggregateAsset('css', 'shopThemes.css');

    var libDir = "../lib/";
    ShopThemes.aggregateAsset('css', libDir + 'font-awesome/css/font-awesome.css');
    ShopThemes.aggregateAsset('css', libDir + 'seiyria-bootstrap-slider/css/bootstrap-slider.css');
    ShopThemes.aggregateAsset('css', libDir + 'jquery-prettyPhoto/css/prettyPhoto.css');
    //ShopThemes.aggregateAsset('css', libDir+'bower-bootstrap-slider/css/slider.css');
    ShopThemes.aggregateAsset('css', libDir + 'animate.css/animate.css');

    ShopThemes.aggregateAsset('js', 'shopThemes.js');
    ShopThemes.aggregateAsset('js', libDir + 'jquery-prettyPhoto/js/jquery.prettyPhoto.js');
    ShopThemes.aggregateAsset('js', libDir + 'bower-bootstrap-slider/js/bootstrap-slider.js');
    ShopThemes.aggregateAsset('js', libDir + 'scrollup/dist/jquery.scrollUp.js');


    ShopThemes.aggregateAsset('js', libDir + 'bootstrap/dist/js/bootstrap.min.js');
    ShopThemes.aggregateAsset('js', libDir + 'seiyria-bootstrap-slider/dist/bootstrap-slider.min.js', {
        group: 'footer',
        weight: -1
    });

    //ShopThemes.angularDependencies(['mean.system', 'mean.shopCategory']);
    ShopThemes.angularDependencies(['mean.system']);

    app.set('views', __dirname + '/server/views');

    return ShopThemes;
});
