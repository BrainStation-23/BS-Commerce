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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishListController = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("../services");
const auth_decorator_1 = require("../../../decorators/auth.decorator");
const user_1 = require("../../../entity/user");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../../../guards/auth.guard");
const dto_1 = require("./dto");
let WishListController = class WishListController {
    constructor(wishListService) {
        this.wishListService = wishListService;
    }
    async addToWishList(item, user, res) {
        const _a = await this.wishListService.addToWishList(user.id, item), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async getUserWishlist(user, res) {
        const _a = await this.wishListService.getUserWishlist(user.id), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async updateWishlistItem(item, user, res) {
        const _a = await this.wishListService.updateWishlistItem(item, user.id), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async deleteWishlistItem(params, user, res) {
        const _a = await this.wishListService.deleteWishlistItem(params.productId, user.id), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async deleteAllWishlistItems(user, res) {
        const _a = await this.wishListService.deleteAllWishlistItems(user.id), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async deleteWishlist(params, res) {
        const _a = await this.wishListService.deleteWishlist(params.wishlistId), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
};
__decorate([
    (0, common_1.Post)('wishlist'),
    (0, swagger_1.ApiResponse)({
        description: 'Add to Wishlist Success Response',
        type: dto_1.AddToWishlistSuccessResponseDto,
        status: common_1.HttpStatus.CREATED,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Add to Wishlist Error Response',
        type: dto_1.AddToWishlistErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, auth_decorator_1.User)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.AddToWishlistRequestDto,
        user_1.User, Object]),
    __metadata("design:returntype", Promise)
], WishListController.prototype, "addToWishList", null);
__decorate([
    (0, common_1.Get)('wishlist'),
    (0, swagger_1.ApiResponse)({
        description: 'Get User Wishlist Success Response',
        type: dto_1.getUserWishlistSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Get User Wishlist Error Response',
        type: dto_1.getUserWishlistErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User, Object]),
    __metadata("design:returntype", Promise)
], WishListController.prototype, "getUserWishlist", null);
__decorate([
    (0, common_1.Patch)('wishlist/item'),
    (0, swagger_1.ApiResponse)({
        description: 'Update Wishlist Item Success Response',
        type: dto_1.updateWishlistItemSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Update Wishlist Item Error Response',
        type: dto_1.updateWishlistItemErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, auth_decorator_1.User)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.updateWishlistItemRequestBodyDto,
        user_1.User, Object]),
    __metadata("design:returntype", Promise)
], WishListController.prototype, "updateWishlistItem", null);
__decorate([
    (0, common_1.Delete)('wishlist/items/:productId'),
    (0, swagger_1.ApiResponse)({
        description: 'Delete Wishlist Item Success Response',
        type: dto_1.deleteWishlistItemSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Delete Wishlist Item Error Response',
        type: dto_1.deleteWishlistItemErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, auth_decorator_1.User)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.deleteWishlistItemPramsDto,
        user_1.User, Object]),
    __metadata("design:returntype", Promise)
], WishListController.prototype, "deleteWishlistItem", null);
__decorate([
    (0, common_1.Delete)('wishlist/allitems'),
    (0, swagger_1.ApiResponse)({
        description: 'Delete All Wishlist Items Success Response',
        type: dto_1.deleteAllWishlistItemsSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Delete All Wishlist Items Error Response',
        type: dto_1.deleteAllWishlistItemsErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User, Object]),
    __metadata("design:returntype", Promise)
], WishListController.prototype, "deleteAllWishlistItems", null);
__decorate([
    (0, common_1.Delete)('wishlist/:wishlistId'),
    (0, swagger_1.ApiResponse)({
        description: 'Delete Wishlist Success Response',
        type: dto_1.deleteWishlistSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Delete Wishlist Error Response',
        type: dto_1.deleteWishlistErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.deleteWishlistPramsDto, Object]),
    __metadata("design:returntype", Promise)
], WishListController.prototype, "deleteWishlist", null);
WishListController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['customer'])),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Customer Wishlist API'),
    __metadata("design:paramtypes", [services_1.WishListService])
], WishListController);
exports.WishListController = WishListController;
//# sourceMappingURL=index.js.map