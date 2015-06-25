'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AddressSchema = new Schema({
    name: {
        type: String,
        required: true,
        get: escapeProperty
    },
    email: {
        type: String,
        required: true,
        // Regexp to validate emails with more strict rules as added in tests/users.js which also conforms mostly with RFC2822 guide lines
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2:{
        type: String
    },
    city:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    postCode:{
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }
});

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
    price:{
        type: Number,
        required:true
    },
    quantity:{
        type: Number,
        required:true
    }
});

var OrderSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    billingAddress: {
        type: [AddressSchema],
        default: []
    },
    shippingAddress: {
        type: [AddressSchema],
        default: []
    },
    shippingMethod: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    orderedDate: {
        type: Date,
        default: Date.now
    },
    orderStatus: {
        type: String,
        enum:['ordered', 'delivered', 'cancel']
    },
    products: {
        type: [ProductSchema]
    },
    productCost: {
        type: Number,
        required: true
    },
    shippingCost: {
        type: Number
    },
    totalCost: {
        type: Number,
        required: true
    }

});

mongoose.model("Orders", OrderSchema);
