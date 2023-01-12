"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerModel = void 0;
const mongoose_1 = require("mongoose");
const crypto_1 = require("crypto");
const ManufacturerSchema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true,
        default: () => (0, crypto_1.randomUUID)(),
    },
    name: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
    },
    picture: {
        type: String,
    },
    isPublished: {
        type: Boolean,
        default: false,
    },
    displayOrder: {
        type: Number,
    },
    seo: {
        metaKeyword: {
            type: String,
            default: '',
        },
        metaDescription: {
            type: String,
            default: '',
        },
        metaTitle: {
            type: String,
            default: '',
        },
        SEFN: {
            type: String,
            default: '',
        },
    },
}, {
    timestamps: true,
    versionKey: false,
});
const ManufacturerModel = (0, mongoose_1.model)('manufacturer', ManufacturerSchema);
exports.ManufacturerModel = ManufacturerModel;
//# sourceMappingURL=manufacturer.model.js.map