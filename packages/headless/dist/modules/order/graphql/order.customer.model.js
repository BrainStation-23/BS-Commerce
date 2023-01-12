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
exports.ReOrderRequestModel = exports.OrderSortingQueryModel = exports.GetAllOrderQueryModel = exports.CreateOrderModel = exports.CreateOrderProduct = exports.OrderAddressInput = exports.ReOrderResponse = exports.SingleUserOrderList = exports.SingleOrderResponse = exports.ReOrderDataModel = exports.OrderListByUserId = exports.OrderResponseSingleUser = exports.OrderResponse = exports.OrderAddressModel = exports.OrderProductModel = exports.OrderProductPhotoModel = void 0;
const graphql_1 = require("@nestjs/graphql");
let OrderProductPhotoModel = class OrderProductPhotoModel {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], OrderProductPhotoModel.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], OrderProductPhotoModel.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], OrderProductPhotoModel.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], OrderProductPhotoModel.prototype, "alt", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], OrderProductPhotoModel.prototype, "displayOrder", void 0);
OrderProductPhotoModel = __decorate([
    (0, graphql_1.ObjectType)({ description: 'Order Product Photo Model' })
], OrderProductPhotoModel);
exports.OrderProductPhotoModel = OrderProductPhotoModel;
let OrderProductModel = class OrderProductModel {
};
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderProductModel.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderProductModel.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", Number)
], OrderProductModel.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", Number)
], OrderProductModel.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderProductModel.prototype, "sku", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderProductPhotoModel], { nullable: true }),
    __metadata("design:type", Array)
], OrderProductModel.prototype, "photos", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", Number)
], OrderProductModel.prototype, "totalPrice", void 0);
OrderProductModel = __decorate([
    (0, graphql_1.ObjectType)({ description: 'Order Product Model' })
], OrderProductModel);
exports.OrderProductModel = OrderProductModel;
let OrderAddressModel = class OrderAddressModel {
};
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderAddressModel.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderAddressModel.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderAddressModel.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderAddressModel.prototype, "addressLine1", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderAddressModel.prototype, "addressLine2", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderAddressModel.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], OrderAddressModel.prototype, "country", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], OrderAddressModel.prototype, "postCode", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderAddressModel.prototype, "phoneNumber", void 0);
OrderAddressModel = __decorate([
    (0, graphql_1.ObjectType)('AddressObjectType')
], OrderAddressModel);
exports.OrderAddressModel = OrderAddressModel;
let OrderResponse = class OrderResponse {
};
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderResponse.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderResponse.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderAddressModel, { nullable: false }),
    __metadata("design:type", OrderAddressModel)
], OrderResponse.prototype, "billingAddress", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderAddressModel, { nullable: false }),
    __metadata("design:type", OrderAddressModel)
], OrderResponse.prototype, "shippingAddress", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderResponse.prototype, "shippingMethod", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderResponse.prototype, "paymentMethod", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", Date)
], OrderResponse.prototype, "orderedDate", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderResponse.prototype, "orderStatus", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderResponse.prototype, "shippingStatus", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderResponse.prototype, "paymentStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderProductModel, { nullable: false }),
    __metadata("design:type", Array)
], OrderResponse.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", Number)
], OrderResponse.prototype, "productCost", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", Number)
], OrderResponse.prototype, "shippingCost", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", Number)
], OrderResponse.prototype, "totalCost", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], OrderResponse.prototype, "stripeToken", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], OrderResponse.prototype, "stripeCustomerId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], OrderResponse.prototype, "stripeChargeId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], OrderResponse.prototype, "paypalPaymentId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], OrderResponse.prototype, "paypalRedirectUrl", void 0);
OrderResponse = __decorate([
    (0, graphql_1.ObjectType)({ description: 'Order model' })
], OrderResponse);
exports.OrderResponse = OrderResponse;
let OrderResponseSingleUser = class OrderResponseSingleUser extends (0, graphql_1.OmitType)(OrderResponse, [
    'userId',
]) {
};
OrderResponseSingleUser = __decorate([
    (0, graphql_1.ObjectType)({ description: 'Order List of a single User' })
], OrderResponseSingleUser);
exports.OrderResponseSingleUser = OrderResponseSingleUser;
let OrderListByUserId = class OrderListByUserId {
};
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderListByUserId.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderResponseSingleUser, { nullable: false }),
    __metadata("design:type", Array)
], OrderListByUserId.prototype, "orderInfo", void 0);
OrderListByUserId = __decorate([
    (0, graphql_1.ObjectType)({ description: 'OrderList of a single user' })
], OrderListByUserId);
exports.OrderListByUserId = OrderListByUserId;
let ReOrderDataModel = class ReOrderDataModel {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ReOrderDataModel.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ReOrderDataModel.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [OrderProductModel], { nullable: true }),
    __metadata("design:type", Array)
], ReOrderDataModel.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], ReOrderDataModel.prototype, "reDirectHome", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ReOrderDataModel.prototype, "message", void 0);
ReOrderDataModel = __decorate([
    (0, graphql_1.ObjectType)({ description: 'ReOrder Data' })
], ReOrderDataModel);
exports.ReOrderDataModel = ReOrderDataModel;
let SingleOrderResponse = class SingleOrderResponse {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SingleOrderResponse.prototype, "error", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: false }),
    __metadata("design:type", Number)
], SingleOrderResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderResponse, { nullable: false }),
    __metadata("design:type", OrderResponse)
], SingleOrderResponse.prototype, "data", void 0);
SingleOrderResponse = __decorate([
    (0, graphql_1.ObjectType)({ description: 'Single order Response' })
], SingleOrderResponse);
exports.SingleOrderResponse = SingleOrderResponse;
let SingleUserOrderList = class SingleUserOrderList {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SingleUserOrderList.prototype, "error", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: false }),
    __metadata("design:type", Number)
], SingleUserOrderList.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderListByUserId, { nullable: false }),
    __metadata("design:type", OrderListByUserId)
], SingleUserOrderList.prototype, "data", void 0);
SingleUserOrderList = __decorate([
    (0, graphql_1.ObjectType)({ description: 'Single order Response' })
], SingleUserOrderList);
exports.SingleUserOrderList = SingleUserOrderList;
let ReOrderResponse = class ReOrderResponse {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ReOrderResponse.prototype, "error", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: false }),
    __metadata("design:type", Number)
], ReOrderResponse.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => ReOrderDataModel, { nullable: false }),
    __metadata("design:type", ReOrderDataModel)
], ReOrderResponse.prototype, "data", void 0);
ReOrderResponse = __decorate([
    (0, graphql_1.ObjectType)({ description: 'ReOrder Response' })
], ReOrderResponse);
exports.ReOrderResponse = ReOrderResponse;
let OrderAddressInput = class OrderAddressInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderAddressInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderAddressInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderAddressInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderAddressInput.prototype, "addressLine1", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderAddressInput.prototype, "addressLine2", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderAddressInput.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], OrderAddressInput.prototype, "country", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], OrderAddressInput.prototype, "postCode", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], OrderAddressInput.prototype, "phoneNumber", void 0);
OrderAddressInput = __decorate([
    (0, graphql_1.InputType)({ description: 'Order Product Model' })
], OrderAddressInput);
exports.OrderAddressInput = OrderAddressInput;
let CreateOrderProduct = class CreateOrderProduct {
};
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], CreateOrderProduct.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], CreateOrderProduct.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", Number)
], CreateOrderProduct.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", Number)
], CreateOrderProduct.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], CreateOrderProduct.prototype, "sku", void 0);
CreateOrderProduct = __decorate([
    (0, graphql_1.InputType)({ description: 'Create Order Product Request' })
], CreateOrderProduct);
exports.CreateOrderProduct = CreateOrderProduct;
let CreateOrderModel = class CreateOrderModel {
};
__decorate([
    (0, graphql_1.Field)(() => OrderAddressInput, { nullable: false }),
    __metadata("design:type", OrderAddressInput)
], CreateOrderModel.prototype, "billingAddress", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderAddressInput, { nullable: false }),
    __metadata("design:type", OrderAddressInput)
], CreateOrderModel.prototype, "shippingAddress", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], CreateOrderModel.prototype, "shippingMethod", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], CreateOrderModel.prototype, "paymentMethod", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", Number)
], CreateOrderModel.prototype, "productCost", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", Number)
], CreateOrderModel.prototype, "shippingCost", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateOrderModel.prototype, "stripeToken", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateOrderModel.prototype, "stripeCustomerId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateOrderModel.prototype, "stripeChargeId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateOrderModel.prototype, "paypalPaymentId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateOrderModel.prototype, "paypalRedirectUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CreateOrderProduct], { nullable: false }),
    __metadata("design:type", Array)
], CreateOrderModel.prototype, "products", void 0);
CreateOrderModel = __decorate([
    (0, graphql_1.InputType)({ description: 'Create order request' })
], CreateOrderModel);
exports.CreateOrderModel = CreateOrderModel;
let GetAllOrderQueryModel = class GetAllOrderQueryModel {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GetAllOrderQueryModel.prototype, "shippingStatus", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GetAllOrderQueryModel.prototype, "orderStatus", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GetAllOrderQueryModel.prototype, "paymentStatus", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], GetAllOrderQueryModel.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], GetAllOrderQueryModel.prototype, "limit", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], GetAllOrderQueryModel.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], GetAllOrderQueryModel.prototype, "endDate", void 0);
GetAllOrderQueryModel = __decorate([
    (0, graphql_1.InputType)({ description: 'Query for Get All Order Query' })
], GetAllOrderQueryModel);
exports.GetAllOrderQueryModel = GetAllOrderQueryModel;
var SortField;
(function (SortField) {
    SortField["orderedDate"] = "orderedDate";
})(SortField || (SortField = {}));
let OrderSortingQueryModel = class OrderSortingQueryModel {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], OrderSortingQueryModel.prototype, "sortField", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], OrderSortingQueryModel.prototype, "sortType", void 0);
OrderSortingQueryModel = __decorate([
    (0, graphql_1.InputType)({ description: 'Sort Query for Order' })
], OrderSortingQueryModel);
exports.OrderSortingQueryModel = OrderSortingQueryModel;
let ReOrderRequestModel = class ReOrderRequestModel {
};
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], ReOrderRequestModel.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], ReOrderRequestModel.prototype, "overWriteCart", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], ReOrderRequestModel.prototype, "ignoreInvalidItems", void 0);
ReOrderRequestModel = __decorate([
    (0, graphql_1.InputType)({ description: 'ReOrder Request' })
], ReOrderRequestModel);
exports.ReOrderRequestModel = ReOrderRequestModel;
//# sourceMappingURL=order.customer.model.js.map