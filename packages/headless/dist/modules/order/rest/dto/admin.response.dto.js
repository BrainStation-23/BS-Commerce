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
exports.OrderStatusEnumDto = exports.ShippingStatusEnum = exports.PaymentStatusEnums = exports.OrderStatusEnums = exports.ChangeStatusDto = exports.OrderStatDto = exports.OrderIncompleteStatDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const order_1 = require("../../../../entity/order");
class OrderIncompleteStatDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrderIncompleteStatDto.prototype, "orderPendingTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrderIncompleteStatDto.prototype, "orderPendingCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrderIncompleteStatDto.prototype, "paymentPendingTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrderIncompleteStatDto.prototype, "paymentPendingCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrderIncompleteStatDto.prototype, "shippingPendingTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrderIncompleteStatDto.prototype, "shippingPendingCount", void 0);
exports.OrderIncompleteStatDto = OrderIncompleteStatDto;
class OrderStatDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrderStatDto.prototype, "todayTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrderStatDto.prototype, "weekTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrderStatDto.prototype, "monthTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrderStatDto.prototype, "yearTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrderStatDto.prototype, "allTimeTotal", void 0);
exports.OrderStatDto = OrderStatDto;
class ChangeStatusDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '124645320179451' }),
    __metadata("design:type", String)
], ChangeStatusDto.prototype, "orderId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: order_1.StatusTypeDto }),
    __metadata("design:type", String)
], ChangeStatusDto.prototype, "statusType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Processing' }),
    __metadata("design:type", String)
], ChangeStatusDto.prototype, "statusValue", void 0);
exports.ChangeStatusDto = ChangeStatusDto;
class OrderStatusEnums {
}
exports.OrderStatusEnums = OrderStatusEnums;
class PaymentStatusEnums {
}
exports.PaymentStatusEnums = PaymentStatusEnums;
class ShippingStatusEnum {
}
exports.ShippingStatusEnum = ShippingStatusEnum;
class OrderStatusEnumDto {
}
exports.OrderStatusEnumDto = OrderStatusEnumDto;
//# sourceMappingURL=admin.response.dto.js.map