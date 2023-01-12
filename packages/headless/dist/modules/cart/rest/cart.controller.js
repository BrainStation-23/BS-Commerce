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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("../services");
const user_1 = require("../../../entity/user");
const auth_decorator_1 = require("../../../decorators/auth.decorator");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../../../guards/auth.guard");
const addToCart_dto_1 = require("./dto/addToCart.dto");
const getCart_dto_1 = require("./dto/getCart.dto");
const deleteCart_dto_1 = require("./dto/deleteCart.dto");
const updateCartItem_dto_1 = require("./dto/updateCartItem.dto");
const deleteCartItem_dto_1 = require("./dto/deleteCartItem.dto");
const deleteAllCartItems_dto_1 = require("./dto/deleteAllCartItems.dto");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    async addToCart(item, user, res) {
        const _a = await this.cartService.addToCart(item, user.id), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async getCart(user, res) {
        const _a = await this.cartService.getCart(user.id), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async deleteCart(data, res) {
        const _a = await this.cartService.deleteCart(data.cartId), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async updateCartItem(user, item, res) {
        const _a = await this.cartService.updateCartItem(user.id, item), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async deleteCartItem(user, data, res) {
        const _a = await this.cartService.deleteCartItem(user.id, data.productId), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async deleteAllCartItems(user, res) {
        const _a = await this.cartService.deleteAllCartItems(user.id), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
        description: 'Add to Cart API',
        type: addToCart_dto_1.AddToCartSuccessResponseDto,
        status: common_1.HttpStatus.CREATED,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Error Response',
        type: addToCart_dto_1.AddToCartErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, auth_decorator_1.User)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addToCart_dto_1.AddToCartRequestDto,
        user_1.User, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "addToCart", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        description: 'Get cart API',
        type: getCart_dto_1.getCartSuccessResponseDto,
        status: common_1.HttpStatus.CREATED,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Error Response',
        type: getCart_dto_1.getCartErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "getCart", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        description: 'Delete cart API',
        type: deleteCart_dto_1.deleteCartSuccessResponseDto,
        status: common_1.HttpStatus.CREATED,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Error Response',
        type: deleteCart_dto_1.deleteCartErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deleteCart_dto_1.deleteCartRequestDto, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "deleteCart", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        description: 'Update Cart Item Api',
        type: updateCartItem_dto_1.updateCartItemSuccessResponseDto,
        status: common_1.HttpStatus.CREATED,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Error Response',
        type: updateCartItem_dto_1.updateCartItemErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    (0, common_1.Patch)('item'),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User,
        updateCartItem_dto_1.updateCartItemRequestDto, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "updateCartItem", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        description: 'Delete Cart Item Api',
        type: deleteCartItem_dto_1.deleteCartItemSuccessResponseDto,
        status: common_1.HttpStatus.CREATED,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Error Response',
        type: deleteCartItem_dto_1.deleteCartItemErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    (0, common_1.Delete)('item'),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User,
        deleteCartItem_dto_1.deleteCartItemRequestDto, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "deleteCartItem", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        description: 'Delete All Cart Items Api',
        type: deleteAllCartItems_dto_1.deleteAllCartItemsSuccessResponseDto,
        status: common_1.HttpStatus.CREATED,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Error Response',
        type: deleteAllCartItems_dto_1.deleteAllCartItemsErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    (0, common_1.Delete)('allitems'),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "deleteAllCartItems", null);
CartController = __decorate([
    (0, common_1.Controller)('cart'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['customer'])),
    (0, swagger_1.ApiTags)('Cart API'),
    __metadata("design:paramtypes", [services_1.CartService])
], CartController);
exports.CartController = CartController;
//# sourceMappingURL=cart.controller.js.map