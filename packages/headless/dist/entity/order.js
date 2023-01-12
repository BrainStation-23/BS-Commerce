"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartResponse = exports.Cart = exports.CartItem = exports.ReOrderQuery = exports.OrderListResponseEntity = exports.OrderSortQuery = exports.SortField = exports.SortTypesDto = exports.ChangeStatusEntity = exports.AllOrdersEntity = exports.GetAllOrderQueryEntity = exports.OrderByUserId = exports.OrderEntity = exports.BaseOrderEntity = exports.ProductOrder = exports.OrderProductPhoto = exports.OrderAddress = exports.OrderIncompleteStatEntity = exports.OrderStatEntity = exports.PaymentStatusEnum = exports.ShippingStatusEnum = exports.OrderStatusEnum = exports.StatusTypeDto = exports.OrderStatusEnumType = exports.ShippingStatusEnumsType = exports.PaymentStatusEnumsType = exports.OrderStatusEnumsType = void 0;
class OrderStatusEnumsType {
}
exports.OrderStatusEnumsType = OrderStatusEnumsType;
class PaymentStatusEnumsType {
}
exports.PaymentStatusEnumsType = PaymentStatusEnumsType;
class ShippingStatusEnumsType {
}
exports.ShippingStatusEnumsType = ShippingStatusEnumsType;
class OrderStatusEnumType {
}
exports.OrderStatusEnumType = OrderStatusEnumType;
var StatusTypeDto;
(function (StatusTypeDto) {
    StatusTypeDto["orderStatusEnums"] = "orderStatusEnums";
    StatusTypeDto["paymentStatusEnums"] = "paymentStatusEnums";
    StatusTypeDto["shippingStatusEnums"] = "shippingStatusEnums";
})(StatusTypeDto = exports.StatusTypeDto || (exports.StatusTypeDto = {}));
var OrderStatusEnum;
(function (OrderStatusEnum) {
    OrderStatusEnum["Pending"] = "Pending";
    OrderStatusEnum["Processing"] = "Processing";
    OrderStatusEnum["Completed"] = "Completed";
    OrderStatusEnum["Cancelled"] = "Cancelled";
})(OrderStatusEnum = exports.OrderStatusEnum || (exports.OrderStatusEnum = {}));
var ShippingStatusEnum;
(function (ShippingStatusEnum) {
    ShippingStatusEnum["NotYetShipped"] = "NotYetShipped";
    ShippingStatusEnum["PartiallyShipped"] = "PartiallyShipped";
    ShippingStatusEnum["Shipped"] = "Shipped";
    ShippingStatusEnum["Delivered"] = "Delivered";
})(ShippingStatusEnum = exports.ShippingStatusEnum || (exports.ShippingStatusEnum = {}));
var PaymentStatusEnum;
(function (PaymentStatusEnum) {
    PaymentStatusEnum["Pending"] = "Pending";
    PaymentStatusEnum["Paid"] = "Paid";
    PaymentStatusEnum["Cancelled"] = "Cancelled";
})(PaymentStatusEnum = exports.PaymentStatusEnum || (exports.PaymentStatusEnum = {}));
class OrderStatEntity {
}
exports.OrderStatEntity = OrderStatEntity;
class OrderIncompleteStatEntity {
}
exports.OrderIncompleteStatEntity = OrderIncompleteStatEntity;
class OrderAddress {
}
exports.OrderAddress = OrderAddress;
class OrderProductPhoto {
}
exports.OrderProductPhoto = OrderProductPhoto;
class ProductOrder {
}
exports.ProductOrder = ProductOrder;
class BaseOrderEntity {
}
exports.BaseOrderEntity = BaseOrderEntity;
class OrderEntity extends BaseOrderEntity {
}
exports.OrderEntity = OrderEntity;
class OrderByUserId extends BaseOrderEntity {
}
exports.OrderByUserId = OrderByUserId;
class GetAllOrderQueryEntity {
}
exports.GetAllOrderQueryEntity = GetAllOrderQueryEntity;
class AllOrdersEntity {
}
exports.AllOrdersEntity = AllOrdersEntity;
class ChangeStatusEntity {
}
exports.ChangeStatusEntity = ChangeStatusEntity;
var SortTypesDto;
(function (SortTypesDto) {
    SortTypesDto["asc"] = "asc";
    SortTypesDto["desc"] = "desc";
})(SortTypesDto = exports.SortTypesDto || (exports.SortTypesDto = {}));
var SortField;
(function (SortField) {
    SortField["orderedDate"] = "orderedDate";
})(SortField = exports.SortField || (exports.SortField = {}));
class OrderSortQuery {
}
exports.OrderSortQuery = OrderSortQuery;
class OrderListResponseEntity {
}
exports.OrderListResponseEntity = OrderListResponseEntity;
class ReOrderQuery {
}
exports.ReOrderQuery = ReOrderQuery;
class CartItem {
}
exports.CartItem = CartItem;
class Cart {
}
exports.Cart = Cart;
class CartResponse {
}
exports.CartResponse = CartResponse;
//# sourceMappingURL=order.js.map