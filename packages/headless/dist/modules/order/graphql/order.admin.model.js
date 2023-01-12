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
exports.OrderListResponse = exports.OrderList = exports.ChangeStatus = exports.GetAllOrderQueryModel = exports.OrderIncompleteStatResponse = exports.OrderIncompleteStatModel = exports.OrderStatResponse = exports.OrderStatModel = exports.StatusTypesResponse = exports.StatusTypesModel = exports.ShippingStatusTypesModel = exports.PaymentStatusTypesModel = exports.OrderStatusTypesModel = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_customer_model_1 = require("./order.customer.model");
let OrderStatusTypesModel = class OrderStatusTypesModel {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], OrderStatusTypesModel.prototype, "Pending", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], OrderStatusTypesModel.prototype, "Processing", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], OrderStatusTypesModel.prototype, "Completed", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], OrderStatusTypesModel.prototype, "Cancelled", void 0);
OrderStatusTypesModel = __decorate([
    (0, graphql_1.ObjectType)({ description: 'Order Status Types Model' })
], OrderStatusTypesModel);
exports.OrderStatusTypesModel = OrderStatusTypesModel;
let PaymentStatusTypesModel = class PaymentStatusTypesModel {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], PaymentStatusTypesModel.prototype, "Pending", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], PaymentStatusTypesModel.prototype, "Paid", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], PaymentStatusTypesModel.prototype, "Cancelled", void 0);
PaymentStatusTypesModel = __decorate([
    (0, graphql_1.ObjectType)({ description: 'Payment Status Types Model' })
], PaymentStatusTypesModel);
exports.PaymentStatusTypesModel = PaymentStatusTypesModel;
let ShippingStatusTypesModel = class ShippingStatusTypesModel {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ShippingStatusTypesModel.prototype, "NotYetShipped", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ShippingStatusTypesModel.prototype, "PartiallyShipped", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ShippingStatusTypesModel.prototype, "Shipped", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ShippingStatusTypesModel.prototype, "Delivered", void 0);
ShippingStatusTypesModel = __decorate([
    (0, graphql_1.ObjectType)({ description: 'Shipment Status Types Model' })
], ShippingStatusTypesModel);
exports.ShippingStatusTypesModel = ShippingStatusTypesModel;
let StatusTypesModel = class StatusTypesModel {
};
__decorate([
    (0, graphql_1.Field)(() => OrderStatusTypesModel),
    __metadata("design:type", OrderStatusTypesModel)
], StatusTypesModel.prototype, "orderStatusEnums", void 0);
__decorate([
    (0, graphql_1.Field)(() => PaymentStatusTypesModel),
    __metadata("design:type", PaymentStatusTypesModel)
], StatusTypesModel.prototype, "paymentStatusEnums", void 0);
__decorate([
    (0, graphql_1.Field)(() => ShippingStatusTypesModel),
    __metadata("design:type", ShippingStatusTypesModel)
], StatusTypesModel.prototype, "shippingStatusEnum", void 0);
StatusTypesModel = __decorate([
    (0, graphql_1.ObjectType)({ description: 'Order Status Criterias Response' })
], StatusTypesModel);
exports.StatusTypesModel = StatusTypesModel;
let StatusTypesResponse = class StatusTypesResponse {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], StatusTypesResponse.prototype, "error", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: false }),
    __metadata("design:type", Number)
], StatusTypesResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => StatusTypesModel, { nullable: false }),
    __metadata("design:type", StatusTypesModel)
], StatusTypesResponse.prototype, "data", void 0);
StatusTypesResponse = __decorate([
    (0, graphql_1.ObjectType)({ description: 'All Status Enum Response' })
], StatusTypesResponse);
exports.StatusTypesResponse = StatusTypesResponse;
let OrderStatModel = class OrderStatModel {
};
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], OrderStatModel.prototype, "todayTotal", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], OrderStatModel.prototype, "weekTotal", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], OrderStatModel.prototype, "monthTotal", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], OrderStatModel.prototype, "yearTotal", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], OrderStatModel.prototype, "allTimeTotal", void 0);
OrderStatModel = __decorate([
    (0, graphql_1.ObjectType)({ description: 'Order Status Fields' })
], OrderStatModel);
exports.OrderStatModel = OrderStatModel;
let OrderStatResponse = class OrderStatResponse {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], OrderStatResponse.prototype, "error", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: false }),
    __metadata("design:type", Number)
], OrderStatResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderStatModel, { nullable: false }),
    __metadata("design:type", OrderStatModel)
], OrderStatResponse.prototype, "data", void 0);
OrderStatResponse = __decorate([
    (0, graphql_1.ObjectType)({ description: 'All Status Enum Response' })
], OrderStatResponse);
exports.OrderStatResponse = OrderStatResponse;
let OrderIncompleteStatModel = class OrderIncompleteStatModel {
};
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], OrderIncompleteStatModel.prototype, "orderPendingTotal", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], OrderIncompleteStatModel.prototype, "orderPendingCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], OrderIncompleteStatModel.prototype, "paymentPendingTotal", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], OrderIncompleteStatModel.prototype, "paymentPendingCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], OrderIncompleteStatModel.prototype, "shippingPendingTotal", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], OrderIncompleteStatModel.prototype, "shippingPendingCount", void 0);
OrderIncompleteStatModel = __decorate([
    (0, graphql_1.ObjectType)({ description: 'Incomplete Order Status Fields' })
], OrderIncompleteStatModel);
exports.OrderIncompleteStatModel = OrderIncompleteStatModel;
let OrderIncompleteStatResponse = class OrderIncompleteStatResponse {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], OrderIncompleteStatResponse.prototype, "error", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: false }),
    __metadata("design:type", Number)
], OrderIncompleteStatResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderIncompleteStatModel, { nullable: false }),
    __metadata("design:type", OrderIncompleteStatModel)
], OrderIncompleteStatResponse.prototype, "data", void 0);
OrderIncompleteStatResponse = __decorate([
    (0, graphql_1.ObjectType)({ description: 'Incomplete Order Status Response' })
], OrderIncompleteStatResponse);
exports.OrderIncompleteStatResponse = OrderIncompleteStatResponse;
let GetAllOrderQueryModel = class GetAllOrderQueryModel {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], GetAllOrderQueryModel.prototype, "shippingStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], GetAllOrderQueryModel.prototype, "orderStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], GetAllOrderQueryModel.prototype, "paymentStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Number)
], GetAllOrderQueryModel.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Number)
], GetAllOrderQueryModel.prototype, "limit", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Date)
], GetAllOrderQueryModel.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Date)
], GetAllOrderQueryModel.prototype, "endDate", void 0);
GetAllOrderQueryModel = __decorate([
    (0, graphql_1.InputType)({ description: 'Query for Get Order List' })
], GetAllOrderQueryModel);
exports.GetAllOrderQueryModel = GetAllOrderQueryModel;
let ChangeStatus = class ChangeStatus {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeStatus.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeStatus.prototype, "statusType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeStatus.prototype, "statusValue", void 0);
ChangeStatus = __decorate([
    (0, graphql_1.InputType)({ description: 'Change Status Model' })
], ChangeStatus);
exports.ChangeStatus = ChangeStatus;
let OrderList = class OrderList {
};
__decorate([
    (0, graphql_1.Field)(() => [order_customer_model_1.OrderResponse]),
    __metadata("design:type", Array)
], OrderList.prototype, "orders", void 0);
OrderList = __decorate([
    (0, graphql_1.ObjectType)({ description: 'All Order List' })
], OrderList);
exports.OrderList = OrderList;
let OrderListResponse = class OrderListResponse {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], OrderListResponse.prototype, "error", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: false }),
    __metadata("design:type", Number)
], OrderListResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderList, { nullable: false }),
    __metadata("design:type", OrderList)
], OrderListResponse.prototype, "data", void 0);
OrderListResponse = __decorate([
    (0, graphql_1.ObjectType)({ description: 'All Order List Response' })
], OrderListResponse);
exports.OrderListResponse = OrderListResponse;
//# sourceMappingURL=order.admin.model.js.map