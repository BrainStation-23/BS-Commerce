'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(ShopCart, app, auth, database) {

    app.get('/shopCart', function(req, res, next){
        ShopCart.render('index', {
            package: 'shopCart'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });

};
