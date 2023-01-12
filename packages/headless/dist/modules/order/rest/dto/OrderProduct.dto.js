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
exports.OrderProductDto = exports.OrderProductPhotoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class OrderProductPhotoDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderProductPhotoDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderProductPhotoDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderProductPhotoDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderProductPhotoDto.prototype, "alt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], OrderProductPhotoDto.prototype, "displayOrder", void 0);
exports.OrderProductPhotoDto = OrderProductPhotoDto;
class OrderProductDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '052eeb8f-6a08-438d-8799-2fb0bb8d7d98' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderProductDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test' }),
    (0, class_validator_1.MaxLength)(100),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderProductDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], OrderProductDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], OrderProductDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'string' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], OrderProductDto.prototype, "sku", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [OrderProductPhotoDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], OrderProductDto.prototype, "photos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], OrderProductDto.prototype, "totalPrice", void 0);
exports.OrderProductDto = OrderProductDto;
//# sourceMappingURL=OrderProduct.dto.js.map