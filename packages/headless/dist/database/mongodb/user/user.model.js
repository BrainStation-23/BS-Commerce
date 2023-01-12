"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const crypto_1 = require("crypto");
const AddressSchema = new mongoose_1.Schema({
    id: {
        type: String,
        default: () => (0, crypto_1.randomUUID)(),
        index: true,
    },
    addressLine1: String,
    addressLine2: String,
    city: String,
    country: String,
    postCode: String,
}, {
    _id: false,
    timestamps: false,
    versionKey: false,
});
const UserSchema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true,
        default: () => (0, crypto_1.randomUUID)(),
    },
    firstName: String,
    lastName: String,
    displayName: String,
    phone: {
        type: String,
        index: true,
    },
    username: {
        type: String,
        unique: true,
        index: true,
    },
    email: {
        type: String,
        index: true,
    },
    password: String,
    provider: String,
    providerData: {},
    additionalProviderData: {},
    resetPasswordToken: String,
    resetPasswordExpires: Number,
    gender: String,
    addresses: [AddressSchema],
    status: {
        type: String,
        enum: ['active', 'inactive', 'email-not-verified'],
    },
}, {
    timestamps: true,
    versionKey: false,
});
const UserModel = (0, mongoose_1.model)('user', UserSchema);
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map