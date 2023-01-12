"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const crypto_1 = require("crypto");
const ProductSchema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true,
        default: () => (0, crypto_1.randomUUID)(),
    },
    info: {
        name: String,
        shortDescription: String,
        fullDescription: String,
        sku: String,
        price: Number,
        oldPrice: Number,
        cost: Number,
        showOnHomePage: {
            type: Boolean,
            default: false,
        },
        includeInTopMenu: {
            type: Boolean,
            default: false,
        },
        allowToSelectPageSize: {
            type: Boolean,
            default: false,
        },
        published: {
            type: Boolean,
            default: false,
        },
        displayOrder: {
            type: Number,
            default: 1,
        },
        isFeatured: {
            type: Boolean,
            default: false,
        },
        publishDate: {
            type: Date,
            default: new Date(),
        },
    },
    meta: {
        keywords: {
            type: [String],
            default: [],
        },
        title: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        friendlyPageName: String,
    },
    tags: [String],
    photos: [
        {
            url: String,
            id: {
                type: String,
                index: true,
                default: () => (0, crypto_1.randomUUID)(),
            },
            title: {
                type: String,
                default: '',
            },
            alt: {
                type: String,
                default: '',
            },
            displayOrder: {
                type: Number,
                default: 1,
            },
            _id: false,
        },
    ],
    brands: [String],
    manufacturer: {
        id: String,
        name: String,
    },
    categories: [
        {
            id: String,
            name: String,
            _id: false,
        },
    ],
}, {
    timestamps: true,
    versionKey: false,
});
ProductSchema.index({
    'info.name': 'text',
    'info.fullDescription': 'text',
}, { name: 'search' });
const ProductModel = (0, mongoose_1.model)('product', ProductSchema);
exports.ProductModel = ProductModel;
//# sourceMappingURL=product.model.js.map