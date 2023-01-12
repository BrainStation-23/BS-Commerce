"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModel = void 0;
const mongoose_1 = require("mongoose");
const crypto_1 = require("crypto");
const CustomerAddressSchema = new mongoose_1.Schema({
    id: {
        type: String,
        default: () => (0, crypto_1.randomUUID)(),
        index: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    addressLine1: {
        type: String,
        required: true,
    },
    isDefault: {
        type: Boolean,
        default: false,
    },
    addressLine2: String,
    company: String,
    state: String,
    country: String,
    postCode: String,
    phone: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: true,
    },
}, {
    _id: false,
    timestamps: false,
    versionKey: false,
});
const CustomerSchema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true,
        default: () => (0, crypto_1.randomUUID)(),
    },
    name: String,
    phone: {
        type: String,
        index: true,
    },
    email: {
        type: String,
        index: true,
    },
    password: {
        type: String,
        required: true,
        index: true,
    },
    addresses: [CustomerAddressSchema],
}, {
    timestamps: true,
    versionKey: false,
});
const CustomerModel = (0, mongoose_1.model)('customer', CustomerSchema);
exports.CustomerModel = CustomerModel;
//# sourceMappingURL=customer.model.js.map