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
exports.ProductCount = exports.Count = exports.ProductArrayWithCountResponse = exports.ProductArrayWithCount = exports.ProductArrayWithBrandAndManufacturersResponse = exports.GetCustomerAllProductsResponse = exports.ProductArrayResponse = exports.ProductDeletedResponse = exports.ProductSuccessMessage = exports.ProductResponse = exports.UpdateProductsForBrandBody = exports.GetAllProductsQueryInput = exports.GetCustomerAllProductsQueryInput = exports.SearchConditionInput = exports.UpdateProductInput = exports.GraphqlProductInput = exports.GraphqlProduct = exports.UpdateProductManufacturerInput = exports.GraphqlProductManufacture = exports.UpdateProductCategoryInput = exports.GraphqlProductCategory = exports.GraphqlProductPhoto = exports.UpdateProductMetaInput = exports.GraphqlProductMeta = exports.GraphqlProductMetaInput = exports.UpdateProductInfoInput = exports.GraphqlProductInfo = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let GraphqlProductInfo = class GraphqlProductInfo {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GraphqlProductInfo.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GraphqlProductInfo.prototype, "shortDescription", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GraphqlProductInfo.prototype, "fullDescription", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GraphqlProductInfo.prototype, "sku", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], GraphqlProductInfo.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], GraphqlProductInfo.prototype, "oldPrice", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], GraphqlProductInfo.prototype, "cost", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], GraphqlProductInfo.prototype, "showOnHomePage", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], GraphqlProductInfo.prototype, "includeInTopMenu", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], GraphqlProductInfo.prototype, "allowToSelectPageSize", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], GraphqlProductInfo.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], GraphqlProductInfo.prototype, "displayOrder", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], GraphqlProductInfo.prototype, "isFeatured", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime, { nullable: true }),
    __metadata("design:type", Date)
], GraphqlProductInfo.prototype, "publishDate", void 0);
GraphqlProductInfo = __decorate([
    (0, graphql_1.ObjectType)('ProductInfo'),
    (0, graphql_1.InputType)('ProductInfoInput')
], GraphqlProductInfo);
exports.GraphqlProductInfo = GraphqlProductInfo;
let UpdateProductInfoInput = class UpdateProductInfoInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProductInfoInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProductInfoInput.prototype, "shortDescription", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProductInfoInput.prototype, "fullDescription", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProductInfoInput.prototype, "sku", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], UpdateProductInfoInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], UpdateProductInfoInput.prototype, "oldPrice", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], UpdateProductInfoInput.prototype, "cost", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], UpdateProductInfoInput.prototype, "showOnHomePage", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], UpdateProductInfoInput.prototype, "includeInTopMenu", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], UpdateProductInfoInput.prototype, "allowToSelectPageSize", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], UpdateProductInfoInput.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], UpdateProductInfoInput.prototype, "displayOrder", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], UpdateProductInfoInput.prototype, "isFeatured", void 0);
UpdateProductInfoInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateProductInfoInput);
exports.UpdateProductInfoInput = UpdateProductInfoInput;
let GraphqlProductMetaInput = class GraphqlProductMetaInput {
};
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], GraphqlProductMetaInput.prototype, "keywords", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GraphqlProductMetaInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GraphqlProductMetaInput.prototype, "description", void 0);
GraphqlProductMetaInput = __decorate([
    (0, graphql_1.InputType)('ProductMetaInput')
], GraphqlProductMetaInput);
exports.GraphqlProductMetaInput = GraphqlProductMetaInput;
let GraphqlProductMeta = class GraphqlProductMeta {
};
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], GraphqlProductMeta.prototype, "keywords", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GraphqlProductMeta.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GraphqlProductMeta.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GraphqlProductMeta.prototype, "friendlyPageName", void 0);
GraphqlProductMeta = __decorate([
    (0, graphql_1.ObjectType)('ProductMeta')
], GraphqlProductMeta);
exports.GraphqlProductMeta = GraphqlProductMeta;
let UpdateProductMetaInput = class UpdateProductMetaInput {
};
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], UpdateProductMetaInput.prototype, "keywords", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProductMetaInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProductMetaInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProductMetaInput.prototype, "friendlyPageName", void 0);
UpdateProductMetaInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateProductMetaInput);
exports.UpdateProductMetaInput = UpdateProductMetaInput;
let GraphqlProductPhoto = class GraphqlProductPhoto {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GraphqlProductPhoto.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GraphqlProductPhoto.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GraphqlProductPhoto.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GraphqlProductPhoto.prototype, "alt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], GraphqlProductPhoto.prototype, "displayOrder", void 0);
GraphqlProductPhoto = __decorate([
    (0, graphql_1.ObjectType)('ProductPhoto'),
    (0, graphql_1.InputType)('ProductPhotoInput')
], GraphqlProductPhoto);
exports.GraphqlProductPhoto = GraphqlProductPhoto;
let GraphqlProductCategory = class GraphqlProductCategory {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GraphqlProductCategory.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GraphqlProductCategory.prototype, "name", void 0);
GraphqlProductCategory = __decorate([
    (0, graphql_1.ObjectType)('ProductCategory'),
    (0, graphql_1.InputType)('ProductCategoryInput')
], GraphqlProductCategory);
exports.GraphqlProductCategory = GraphqlProductCategory;
let UpdateProductCategoryInput = class UpdateProductCategoryInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProductCategoryInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProductCategoryInput.prototype, "name", void 0);
UpdateProductCategoryInput = __decorate([
    (0, graphql_1.InputType)('UpdateProductCategoryInput')
], UpdateProductCategoryInput);
exports.UpdateProductCategoryInput = UpdateProductCategoryInput;
let GraphqlProductManufacture = class GraphqlProductManufacture {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GraphqlProductManufacture.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GraphqlProductManufacture.prototype, "name", void 0);
GraphqlProductManufacture = __decorate([
    (0, graphql_1.ObjectType)('ProductManufacturer'),
    (0, graphql_1.InputType)('ProductManufacturerInput')
], GraphqlProductManufacture);
exports.GraphqlProductManufacture = GraphqlProductManufacture;
let UpdateProductManufacturerInput = class UpdateProductManufacturerInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProductManufacturerInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProductManufacturerInput.prototype, "id", void 0);
UpdateProductManufacturerInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateProductManufacturerInput);
exports.UpdateProductManufacturerInput = UpdateProductManufacturerInput;
let GraphqlProduct = class GraphqlProduct {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GraphqlProduct.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => GraphqlProductInfo),
    __metadata("design:type", GraphqlProductInfo)
], GraphqlProduct.prototype, "info", void 0);
__decorate([
    (0, graphql_1.Field)(() => GraphqlProductMeta),
    __metadata("design:type", GraphqlProductMeta)
], GraphqlProduct.prototype, "meta", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], GraphqlProduct.prototype, "tags", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GraphqlProductPhoto], { nullable: true }),
    __metadata("design:type", Array)
], GraphqlProduct.prototype, "photos", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], GraphqlProduct.prototype, "brands", void 0);
__decorate([
    (0, graphql_1.Field)(() => GraphqlProductManufacture, { nullable: true }),
    __metadata("design:type", GraphqlProductManufacture)
], GraphqlProduct.prototype, "manufacturer", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GraphqlProductCategory]),
    __metadata("design:type", Array)
], GraphqlProduct.prototype, "categories", void 0);
GraphqlProduct = __decorate([
    (0, graphql_1.ObjectType)('Product')
], GraphqlProduct);
exports.GraphqlProduct = GraphqlProduct;
let GraphqlProductInput = class GraphqlProductInput {
};
__decorate([
    (0, graphql_1.Field)(() => GraphqlProductInfo),
    __metadata("design:type", GraphqlProductInfo)
], GraphqlProductInput.prototype, "info", void 0);
__decorate([
    (0, graphql_1.Field)(() => GraphqlProductMetaInput, { nullable: true }),
    __metadata("design:type", GraphqlProductMetaInput)
], GraphqlProductInput.prototype, "meta", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], GraphqlProductInput.prototype, "tags", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GraphqlProductPhoto], { nullable: true }),
    __metadata("design:type", Array)
], GraphqlProductInput.prototype, "photos", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], GraphqlProductInput.prototype, "brands", void 0);
__decorate([
    (0, graphql_1.Field)(() => GraphqlProductManufacture, { nullable: true }),
    __metadata("design:type", GraphqlProductManufacture)
], GraphqlProductInput.prototype, "manufacturer", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GraphqlProductCategory]),
    __metadata("design:type", Array)
], GraphqlProductInput.prototype, "categories", void 0);
GraphqlProductInput = __decorate([
    (0, graphql_1.InputType)('ProductInput')
], GraphqlProductInput);
exports.GraphqlProductInput = GraphqlProductInput;
let UpdateProductInput = class UpdateProductInput {
};
__decorate([
    (0, graphql_1.Field)(() => UpdateProductInfoInput, { nullable: true }),
    __metadata("design:type", UpdateProductInfoInput)
], UpdateProductInput.prototype, "info", void 0);
__decorate([
    (0, graphql_1.Field)(() => UpdateProductMetaInput, { nullable: true }),
    __metadata("design:type", UpdateProductMetaInput)
], UpdateProductInput.prototype, "meta", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], UpdateProductInput.prototype, "tags", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GraphqlProductPhoto], { nullable: true }),
    __metadata("design:type", Array)
], UpdateProductInput.prototype, "photos", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], UpdateProductInput.prototype, "brands", void 0);
__decorate([
    (0, graphql_1.Field)(() => UpdateProductManufacturerInput, { nullable: true }),
    __metadata("design:type", UpdateProductManufacturerInput)
], UpdateProductInput.prototype, "manufacturer", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UpdateProductCategoryInput], { nullable: true }),
    __metadata("design:type", Array)
], UpdateProductInput.prototype, "categories", void 0);
UpdateProductInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateProductInput);
exports.UpdateProductInput = UpdateProductInput;
let SearchConditionInput = class SearchConditionInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], SearchConditionInput.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], SearchConditionInput.prototype, "limit", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], SearchConditionInput.prototype, "brand", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], SearchConditionInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], SearchConditionInput.prototype, "productName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], SearchConditionInput.prototype, "isFeatured", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], SearchConditionInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)({
        nullable: true,
        description: 'Price Low to High -> asc or High to Low -> desc',
    }),
    (0, class_validator_1.IsIn)(['asc', 'desc']),
    __metadata("design:type", String)
], SearchConditionInput.prototype, "orderBy", void 0);
SearchConditionInput = __decorate([
    (0, graphql_1.InputType)()
], SearchConditionInput);
exports.SearchConditionInput = SearchConditionInput;
let GetCustomerAllProductsQueryInput = class GetCustomerAllProductsQueryInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], GetCustomerAllProductsQueryInput.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], GetCustomerAllProductsQueryInput.prototype, "limit", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GetCustomerAllProductsQueryInput.prototype, "brand", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GetCustomerAllProductsQueryInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GetCustomerAllProductsQueryInput.prototype, "productName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], GetCustomerAllProductsQueryInput.prototype, "isFeatured", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GetCustomerAllProductsQueryInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)({
        nullable: true,
        description: 'Price Low to High -> asc or High to Low -> desc',
    }),
    (0, class_validator_1.IsIn)(['asc', 'desc']),
    __metadata("design:type", String)
], GetCustomerAllProductsQueryInput.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], GetCustomerAllProductsQueryInput.prototype, "minPrice", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], GetCustomerAllProductsQueryInput.prototype, "maxPrice", void 0);
GetCustomerAllProductsQueryInput = __decorate([
    (0, graphql_1.InputType)()
], GetCustomerAllProductsQueryInput);
exports.GetCustomerAllProductsQueryInput = GetCustomerAllProductsQueryInput;
let GetAllProductsQueryInput = class GetAllProductsQueryInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], GetAllProductsQueryInput.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], GetAllProductsQueryInput.prototype, "limit", void 0);
GetAllProductsQueryInput = __decorate([
    (0, graphql_1.InputType)()
], GetAllProductsQueryInput);
exports.GetAllProductsQueryInput = GetAllProductsQueryInput;
let UpdateProductsForBrandBody = class UpdateProductsForBrandBody {
};
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], UpdateProductsForBrandBody.prototype, "productIds", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateProductsForBrandBody.prototype, "brandId", void 0);
UpdateProductsForBrandBody = __decorate([
    (0, graphql_1.InputType)()
], UpdateProductsForBrandBody);
exports.UpdateProductsForBrandBody = UpdateProductsForBrandBody;
let ProductResponse = class ProductResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ProductResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => GraphqlProduct, { nullable: true }),
    __metadata("design:type", GraphqlProduct)
], ProductResponse.prototype, "data", void 0);
ProductResponse = __decorate([
    (0, graphql_1.ObjectType)()
], ProductResponse);
exports.ProductResponse = ProductResponse;
let ProductSuccessMessage = class ProductSuccessMessage {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ProductSuccessMessage.prototype, "message", void 0);
ProductSuccessMessage = __decorate([
    (0, graphql_1.ObjectType)()
], ProductSuccessMessage);
exports.ProductSuccessMessage = ProductSuccessMessage;
let ProductDeletedResponse = class ProductDeletedResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ProductDeletedResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductSuccessMessage, { nullable: true }),
    __metadata("design:type", ProductSuccessMessage)
], ProductDeletedResponse.prototype, "data", void 0);
ProductDeletedResponse = __decorate([
    (0, graphql_1.ObjectType)()
], ProductDeletedResponse);
exports.ProductDeletedResponse = ProductDeletedResponse;
let ProductArrayResponse = class ProductArrayResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ProductArrayResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GraphqlProduct], { nullable: true }),
    __metadata("design:type", Array)
], ProductArrayResponse.prototype, "data", void 0);
ProductArrayResponse = __decorate([
    (0, graphql_1.ObjectType)()
], ProductArrayResponse);
exports.ProductArrayResponse = ProductArrayResponse;
let GetCustomerAllProductsResponse = class GetCustomerAllProductsResponse {
};
__decorate([
    (0, graphql_1.Field)(() => [GraphqlProduct], { nullable: true }),
    __metadata("design:type", Array)
], GetCustomerAllProductsResponse.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], GetCustomerAllProductsResponse.prototype, "manufacturers", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], GetCustomerAllProductsResponse.prototype, "brands", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], GetCustomerAllProductsResponse.prototype, "totalProducts", void 0);
GetCustomerAllProductsResponse = __decorate([
    (0, graphql_1.ObjectType)()
], GetCustomerAllProductsResponse);
exports.GetCustomerAllProductsResponse = GetCustomerAllProductsResponse;
let ProductArrayWithBrandAndManufacturersResponse = class ProductArrayWithBrandAndManufacturersResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ProductArrayWithBrandAndManufacturersResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => GetCustomerAllProductsResponse, { nullable: true }),
    __metadata("design:type", GetCustomerAllProductsResponse)
], ProductArrayWithBrandAndManufacturersResponse.prototype, "data", void 0);
ProductArrayWithBrandAndManufacturersResponse = __decorate([
    (0, graphql_1.ObjectType)()
], ProductArrayWithBrandAndManufacturersResponse);
exports.ProductArrayWithBrandAndManufacturersResponse = ProductArrayWithBrandAndManufacturersResponse;
let ProductArrayWithCount = class ProductArrayWithCount {
};
__decorate([
    (0, graphql_1.Field)(() => [GraphqlProduct]),
    __metadata("design:type", Array)
], ProductArrayWithCount.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ProductArrayWithCount.prototype, "count", void 0);
ProductArrayWithCount = __decorate([
    (0, graphql_1.ObjectType)()
], ProductArrayWithCount);
exports.ProductArrayWithCount = ProductArrayWithCount;
let ProductArrayWithCountResponse = class ProductArrayWithCountResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ProductArrayWithCountResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProductArrayWithCount, { nullable: true }),
    __metadata("design:type", ProductArrayWithCount)
], ProductArrayWithCountResponse.prototype, "data", void 0);
ProductArrayWithCountResponse = __decorate([
    (0, graphql_1.ObjectType)()
], ProductArrayWithCountResponse);
exports.ProductArrayWithCountResponse = ProductArrayWithCountResponse;
let Count = class Count {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Count.prototype, "count", void 0);
Count = __decorate([
    (0, graphql_1.ObjectType)()
], Count);
exports.Count = Count;
let ProductCount = class ProductCount {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ProductCount.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => Count, { nullable: true }),
    __metadata("design:type", Count)
], ProductCount.prototype, "data", void 0);
ProductCount = __decorate([
    (0, graphql_1.ObjectType)()
], ProductCount);
exports.ProductCount = ProductCount;
//# sourceMappingURL=product.model.js.map