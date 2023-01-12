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
exports.WishListResolver = void 0;
const services_1 = require("../services");
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../../../decorators/auth.decorator");
const user_1 = require("../../../entity/user");
const auth_guard_1 = require("../../../guards/auth.guard");
const wishlist_model_1 = require("./wishlist.model");
const helper_interface_1 = require("../../../helper/helper.interface");
let WishListResolver = class WishListResolver {
    constructor(wishListService, helper) {
        this.wishListService = wishListService;
        this.helper = helper;
    }
    async getUserWishlist(user) {
        const res = await this.wishListService.getUserWishlist(user.id);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async addToWishlist(item, user) {
        const res = await this.wishListService.addToWishList(user.id, item);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async deleteWishList(wishlistId) {
        const res = await this.wishListService.deleteWishlist(wishlistId);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async updateWishlistItem(item, user) {
        const res = await this.wishListService.updateWishlistItem(item, user.id);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async deleteWishlistItem(productId, user) {
        const res = await this.wishListService.deleteWishlistItem(productId, user.id);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async deleteAllWishlistItems(user) {
        const res = await this.wishListService.deleteAllWishlistItems(user.id);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
};
__decorate([
    (0, graphql_1.Query)(() => wishlist_model_1.WishListResponse),
    __param(0, (0, auth_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User]),
    __metadata("design:returntype", Promise)
], WishListResolver.prototype, "getUserWishlist", null);
__decorate([
    (0, graphql_1.Mutation)(() => wishlist_model_1.WishListResponse),
    __param(0, (0, graphql_1.Args)('item')),
    __param(1, (0, auth_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [wishlist_model_1.WishlistItemInput,
        user_1.User]),
    __metadata("design:returntype", Promise)
], WishListResolver.prototype, "addToWishlist", null);
__decorate([
    (0, graphql_1.Mutation)(() => wishlist_model_1.WishListResponseWithMessage),
    __param(0, (0, graphql_1.Args)('wishlistId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WishListResolver.prototype, "deleteWishList", null);
__decorate([
    (0, graphql_1.Mutation)(() => wishlist_model_1.WishListResponse),
    __param(0, (0, graphql_1.Args)('item')),
    __param(1, (0, auth_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [wishlist_model_1.WishlistItemInput,
        user_1.User]),
    __metadata("design:returntype", Promise)
], WishListResolver.prototype, "updateWishlistItem", null);
__decorate([
    (0, graphql_1.Mutation)(() => wishlist_model_1.WishListResponse),
    __param(0, (0, graphql_1.Args)('productId')),
    __param(1, (0, auth_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_1.User]),
    __metadata("design:returntype", Promise)
], WishListResolver.prototype, "deleteWishlistItem", null);
__decorate([
    (0, graphql_1.Mutation)(() => wishlist_model_1.WishListResponseWithMessage),
    __param(0, (0, auth_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User]),
    __metadata("design:returntype", Promise)
], WishListResolver.prototype, "deleteAllWishlistItems", null);
WishListResolver = __decorate([
    (0, graphql_1.Resolver)(),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['customer'])),
    __metadata("design:paramtypes", [services_1.WishListService,
        helper_interface_1.Helper])
], WishListResolver);
exports.WishListResolver = WishListResolver;
//# sourceMappingURL=wishlist.resolver.js.map