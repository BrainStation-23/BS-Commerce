"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpModel = void 0;
const mongoose_1 = require("mongoose");
const OtpSchema = new mongoose_1.Schema({
    phone: String,
    email: String,
    otp: Number,
    isVerified: {
        type: Boolean,
        default: false,
    },
    otpExpireTime: Number,
    otpVerifiedAt: Number,
}, {
    timestamps: true,
    versionKey: false,
});
const OtpModel = (0, mongoose_1.model)('otp', OtpSchema);
exports.OtpModel = OtpModel;
//# sourceMappingURL=otp.model.js.map