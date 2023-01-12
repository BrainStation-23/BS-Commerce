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
exports.CompareDataDto = exports.CompareItemsDto = exports.AddToCompareDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class AddToCompareDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1dca45d8-b6d1-4767-9edb-6c9578913ca9' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(36),
    (0, class_validator_1.MinLength)(36),
    __metadata("design:type", String)
], AddToCompareDto.prototype, "productId", void 0);
exports.AddToCompareDto = AddToCompareDto;
class CompareItemsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CompareItemsDto.prototype, "productId", void 0);
exports.CompareItemsDto = CompareItemsDto;
class CompareDataDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CompareDataDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CompareDataDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [CompareItemsDto] }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], CompareDataDto.prototype, "items", void 0);
exports.CompareDataDto = CompareDataDto;
//# sourceMappingURL=test.dto.js.map