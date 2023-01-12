"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsModel = void 0;
const mongoose_1 = require("mongoose");
const TagsSchema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        unique: true,
    },
    isHomePageProductsTag: {
        type: Boolean,
        default: false,
        select: false,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const TagsModel = (0, mongoose_1.model)('tags', TagsSchema);
exports.TagsModel = TagsModel;
//# sourceMappingURL=tags.model.js.map