'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ShipmentSchema = new Schema({
    orderId: {
        type: Schema.Types.ObjectId,
        ref: 'Orders',
        required: true
    },
    trackingNumber: {
        type: String
    },
    adminComment: {
        type: String
    },
    shippedDate: {
        type: Date,
        default: null
    },
    deliveredDate: {
        type: Date,
        default: null
    }
});

mongoose.model('Shipments', ShipmentSchema);