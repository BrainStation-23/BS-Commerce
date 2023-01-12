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
exports.CartResolver = void 0;
const services_1 = require("../services");
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../../../decorators/auth.decorator");
const user_1 = require("../../../entity/user");
const cart_model_1 = require("./cart.model");
const auth_guard_1 = require("../../../guards/auth.guard");
const helper_interface_1 = require("../../../helper/helper.interface");
let CartResolver = class CartResolver {
    constructor(cartService, helper) {
        this.cartService = cartService;
        this.helper = helper;
    }
    async getCart(user) {
        const res = await this.cartService.getCart(user.id);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async addToCart(item, user) {
        const res = await this.cartService.addToCart(item, user.id);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async deleteCart(data) {
        const res = await this.cartService.deleteCart(data.cartId);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async updateCartItem(user, item) {
        const res = await this.cartService.updateCartItem(user.id, item);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async deleteCartItem(user, data) {
        const res = await this.cartService.deleteCartItem(user.id, data.productId);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async deleteAllCartItems(user) {
        const res = await this.cartService.deleteAllCartItems(user.id);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
};
__decorate([
    (0, graphql_1.Query)(() => cart_model_1.CartResponse, { nullable: true }),
    __param(0, (0, auth_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User]),
    __metadata("design:returntype", Promise)
], CartResolver.prototype, "getCart", null);
__decorate([
    (0, graphql_1.Mutation)(() => cart_model_1.CartResponse, { nullable: true }),
    __param(0, (0, graphql_1.Args)('item')),
    __param(1, (0, auth_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cart_model_1.ItemInput, user_1.User]),
    __metadata("design:returntype", Promise)
], CartResolver.prototype, "addToCart", null);
__decorate([
    (0, graphql_1.Mutation)(() => cart_model_1.DeleteCartResponse, { nullable: true }),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cart_model_1.deleteCartRequestSchema]),
    __metadata("design:returntype", Promise)
], CartResolver.prototype, "deleteCart", null);
__decorate([
    (0, graphql_1.Mutation)(() => cart_model_1.CartResponse, { nullable: true }),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, graphql_1.Args)('item')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User,
        cart_model_1.updateCartItemRequestSchema]),
    __metadata("design:returntype", Promise)
], CartResolver.prototype, "updateCartItem", null);
__decorate([
    (0, graphql_1.Mutation)(() => cart_model_1.CartResponse, { nullable: true }),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User,
        cart_model_1.deleteCartItemRequestSchema]),
    __metadata("design:returntype", Promise)
], CartResolver.prototype, "deleteCartItem", null);
__decorate([
    (0, graphql_1.Mutation)(() => cart_model_1.CartResponse, { nullable: true }),
    __param(0, (0, auth_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User]),
    __metadata("design:returntype", Promise)
], CartResolver.prototype, "deleteAllCartItems", null);
CartResolver = __decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['customer'])),
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [services_1.CartService, helper_interface_1.Helper])
], CartResolver);
exports.CartResolver = CartResolver;
//# sourceMappingURL=cart.resolver.js.map