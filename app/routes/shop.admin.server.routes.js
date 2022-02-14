'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var adminController = require('../../app/controllers/shop.admin.server.controller');

	// ShopAdmins Routes
	app.route('/admin')
		.get(adminController.adminHomePageRender);

	//app.route('/shopAdmins/:shopAdminId')
	//	.get(adminController.read)
	//	.put(users.requiresLogin, adminController.hasAuthorization, adminController.update)
	//	.delete(users.requiresLogin, adminController.hasAuthorization, adminController.delete);
    //
	//// Finish by binding the ShopAdmin middleware
	//app.param('shopAdminId', adminController.shopAdminByID);
};
