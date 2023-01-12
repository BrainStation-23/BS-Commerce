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
exports.AllManufacturersResponse = exports.ManufacturerResponse = exports.ManufacturerInput = exports.ManufacturersQuery = exports.ManufacturerSchemaGql = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let ManufacturerSEO = class ManufacturerSEO {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ManufacturerSEO.prototype, "metaKeyword", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ManufacturerSEO.prototype, "metaDescription", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ManufacturerSEO.prototype, "metaTitle", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ManufacturerSEO.prototype, "SEFN", void 0);
ManufacturerSEO = __decorate([
    (0, graphql_1.ObjectType)({ description: 'Manufacturer SEO data type' })
], ManufacturerSEO);
let ManufacturerSchemaGql = class ManufacturerSchemaGql {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ManufacturerSchemaGql.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ManufacturerSchemaGql.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ManufacturerSchemaGql.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ManufacturerSchemaGql.prototype, "picture", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], ManufacturerSchemaGql.prototype, "isPublished", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ManufacturerSchemaGql.prototype, "displayOrder", void 0);
__decorate([
    (0, graphql_1.Field)(() => ManufacturerSEO),
    __metadata("design:type", ManufacturerSEO)
], ManufacturerSchemaGql.prototype, "seo", void 0);
ManufacturerSchemaGql = __decorate([
    (0, graphql_1.ObjectType)({
        description: 'Manufacturer data type following Manufacturer model',
    })
], ManufacturerSchemaGql);
exports.ManufacturerSchemaGql = ManufacturerSchemaGql;
let ManufacturersQuery = class ManufacturersQuery {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], ManufacturersQuery.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], ManufacturersQuery.prototype, "limit", void 0);
ManufacturersQuery = __decorate([
    (0, graphql_1.InputType)()
], ManufacturersQuery);
exports.ManufacturersQuery = ManufacturersQuery;
let ManufacturerSEOInput = class ManufacturerSEOInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ManufacturerSEOInput.prototype, "metaKeyword", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ManufacturerSEOInput.prototype, "metaDescription", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ManufacturerSEOInput.prototype, "metaTitle", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ManufacturerSEOInput.prototype, "SEFN", void 0);
ManufacturerSEOInput = __decorate([
    (0, graphql_1.InputType)()
], ManufacturerSEOInput);
let ManufacturerInput = class ManufacturerInput {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], ManufacturerInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ManufacturerInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ManufacturerInput.prototype, "picture", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], ManufacturerInput.prototype, "isPublished", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], ManufacturerInput.prototype, "displayOrder", void 0);
__decorate([
    (0, graphql_1.Field)(() => ManufacturerSEOInput, { nullable: true }),
    __metadata("design:type", ManufacturerSEOInput)
], ManufacturerInput.prototype, "seo", void 0);
ManufacturerInput = __decorate([
    (0, graphql_1.InputType)()
], ManufacturerInput);
exports.ManufacturerInput = ManufacturerInput;
let ManufacturerWithMessage = class ManufacturerWithMessage {
};
__decorate([
    (0, graphql_1.Field)(() => ManufacturerSchemaGql),
    __metadata("design:type", ManufacturerSchemaGql)
], ManufacturerWithMessage.prototype, "manufacturer", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ManufacturerWithMessage.prototype, "message", void 0);
ManufacturerWithMessage = __decorate([
    (0, graphql_1.ObjectType)()
], ManufacturerWithMessage);
let ManufacturerResponse = class ManufacturerResponse {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ManufacturerResponse.prototype, "error", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ManufacturerResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => ManufacturerWithMessage, { nullable: true }),
    __metadata("design:type", ManufacturerWithMessage)
], ManufacturerResponse.prototype, "data", void 0);
ManufacturerResponse = __decorate([
    (0, graphql_1.ObjectType)({ description: 'Single manufacturer response with message' })
], ManufacturerResponse);
exports.ManufacturerResponse = ManufacturerResponse;
let ManufacturerArrayResponse = class ManufacturerArrayResponse {
};
__decorate([
    (0, graphql_1.Field)(() => [ManufacturerSchemaGql], { nullable: 'items' }),
    __metadata("design:type", Array)
], ManufacturerArrayResponse.prototype, "manufacturers", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ManufacturerArrayResponse.prototype, "total", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ManufacturerArrayResponse.prototype, "message", void 0);
ManufacturerArrayResponse = __decorate([
    (0, graphql_1.ObjectType)()
], ManufacturerArrayResponse);
let AllManufacturersResponse = class AllManufacturersResponse {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AllManufacturersResponse.prototype, "error", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], AllManufacturersResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => ManufacturerArrayResponse, { nullable: true }),
    __metadata("design:type", ManufacturerArrayResponse)
], AllManufacturersResponse.prototype, "data", void 0);
AllManufacturersResponse = __decorate([
    (0, graphql_1.ObjectType)({ description: 'Get all manufacturers response' })
], AllManufacturersResponse);
exports.AllManufacturersResponse = AllManufacturersResponse;
//# sourceMappingURL=manufacturer.model.js.map