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
exports.DeleteCartResponse = exports.DeleteMessageSchema = exports.CartResponse = exports.Cart = exports.deleteCartItemRequestSchema = exports.updateCartItemRequestSchema = exports.deleteCartRequestSchema = exports.ItemInput = exports.CartItem = exports.CartProductSchema = exports.CartProductMetaType = exports.CartProductPhotoSchema = exports.CartProductInfoSchema = void 0;
const graphql_1 = require("@nestjs/graphql");
let CartProductInfoSchema = class CartProductInfoSchema {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CartProductInfoSchema.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CartProductInfoSchema.prototype, "shortDescription", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CartProductInfoSchema.prototype, "fullDescription", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CartProductInfoSchema.prototype, "sku", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CartProductInfoSchema.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CartProductInfoSchema.prototype, "oldPrice", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CartProductInfoSchema.prototype, "cost", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], CartProductInfoSchema.prototype, "showOnHomePage", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], CartProductInfoSchema.prototype, "includeInTopMenu", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], CartProductInfoSchema.prototype, "allowToSelectPageSize", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], CartProductInfoSchema.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], CartProductInfoSchema.prototype, "displayOrder", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], CartProductInfoSchema.prototype, "isFeatured", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], CartProductInfoSchema.prototype, "publishDate", void 0);
CartProductInfoSchema = __decorate([
    (0, graphql_1.ObjectType)()
], CartProductInfoSchema);
exports.CartProductInfoSchema = CartProductInfoSchema;
let CartProductPhotoSchema = class CartProductPhotoSchema {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CartProductPhotoSchema.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CartProductPhotoSchema.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CartProductPhotoSchema.prototype, "alt", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], CartProductPhotoSchema.prototype, "displayOrder", void 0);
CartProductPhotoSchema = __decorate([
    (0, graphql_1.ObjectType)()
], CartProductPhotoSchema);
exports.CartProductPhotoSchema = CartProductPhotoSchema;
let CartProductMetaType = class CartProductMetaType {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CartProductMetaType.prototype, "friendlyPageName", void 0);
CartProductMetaType = __decorate([
    (0, graphql_1.ObjectType)()
], CartProductMetaType);
exports.CartProductMetaType = CartProductMetaType;
let CartProductSchema = class CartProductSchema {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CartProductSchema.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => CartProductInfoSchema),
    __metadata("design:type", CartProductInfoSchema)
], CartProductSchema.prototype, "info", void 0);
__decorate([
    (0, graphql_1.Field)(() => CartProductMetaType),
    __metadata("design:type", CartProductMetaType)
], CartProductSchema.prototype, "meta", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CartProductPhotoSchema], { nullable: true }),
    __metadata("design:type", Array)
], CartProductSchema.prototype, "photos", void 0);
CartProductSchema = __decorate([
    (0, graphql_1.ObjectType)()
], CartProductSchema);
exports.CartProductSchema = CartProductSchema;
let CartItem = class CartItem {
};
__decorate([
    (0, graphql_1.Field)(() => CartProductSchema, { nullable: true }),
    __metadata("design:type", CartProductSchema)
], CartItem.prototype, "product", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CartItem.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CartItem.prototype, "quantity", void 0);
CartItem = __decorate([
    (0, graphql_1.ObjectType)()
], CartItem);
exports.CartItem = CartItem;
let ItemInput = class ItemInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ItemInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], ItemInput.prototype, "quantity", void 0);
ItemInput = __decorate([
    (0, graphql_1.InputType)()
], ItemInput);
exports.ItemInput = ItemInput;
let deleteCartRequestSchema = class deleteCartRequestSchema {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], deleteCartRequestSchema.prototype, "cartId", void 0);
deleteCartRequestSchema = __decorate([
    (0, graphql_1.InputType)()
], deleteCartRequestSchema);
exports.deleteCartRequestSchema = deleteCartRequestSchema;
let updateCartItemRequestSchema = class updateCartItemRequestSchema {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], updateCartItemRequestSchema.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], updateCartItemRequestSchema.prototype, "quantity", void 0);
updateCartItemRequestSchema = __decorate([
    (0, graphql_1.InputType)()
], updateCartItemRequestSchema);
exports.updateCartItemRequestSchema = updateCartItemRequestSchema;
let deleteCartItemRequestSchema = class deleteCartItemRequestSchema {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], deleteCartItemRequestSchema.prototype, "productId", void 0);
deleteCartItemRequestSchema = __decorate([
    (0, graphql_1.InputType)()
], deleteCartItemRequestSchema);
exports.deleteCartItemRequestSchema = deleteCartItemRequestSchema;
let Cart = class Cart {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Cart.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Cart.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CartItem], { nullable: true }),
    __metadata("design:type", Array)
], Cart.prototype, "items", void 0);
Cart = __decorate([
    (0, graphql_1.ObjectType)()
], Cart);
exports.Cart = Cart;
let CartResponse = class CartResponse {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CartResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => Cart, { nullable: true }),
    __metadata("design:type", Cart)
], CartResponse.prototype, "data", void 0);
CartResponse = __decorate([
    (0, graphql_1.ObjectType)()
], CartResponse);
exports.CartResponse = CartResponse;
let DeleteMessageSchema = class DeleteMessageSchema {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DeleteMessageSchema.prototype, "message", void 0);
DeleteMessageSchema = __decorate([
    (0, graphql_1.ObjectType)()
], DeleteMessageSchema);
exports.DeleteMessageSchema = DeleteMessageSchema;
let DeleteCartResponse = class DeleteCartResponse {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], DeleteCartResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => DeleteMessageSchema, { nullable: true }),
    __metadata("design:type", DeleteMessageSchema)
], DeleteCartResponse.prototype, "data", void 0);
DeleteCartResponse = __decorate([
    (0, graphql_1.ObjectType)()
], DeleteCartResponse);
exports.DeleteCartResponse = DeleteCartResponse;
//# sourceMappingURL=cart.model.js.map