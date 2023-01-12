"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishListModel = void 0;
const mongoose_1 = require("mongoose");
const crypto_1 = require("crypto");
const WishListSchema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true,
        default: () => (0, crypto_1.randomUUID)(),
    },
    userId: String,
    items: [
        {
            productId: String,
            quantity: Number,
            _id: false,
        },
    ],
}, {
    timestamps: true,
    versionKey: false,
});
const WishListModel = (0, mongoose_1.model)('wishList', WishListSchema);
exports.WishListModel = WishListModel;
//# sourceMappingURL=wishList.model.js.map