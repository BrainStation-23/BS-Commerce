"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsRepository = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const tags_database_interface_1 = require("./tags.database.interface");
let TagsRepository = class TagsRepository {
    constructor(db) {
        this.db = db;
    }
    async getTags(query) {
        return await this.db.getTags(query);
    }
    async getTag(query) {
        return await this.db.getTag(query);
    }
    async createTag(data) {
        data.id = (0, crypto_1.randomUUID)();
        return await this.db.createTag(data);
    }
    async updateTag(query, data) {
        return await this.db.updateTag(query, data);
    }
};
TagsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [tags_database_interface_1.ITagsDatabase])
], TagsRepository);
exports.TagsRepository = TagsRepository;
//# sourceMappingURL=index.js.map