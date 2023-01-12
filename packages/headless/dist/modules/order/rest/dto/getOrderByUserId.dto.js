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
exports.OrderListByUserIdResponseDto = exports.OrderDetails = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const order_create_dto_1 = require("./order.create.dto");
const OrderProduct_dto_1 = require("./OrderProduct.dto");
class OrderDetails {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: order_create_dto_1.OrderAddressDto }),
    __metadata("design:type", order_create_dto_1.OrderAddressDto)
], OrderDetails.prototype, "billingAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: order_create_dto_1.OrderAddressDto }),
    __metadata("design:type", order_create_dto_1.OrderAddressDto)
], OrderDetails.prototype, "shippingAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderDetails.prototype, "shippingMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderDetails.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrderDetails.prototype, "productCost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [OrderProduct_dto_1.OrderProductDto] }),
    (0, class_transformer_1.Type)(() => OrderProduct_dto_1.OrderProductDto),
    __metadata("design:type", Array)
], OrderDetails.prototype, "products", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrderDetails.prototype, "shippingCost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrderDetails.prototype, "totalCost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderDetails.prototype, "stripeToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderDetails.prototype, "stripeCustomerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderDetails.prototype, "stripeChargeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderDetails.prototype, "paypalPaymentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderDetails.prototype, "paypalRedirectUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderDetails.prototype, "orderStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderDetails.prototype, "shippingStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderDetails.prototype, "paymentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderDetails.prototype, "orderId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], OrderDetails.prototype, "orderedDate", void 0);
exports.OrderDetails = OrderDetails;
class OrderListByUserIdResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderListByUserIdResponseDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: OrderDetails }),
    (0, class_transformer_1.Type)(() => OrderDetails),
    (0, class_validator_1.ValidateNested)({ always: true }),
    __metadata("design:type", Array)
], OrderListByUserIdResponseDto.prototype, "orderInfo", void 0);
exports.OrderListByUserIdResponseDto = OrderListByUserIdResponseDto;
//# sourceMappingURL=getOrderByUserId.dto.js.map