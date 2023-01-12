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
exports.CreateOrderDto = exports.CreateOrderProductDto = exports.OrderAddressDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class OrderAddressDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test' }),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderAddressDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test' }),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderAddressDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test@mail.com' }),
    (0, class_validator_1.MaxLength)(60),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], OrderAddressDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test' }),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(100),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderAddressDto.prototype, "addressLine1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test' }),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(100),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderAddressDto.prototype, "addressLine2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test' }),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(100),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderAddressDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test' }),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], OrderAddressDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '3421' }),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderAddressDto.prototype, "postCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '01314998877' }),
    (0, class_validator_1.MinLength)(10),
    (0, class_validator_1.MaxLength)(15),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderAddressDto.prototype, "phoneNumber", void 0);
exports.OrderAddressDto = OrderAddressDto;
class CreateOrderProductDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '052eeb8f-6a08-438d-8799-2fb0bb8d7d98' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrderProductDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test' }),
    (0, class_validator_1.MaxLength)(100),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrderProductDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateOrderProductDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateOrderProductDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'string' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateOrderProductDto.prototype, "sku", void 0);
exports.CreateOrderProductDto = CreateOrderProductDto;
class CreateOrderDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "shippingCost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: OrderAddressDto }),
    (0, class_transformer_1.Type)(() => OrderAddressDto),
    (0, class_validator_1.ValidateNested)({ always: true }),
    __metadata("design:type", OrderAddressDto)
], CreateOrderDto.prototype, "billingAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: OrderAddressDto }),
    (0, class_transformer_1.Type)(() => OrderAddressDto),
    (0, class_validator_1.ValidateNested)({ always: true }),
    __metadata("design:type", OrderAddressDto)
], CreateOrderDto.prototype, "shippingAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "shippingMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "productCost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [CreateOrderProductDto],
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => CreateOrderProductDto),
    (0, class_validator_1.ValidateNested)({ always: true }),
    __metadata("design:type", Array)
], CreateOrderDto.prototype, "products", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(300),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "stripeToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(300),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "stripeCustomerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(300),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "stripeChargeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(300),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "paypalPaymentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(300),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "paypalRedirectUrl", void 0);
exports.CreateOrderDto = CreateOrderDto;
//# sourceMappingURL=order.create.dto.js.map