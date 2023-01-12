"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandModel = void 0;
const mongoose_1 = require("mongoose");
const BrandSchema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true,
    },
    info: {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            default: null,
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
            default: 0,
        },
        pageSizeOptions: [{ type: Number }],
    },
    meta: {
        keywords: {
            type: String,
            default: '',
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
});
const BrandModel = (0, mongoose_1.model)('brand', BrandSchema);
exports.BrandModel = BrandModel;
//# sourceMappingURL=brand.model.js.map