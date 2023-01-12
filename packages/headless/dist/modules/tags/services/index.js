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
exports.TagsService = void 0;
const common_1 = require("@nestjs/common");
const helper_interface_1 = require("../../../helper/helper.interface");
const repositories_1 = require("../repositories");
let TagsService = class TagsService {
    constructor(tagsRepo, helper) {
        this.tagsRepo = tagsRepo;
        this.helper = helper;
    }
    async getTags() {
        const tags = await this.tagsRepo.getTags({ isHomePageProductsTag: false });
        if (!tags)
            return this.helper.serviceResponse.errorResponse("NO_TAGS_FOUND", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(tags, common_1.HttpStatus.OK);
    }
    async getTag(tagsId) {
        const tags = await this.tagsRepo.getTag({ id: tagsId });
        if (!tags)
            return this.helper.serviceResponse.errorResponse("NO_TAGS_FOUND", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(tags, common_1.HttpStatus.OK);
    }
    async createTag(data) {
        const doesNameMatch = await this.tagsRepo.getTag({ name: data.name });
        if (doesNameMatch)
            return this.helper.serviceResponse.errorResponse("TAG_NAME_EXISTS", null, common_1.HttpStatus.BAD_REQUEST);
        const tag = await this.tagsRepo.createTag(data);
        if (!tag)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_CREATE_TAG", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(tag, common_1.HttpStatus.CREATED);
    }
    async getHomePageProductsTags() {
        const tags = await this.tagsRepo.getTags({ isHomePageProductsTag: true });
        if (!tags)
            return this.helper.serviceResponse.errorResponse("NO_TAGS_FOUND", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(tags, common_1.HttpStatus.OK);
    }
    async updateTag(tagId, data) {
        const doesTagNameMatch = data.name &&
            (await this.tagsRepo.getTag({ name: data.name, id: { $ne: tagId } }));
        if (doesTagNameMatch)
            return this.helper.serviceResponse.errorResponse("TAG_NAME_EXISTS", null, common_1.HttpStatus.BAD_REQUEST);
        const updatedTag = await this.tagsRepo.updateTag({ id: tagId }, data);
        if (!updatedTag)
            return this.helper.serviceResponse.errorResponse("CAN_NOT_UPDATE_TAG", null, common_1.HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(updatedTag, common_1.HttpStatus.OK);
    }
};
TagsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.TagsRepository, helper_interface_1.Helper])
], TagsService);
exports.TagsService = TagsService;
//# sourceMappingURL=index.js.map