'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * ShopAdmin Schema
 */
var ShopAdminSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill ShopAdmin name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('ShopAdmin', ShopAdminSchema);
