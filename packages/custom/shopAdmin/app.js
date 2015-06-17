'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var ShopAdmin = new Module('shopAdmin');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
ShopAdmin.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
    ShopAdmin.routes(app, auth, database);
    ShopAdmin.angularDependencies(['mean.system', 'ngFileUpload', 'ui.tinymce']);
    //ShopAdmin.angularDependencies(['mean.system']);

  
    //ShopAdmin.aggregateAsset('css', 'shopAdmin.css');


  return ShopAdmin;
});
