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
exports.BrandResponse = exports.SingleBrandResponse = exports.BrandInput = exports.BrandModel = exports.BrandMetaInput = exports.BrandInfoInput = exports.BrandMetaModel = exports.BrandInfoModel = void 0;
const graphql_1 = require("@nestjs/graphql");
let BrandInfoModel = class BrandInfoModel {
};
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], BrandInfoModel.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], BrandInfoModel.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], BrandInfoModel.prototype, "allowToSelectPageSize", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], BrandInfoModel.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], BrandInfoModel.prototype, "displayOrder", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_1.Int], { nullable: true }),
    __metadata("design:type", Array)
], BrandInfoModel.prototype, "pageSizeOptions", void 0);
BrandInfoModel = __decorate([
    (0, graphql_1.ObjectType)({ description: 'The Brand Info model' })
], BrandInfoModel);
exports.BrandInfoModel = BrandInfoModel;
let BrandMetaModel = class BrandMetaModel {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], BrandMetaModel.prototype, "keywords", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], BrandMetaModel.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], BrandMetaModel.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], BrandMetaModel.prototype, "SEFN", void 0);
BrandMetaModel = __decorate([
    (0, graphql_1.ObjectType)({ description: 'The Brand Meta model' })
], BrandMetaModel);
exports.BrandMetaModel = BrandMetaModel;
let BrandInfoInput = class BrandInfoInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], BrandInfoInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], BrandInfoInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], BrandInfoInput.prototype, "allowToSelectPageSize", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], BrandInfoInput.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], BrandInfoInput.prototype, "displayOrder", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_1.Int], { nullable: true }),
    __metadata("design:type", Array)
], BrandInfoInput.prototype, "pageSizeOptions", void 0);
BrandInfoInput = __decorate([
    (0, graphql_1.InputType)({ description: 'Input for Brand Info' })
], BrandInfoInput);
exports.BrandInfoInput = BrandInfoInput;
let BrandMetaInput = class BrandMetaInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], BrandMetaInput.prototype, "keywords", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], BrandMetaInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], BrandMetaInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], BrandMetaInput.prototype, "SEFN", void 0);
BrandMetaInput = __decorate([
    (0, graphql_1.InputType)({ description: 'Input for Brand Meta' })
], BrandMetaInput);
exports.BrandMetaInput = BrandMetaInput;
let BrandModel = class BrandModel {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], BrandModel.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => BrandInfoModel, { nullable: false }),
    __metadata("design:type", BrandInfoModel)
], BrandModel.prototype, "info", void 0);
__decorate([
    (0, graphql_1.Field)(() => BrandMetaModel, { nullable: false }),
    __metadata("design:type", BrandMetaModel)
], BrandModel.prototype, "meta", void 0);
BrandModel = __decorate([
    (0, graphql_1.ObjectType)({ description: 'Brand Model' })
], BrandModel);
exports.BrandModel = BrandModel;
let BrandInput = class BrandInput {
};
__decorate([
    (0, graphql_1.Field)(() => BrandInfoInput, { nullable: false }),
    __metadata("design:type", BrandInfoInput)
], BrandInput.prototype, "info", void 0);
__decorate([
    (0, graphql_1.Field)(() => BrandMetaInput, { nullable: true }),
    __metadata("design:type", BrandMetaInput)
], BrandInput.prototype, "meta", void 0);
BrandInput = __decorate([
    (0, graphql_1.InputType)({ description: 'Input for Brand' })
], BrandInput);
exports.BrandInput = BrandInput;
let SingleBrandResponse = class SingleBrandResponse {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SingleBrandResponse.prototype, "error", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: false }),
    __metadata("design:type", Number)
], SingleBrandResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => BrandModel, { nullable: false }),
    __metadata("design:type", Object)
], SingleBrandResponse.prototype, "data", void 0);
SingleBrandResponse = __decorate([
    (0, graphql_1.ObjectType)()
], SingleBrandResponse);
exports.SingleBrandResponse = SingleBrandResponse;
let BrandResponse = class BrandResponse {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], BrandResponse.prototype, "error", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: false }),
    __metadata("design:type", Number)
], BrandResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => [BrandModel], { nullable: false }),
    __metadata("design:type", Array)
], BrandResponse.prototype, "data", void 0);
BrandResponse = __decorate([
    (0, graphql_1.ObjectType)()
], BrandResponse);
exports.BrandResponse = BrandResponse;
//# sourceMappingURL=brand.model.js.map