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
exports.CategoryListResponse = exports.CategoryListSchema = exports.NestedCategoryListSchema = exports.subCategoryListSchema = exports.CategoryResponse = exports.getCategoryBySlugRequestSchema = exports.getCategoryRequestSchema = exports.createCategoryRequestSchema = exports.CategorySchema = exports.CategoryMetaRequestSchema = exports.CategoryMetaSchema = exports.AncestorSchema = exports.PhotoSchema = exports.PhotoRequestSchema = void 0;
const graphql_1 = require("@nestjs/graphql");
const categoryList_scalar_1 = require("../../../internal/graphql/scalar/categoryList.scalar");
let PhotoRequestSchema = class PhotoRequestSchema {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PhotoRequestSchema.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PhotoRequestSchema.prototype, "alt", void 0);
PhotoRequestSchema = __decorate([
    (0, graphql_1.InputType)()
], PhotoRequestSchema);
exports.PhotoRequestSchema = PhotoRequestSchema;
let PhotoSchema = class PhotoSchema {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], PhotoSchema.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PhotoSchema.prototype, "alt", void 0);
PhotoSchema = __decorate([
    (0, graphql_1.ObjectType)()
], PhotoSchema);
exports.PhotoSchema = PhotoSchema;
let AncestorSchema = class AncestorSchema {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AncestorSchema.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AncestorSchema.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], AncestorSchema.prototype, "level", void 0);
AncestorSchema = __decorate([
    (0, graphql_1.ObjectType)()
], AncestorSchema);
exports.AncestorSchema = AncestorSchema;
let CategoryMetaSchema = class CategoryMetaSchema {
};
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], CategoryMetaSchema.prototype, "keywords", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CategoryMetaSchema.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CategoryMetaSchema.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CategoryMetaSchema.prototype, "SEFN", void 0);
CategoryMetaSchema = __decorate([
    (0, graphql_1.ObjectType)()
], CategoryMetaSchema);
exports.CategoryMetaSchema = CategoryMetaSchema;
let CategoryMetaRequestSchema = class CategoryMetaRequestSchema {
};
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], CategoryMetaRequestSchema.prototype, "keywords", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CategoryMetaRequestSchema.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CategoryMetaRequestSchema.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CategoryMetaRequestSchema.prototype, "SEFN", void 0);
CategoryMetaRequestSchema = __decorate([
    (0, graphql_1.InputType)()
], CategoryMetaRequestSchema);
exports.CategoryMetaRequestSchema = CategoryMetaRequestSchema;
let CategorySchema = class CategorySchema {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CategorySchema.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CategorySchema.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CategorySchema.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CategorySchema.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => PhotoSchema),
    __metadata("design:type", PhotoSchema)
], CategorySchema.prototype, "photo", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], CategorySchema.prototype, "showOnHomePage", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], CategorySchema.prototype, "includeInTopMenu", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], CategorySchema.prototype, "allowToSelectPageSize", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], CategorySchema.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CategorySchema.prototype, "displayOrder", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CategorySchema.prototype, "rootPath", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AncestorSchema]),
    __metadata("design:type", Array)
], CategorySchema.prototype, "ancestors", void 0);
__decorate([
    (0, graphql_1.Field)(() => CategoryMetaSchema),
    __metadata("design:type", CategoryMetaSchema)
], CategorySchema.prototype, "meta", void 0);
CategorySchema = __decorate([
    (0, graphql_1.ObjectType)()
], CategorySchema);
exports.CategorySchema = CategorySchema;
let createCategoryRequestSchema = class createCategoryRequestSchema {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], createCategoryRequestSchema.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], createCategoryRequestSchema.prototype, "parentSlug", void 0);
__decorate([
    (0, graphql_1.Field)(() => PhotoRequestSchema, { nullable: true }),
    __metadata("design:type", PhotoRequestSchema)
], createCategoryRequestSchema.prototype, "photo", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], createCategoryRequestSchema.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], createCategoryRequestSchema.prototype, "showOnHomePage", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], createCategoryRequestSchema.prototype, "includeInTopMenu", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], createCategoryRequestSchema.prototype, "allowToSelectPageSize", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], createCategoryRequestSchema.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], createCategoryRequestSchema.prototype, "displayOrder", void 0);
__decorate([
    (0, graphql_1.Field)(() => CategoryMetaRequestSchema, { nullable: true }),
    __metadata("design:type", CategoryMetaRequestSchema)
], createCategoryRequestSchema.prototype, "meta", void 0);
createCategoryRequestSchema = __decorate([
    (0, graphql_1.InputType)()
], createCategoryRequestSchema);
exports.createCategoryRequestSchema = createCategoryRequestSchema;
let getCategoryRequestSchema = class getCategoryRequestSchema {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], getCategoryRequestSchema.prototype, "categoryId", void 0);
getCategoryRequestSchema = __decorate([
    (0, graphql_1.InputType)()
], getCategoryRequestSchema);
exports.getCategoryRequestSchema = getCategoryRequestSchema;
let getCategoryBySlugRequestSchema = class getCategoryBySlugRequestSchema {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], getCategoryBySlugRequestSchema.prototype, "slug", void 0);
getCategoryBySlugRequestSchema = __decorate([
    (0, graphql_1.InputType)()
], getCategoryBySlugRequestSchema);
exports.getCategoryBySlugRequestSchema = getCategoryBySlugRequestSchema;
let CategoryResponse = class CategoryResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CategoryResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => CategorySchema, { nullable: true }),
    __metadata("design:type", CategorySchema)
], CategoryResponse.prototype, "data", void 0);
CategoryResponse = __decorate([
    (0, graphql_1.ObjectType)()
], CategoryResponse);
exports.CategoryResponse = CategoryResponse;
let subCategoryListSchema = class subCategoryListSchema {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], subCategoryListSchema.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], subCategoryListSchema.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => PhotoSchema),
    __metadata("design:type", PhotoSchema)
], subCategoryListSchema.prototype, "photo", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], subCategoryListSchema.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], subCategoryListSchema.prototype, "displayOrder", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], subCategoryListSchema.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AncestorSchema]),
    __metadata("design:type", Array)
], subCategoryListSchema.prototype, "ancestors", void 0);
__decorate([
    (0, graphql_1.Field)(() => categoryList_scalar_1.ObjectScalarType, { nullable: true }),
    __metadata("design:type", Array)
], subCategoryListSchema.prototype, "subCategories", void 0);
subCategoryListSchema = __decorate([
    (0, graphql_1.ObjectType)()
], subCategoryListSchema);
exports.subCategoryListSchema = subCategoryListSchema;
let NestedCategoryListSchema = class NestedCategoryListSchema {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], NestedCategoryListSchema.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], NestedCategoryListSchema.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => PhotoSchema),
    __metadata("design:type", PhotoSchema)
], NestedCategoryListSchema.prototype, "photo", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], NestedCategoryListSchema.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], NestedCategoryListSchema.prototype, "displayOrder", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], NestedCategoryListSchema.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AncestorSchema]),
    __metadata("design:type", Array)
], NestedCategoryListSchema.prototype, "ancestors", void 0);
__decorate([
    (0, graphql_1.Field)(() => [subCategoryListSchema], { nullable: true }),
    __metadata("design:type", Array)
], NestedCategoryListSchema.prototype, "subCategories", void 0);
NestedCategoryListSchema = __decorate([
    (0, graphql_1.ObjectType)()
], NestedCategoryListSchema);
exports.NestedCategoryListSchema = NestedCategoryListSchema;
let CategoryListSchema = class CategoryListSchema {
};
__decorate([
    (0, graphql_1.Field)(() => [NestedCategoryListSchema]),
    __metadata("design:type", Array)
], CategoryListSchema.prototype, "categories", void 0);
CategoryListSchema = __decorate([
    (0, graphql_1.ObjectType)()
], CategoryListSchema);
exports.CategoryListSchema = CategoryListSchema;
let CategoryListResponse = class CategoryListResponse {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CategoryListResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => CategoryListSchema, { nullable: true }),
    __metadata("design:type", CategoryListSchema)
], CategoryListResponse.prototype, "data", void 0);
CategoryListResponse = __decorate([
    (0, graphql_1.ObjectType)()
], CategoryListResponse);
exports.CategoryListResponse = CategoryListResponse;
//# sourceMappingURL=category.model.js.map