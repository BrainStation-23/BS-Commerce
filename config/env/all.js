'use strict';

module.exports = {
	app: {
		title: 'BS-Commerce',
		description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
				'public/lib/components-font-awesome/css/font-awesome.css',
				'public/lib/metisMenu/dist/metisMenu.css',
				'public/lib/jstree/dist/themes/default/style.css',
				'public/lib/toastr/toastr.css'
			],
			js: [
				'public/lib/jquery/dist/jquery.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-cookies/angular-cookies.js', 
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/metisMenu/dist/metisMenu.js',
				'public/lib/jstree/dist/jstree.js',
				'public/lib/ng-file-upload/ng-file-upload.js',
				'public/lib/tinymce-dist/tinymce.js',
				'public/lib/angular-ui-tinymce/src/tinymce.js',
				'public/lib/lodash/dist/lodash.js',
				'public/lib/toastr/toastr.js',
				'public/lib/jspdf/dist/jspdf.debug.js'
			]
		},
		css: [
			'public/modules/*[!shopAdmin]*/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*[!shopAdmin, !users]*/*.js',
			'public/modules/*[!shopAdmin, !users]*/*[!tests]*/*.js'
		],
		//================= start our custom variable=====================================
		adminCss: [
			'public/modules/**/css/*.css'
		],
		adminJs: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js',
			'public/modules/*/*[!tests]*/**/*.js'
		],
		themeCss: [
			'public/themes/**/css/*.css'
		],
		themeJs: [
			'public/themes/*/*.js',
			'public/themes/**/*.js'
		],
		//================= end our custom variable=====================================
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};
