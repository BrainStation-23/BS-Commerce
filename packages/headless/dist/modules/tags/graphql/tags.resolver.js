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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_guard_1 = require("../../../guards/auth.guard");
const helper_interface_1 = require("../../../helper/helper.interface");
const services_1 = require("../services");
const tags_model_1 = require("./tags.model");
let TagsResolver = class TagsResolver {
    constructor(tagsService, helper) {
        this.tagsService = tagsService;
        this.helper = helper;
    }
    async getTags() {
        const res = await this.tagsService.getTags();
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async getTag(tagId) {
        const res = await this.tagsService.getTag(tagId);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async getHomePageProductsTags() {
        const res = await this.tagsService.getHomePageProductsTags();
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async createTag(data) {
        const res = await this.tagsService.createTag(data);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async updateTag(tagId, data) {
        const res = await this.tagsService.updateTag(tagId, data);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
};
__decorate([
    (0, graphql_1.Query)(() => tags_model_1.TagsResponse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TagsResolver.prototype, "getTags", null);
__decorate([
    (0, graphql_1.Query)(() => tags_model_1.TagResponse),
    __param(0, (0, graphql_1.Args)('tagId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TagsResolver.prototype, "getTag", null);
__decorate([
    (0, graphql_1.Query)(() => tags_model_1.TagsResponse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TagsResolver.prototype, "getHomePageProductsTags", null);
__decorate([
    (0, graphql_1.Mutation)(() => tags_model_1.TagResponse),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tags_model_1.CreateTagInput]),
    __metadata("design:returntype", Promise)
], TagsResolver.prototype, "createTag", null);
__decorate([
    (0, graphql_1.Mutation)(() => tags_model_1.TagResponse),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    __param(0, (0, graphql_1.Args)('tagId')),
    __param(1, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, tags_model_1.UpdateTagInput]),
    __metadata("design:returntype", Promise)
], TagsResolver.prototype, "updateTag", null);
TagsResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [services_1.TagsService, helper_interface_1.Helper])
], TagsResolver);
exports.TagsResolver = TagsResolver;
//# sourceMappingURL=tags.resolver.js.map