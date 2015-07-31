'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AddressSchema = {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // Regexp to validate emails with more strict rules as added in tests/users.js which also conforms mostly with RFC2822 guide lines
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email']
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
};

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
    price: {
        type: Number,
        required:true
    },
    quantity: {
        type: Number,
        required:true
    },
    quantityShipped: {
        type: Number,
        default: 0
    },
    sku: {
        type: String,
        required: true
    }
});

var OrderSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    billingAddress: AddressSchema,
    shippingAddress: AddressSchema,
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
        default: 'ordered',
        enum:['ordered', 'completed', 'cancelled']
    },
    shippingStatus: {
        type: String,
        default: 'pending',
        enum:['pending', 'delivered', 'cancelled']
    },
    paymentStatus: {
        type: String,
        default: 'pending',
        enum:['pending', 'paid', 'cancelled']
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

mongoose.model('Orders', OrderSchema);