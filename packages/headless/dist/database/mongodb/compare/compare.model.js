"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompareModel = void 0;
const crypto_1 = require("crypto");
const mongoose_1 = require("mongoose");
const CompareItems = new mongoose_1.Schema({
    productId: {
        type: String,
    },
}, {
    _id: false,
    timestamps: false,
    versionKey: false,
});
const CompareSchema = new mongoose_1.Schema({
    id: {
        type: String,
        default: () => (0, crypto_1.randomUUID)(),
        unique: true,
    },
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    items: [CompareItems],
}, {
    timestamps: true,
    versionKey: false,
});
const CompareModel = (0, mongoose_1.model)('compare', CompareSchema);
exports.CompareModel = CompareModel;
//# sourceMappingURL=compare.model.js.map