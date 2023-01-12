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
exports.GqlCompareResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const compare_1 = require("../../../entity/compare");
const user_1 = require("../../../entity/user");
const auth_guard_1 = require("../../../guards/auth.guard");
const auth_decorator_1 = require("../../../decorators/auth.decorator");
const services_1 = require("../services");
let GqlCompareResolver = class GqlCompareResolver {
    constructor(compareService) {
        this.compareService = compareService;
    }
    async getCompareByUserId(user) {
        return await this.compareService.getCompareByUserId(user.id);
    }
    async getCompareById(compareId, user) {
        return await this.compareService.getCompareById(user.id, compareId);
    }
    async addItemToCompare(user, body) {
        return await this.compareService.addItemToCompare(user.id, body.productId);
    }
    async deleteCompareById(user, compareId) {
        return await this.compareService.deleteCompareById(user.id, compareId);
    }
    async deleteItemByProductId(user, productId) {
        return await this.compareService.deleteItemByProductId(user.id, productId);
    }
    async deleteAllItemByUserId(user) {
        return await this.compareService.deleteAllItemByUserId(user.id);
    }
};
__decorate([
    (0, graphql_1.Query)(),
    __param(0, (0, auth_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User]),
    __metadata("design:returntype", Promise)
], GqlCompareResolver.prototype, "getCompareByUserId", null);
__decorate([
    (0, graphql_1.Query)(),
    __param(0, (0, graphql_1.Args)('compareId')),
    __param(1, (0, auth_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_1.User]),
    __metadata("design:returntype", Promise)
], GqlCompareResolver.prototype, "getCompareById", null);
__decorate([
    (0, graphql_1.Mutation)(),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, graphql_1.Args)('body')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User,
        compare_1.CompareItems]),
    __metadata("design:returntype", Promise)
], GqlCompareResolver.prototype, "addItemToCompare", null);
__decorate([
    (0, graphql_1.Mutation)(),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, graphql_1.Args)('compareId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User, String]),
    __metadata("design:returntype", Promise)
], GqlCompareResolver.prototype, "deleteCompareById", null);
__decorate([
    (0, graphql_1.Mutation)(),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, graphql_1.Args)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User, String]),
    __metadata("design:returntype", Promise)
], GqlCompareResolver.prototype, "deleteItemByProductId", null);
__decorate([
    (0, graphql_1.Mutation)(),
    __param(0, (0, auth_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User]),
    __metadata("design:returntype", Promise)
], GqlCompareResolver.prototype, "deleteAllItemByUserId", null);
GqlCompareResolver = __decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['customer'])),
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [services_1.CompareService])
], GqlCompareResolver);
exports.GqlCompareResolver = GqlCompareResolver;
//# sourceMappingURL=compare.resolver.js.map