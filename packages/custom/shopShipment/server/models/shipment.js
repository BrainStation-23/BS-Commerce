'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    quantityShipped: {
        type: Number,
        default: 0
    },
    sku: {
        type: String,
        default: ''
    }
});

var ShipmentSchema = new Schema({
    orderId: {
        type: Schema.Types.ObjectId,
        ref: 'Orders',
        required: true
    },
    trackingNumber: {
        type: String,
        default: ''
    },
    adminComment: {
        type: String,
        default: ''
    },
    shippedDate: {
        type: Date,
        default: null
    },
    deliveredDate: {
        type: Date,
        default: null
    },
    products: {
        type: [ProductSchema],
        required: true
    }
});

mongoose.model('Shipments', ShipmentSchema);