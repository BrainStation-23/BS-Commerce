"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModel = void 0;
const mongoose_1 = require("mongoose");
const CartSchema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true,
    },
    userId: String,
    items: [
        {
            productId: String,
            quantity: {
                type: Number,
            },
            _id: false,
        },
    ],
}, {
    timestamps: true,
    versionKey: false,
});
const CartModel = (0, mongoose_1.model)('cart', CartSchema);
exports.CartModel = CartModel;
//# sourceMappingURL=cart.model.js.map