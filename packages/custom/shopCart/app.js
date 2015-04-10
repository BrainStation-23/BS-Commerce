'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var ShopCart = new Module('shopCart');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
ShopCart.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  ShopCart.routes(app, auth, database);

    return ShopCart;
});
