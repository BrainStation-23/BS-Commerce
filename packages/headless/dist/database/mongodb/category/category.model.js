"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = void 0;
const crypto_1 = require("crypto");
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true,
        default: () => (0, crypto_1.randomUUID)(),
    },
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
    photo: {
        url: {
            type: String,
            default: null,
        },
        alt: {
            type: String,
            default: '',
        },
    },
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
        default: true,
    },
    published: {
        type: Boolean,
        default: true,
    },
    displayOrder: {
        type: Number,
        default: 0,
    },
    rootPath: {
        type: String,
        default: '',
    },
    ancestors: [
        {
            name: {
                type: String,
                required: true,
            },
            slug: {
                type: String,
                required: true,
            },
            level: {
                type: Number,
                required: true,
                default: 0,
            },
            _id: false,
        },
    ],
    meta: {
        keywords: {
            type: [String],
            default: [],
        },
        description: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        SEFN: {
            type: String,
            default: '',
        },
    },
}, {
    versionKey: false,
});
const CategoryModel = (0, mongoose_1.model)('Category', CategorySchema);
exports.CategoryModel = CategoryModel;
//# sourceMappingURL=category.model.js.map