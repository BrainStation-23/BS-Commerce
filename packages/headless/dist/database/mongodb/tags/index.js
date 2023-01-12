"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsDatabase = void 0;
const common_1 = require("@nestjs/common");
const tags_model_1 = require("./tags.model");
let TagsDatabase = class TagsDatabase {
    async getTags(query) {
        return await tags_model_1.TagsModel.find(query).select('-_id').lean();
    }
    async getTag(query) {
        return await tags_model_1.TagsModel.findOne(query).select('-_id').lean();
    }
    async createTag(data) {
        const tag = await tags_model_1.TagsModel.create(data);
        return tag === null || tag === void 0 ? void 0 : tag.toObject();
    }
    async updateTag(query, data) {
        return await tags_model_1.TagsModel.findOneAndUpdate(query, { $set: data }, { new: true })
            .select('-_id')
            .lean();
    }
};
TagsDatabase = __decorate([
    (0, common_1.Injectable)()
], TagsDatabase);
exports.TagsDatabase = TagsDatabase;
//# sourceMappingURL=index.js.map