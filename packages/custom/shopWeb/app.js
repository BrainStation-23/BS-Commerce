'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var ShopWeb = new Module('shopWeb');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
ShopWeb.register(function (app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    ShopWeb.routes(app, auth, database);

    ShopWeb.aggregateAsset('css', 'shopWeb.css');
    ShopWeb.angularDependencies(['mean.system', 'mean.shopCategory', 'mean.shopSlider', 'mean.shopProduct']);

    return ShopWeb;
});
