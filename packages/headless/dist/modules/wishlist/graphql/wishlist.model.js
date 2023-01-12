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
exports.WishListResponseWithMessage = exports.WishListResponseMessage = exports.WishListResponse = exports.WishList = exports.WishlistItemInput = exports.WishlistItemType = exports.WishlistProductType = exports.WishlistProductMetaType = exports.WishlistProductInfoType = exports.WishlistProductPhotoType = void 0;
const graphql_1 = require("@nestjs/graphql");
let WishlistProductPhotoType = class WishlistProductPhotoType {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], WishlistProductPhotoType.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], WishlistProductPhotoType.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], WishlistProductPhotoType.prototype, "alt", void 0);
WishlistProductPhotoType = __decorate([
    (0, graphql_1.ObjectType)()
], WishlistProductPhotoType);
exports.WishlistProductPhotoType = WishlistProductPhotoType;
let WishlistProductInfoType = class WishlistProductInfoType {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WishlistProductInfoType.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WishlistProductInfoType.prototype, "shortDescription", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WishlistProductInfoType.prototype, "fullDescription", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WishlistProductInfoType.prototype, "sku", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], WishlistProductInfoType.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], WishlistProductInfoType.prototype, "oldPrice", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], WishlistProductInfoType.prototype, "cost", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], WishlistProductInfoType.prototype, "showOnHomePage", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], WishlistProductInfoType.prototype, "includeInTopMenu", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], WishlistProductInfoType.prototype, "allowToSelectPageSize", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], WishlistProductInfoType.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], WishlistProductInfoType.prototype, "displayOrder", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], WishlistProductInfoType.prototype, "isFeatured", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime, { nullable: true }),
    __metadata("design:type", Date)
], WishlistProductInfoType.prototype, "publishDate", void 0);
WishlistProductInfoType = __decorate([
    (0, graphql_1.ObjectType)()
], WishlistProductInfoType);
exports.WishlistProductInfoType = WishlistProductInfoType;
let WishlistProductMetaType = class WishlistProductMetaType {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WishlistProductMetaType.prototype, "friendlyPageName", void 0);
WishlistProductMetaType = __decorate([
    (0, graphql_1.ObjectType)()
], WishlistProductMetaType);
exports.WishlistProductMetaType = WishlistProductMetaType;
let WishlistProductType = class WishlistProductType {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WishlistProductType.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => WishlistProductInfoType),
    __metadata("design:type", WishlistProductInfoType)
], WishlistProductType.prototype, "info", void 0);
__decorate([
    (0, graphql_1.Field)(() => WishlistProductMetaType),
    __metadata("design:type", WishlistProductMetaType)
], WishlistProductType.prototype, "meta", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WishlistProductPhotoType], { nullable: true }),
    __metadata("design:type", Array)
], WishlistProductType.prototype, "photos", void 0);
WishlistProductType = __decorate([
    (0, graphql_1.ObjectType)()
], WishlistProductType);
exports.WishlistProductType = WishlistProductType;
let WishlistItemType = class WishlistItemType {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WishlistItemType.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => WishlistProductType, { nullable: true }),
    __metadata("design:type", WishlistProductType)
], WishlistItemType.prototype, "product", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], WishlistItemType.prototype, "quantity", void 0);
WishlistItemType = __decorate([
    (0, graphql_1.ObjectType)()
], WishlistItemType);
exports.WishlistItemType = WishlistItemType;
let WishlistItemInput = class WishlistItemInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WishlistItemInput.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], WishlistItemInput.prototype, "quantity", void 0);
WishlistItemInput = __decorate([
    (0, graphql_1.InputType)()
], WishlistItemInput);
exports.WishlistItemInput = WishlistItemInput;
let WishList = class WishList {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WishList.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WishList.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WishlistItemType], { nullable: true }),
    __metadata("design:type", Array)
], WishList.prototype, "items", void 0);
WishList = __decorate([
    (0, graphql_1.ObjectType)()
], WishList);
exports.WishList = WishList;
let WishListResponse = class WishListResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], WishListResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => WishList),
    __metadata("design:type", WishList)
], WishListResponse.prototype, "data", void 0);
WishListResponse = __decorate([
    (0, graphql_1.ObjectType)()
], WishListResponse);
exports.WishListResponse = WishListResponse;
let WishListResponseMessage = class WishListResponseMessage {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WishListResponseMessage.prototype, "message", void 0);
WishListResponseMessage = __decorate([
    (0, graphql_1.ObjectType)()
], WishListResponseMessage);
exports.WishListResponseMessage = WishListResponseMessage;
let WishListResponseWithMessage = class WishListResponseWithMessage {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], WishListResponseWithMessage.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => WishListResponseMessage),
    __metadata("design:type", WishListResponseMessage)
], WishListResponseWithMessage.prototype, "data", void 0);
WishListResponseWithMessage = __decorate([
    (0, graphql_1.ObjectType)()
], WishListResponseWithMessage);
exports.WishListResponseWithMessage = WishListResponseWithMessage;
//# sourceMappingURL=wishlist.model.js.map