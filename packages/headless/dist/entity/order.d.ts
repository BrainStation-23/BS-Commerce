export declare class OrderStatusEnumsType {
    Pending: string;
    Processing: string;
    Completed: string;
    Cancelled: string;
}
export declare class PaymentStatusEnumsType {
    Pending: string;
    Paid: string;
    Cancelled: string;
}
export declare class ShippingStatusEnumsType {
    NotYetShipped: string;
    PartiallyShipped: string;
    Shipped: string;
    Delivered: string;
}
export declare class OrderStatusEnumType {
    orderStatusEnums: OrderStatusEnumsType;
    paymentStatusEnums: PaymentStatusEnumsType;
    shippingStatusEnum: ShippingStatusEnumsType;
}
export declare enum StatusTypeDto {
    orderStatusEnums = "orderStatusEnums",
    paymentStatusEnums = "paymentStatusEnums",
    shippingStatusEnums = "shippingStatusEnums"
}
export declare enum OrderStatusEnum {
    Pending = "Pending",
    Processing = "Processing",
    Completed = "Completed",
    Cancelled = "Cancelled"
}
export declare enum ShippingStatusEnum {
    NotYetShipped = "NotYetShipped",
    PartiallyShipped = "PartiallyShipped",
    Shipped = "Shipped",
    Delivered = "Delivered"
}
export declare enum PaymentStatusEnum {
    Pending = "Pending",
    Paid = "Paid",
    Cancelled = "Cancelled"
}
export declare class OrderStatEntity {
    todayTotal: number;
    weekTotal: number;
    monthTotal: number;
    yearTotal: number;
    allTimeTotal: number;
}
export declare class OrderIncompleteStatEntity {
    orderPendingTotal: number;
    orderPendingCount: number;
    paymentPendingTotal: number;
    paymentPendingCount: number;
    shippingPendingTotal: number;
    shippingPendingCount: number;
}
export declare class OrderAddress {
    firstName: string;
    lastName: string;
    email: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    country?: string;
    postCode?: string;
    phoneNumber: string;
}
export declare class OrderProductPhoto {
    url: string;
    id?: string;
    title?: string;
    alt?: string;
    displayOrder?: number;
}
export declare class ProductOrder {
    productId: string;
    name: string;
    photos?: OrderProductPhoto[];
    price: number;
    quantity: number;
    totalPrice: number;
    sku: string;
}
export declare class BaseOrderEntity {
    billingAddress: OrderAddress;
    shippingAddress: OrderAddress;
    shippingMethod: string;
    paymentMethod: string;
    productCost: number;
    shippingCost: number;
    stripeToken?: string;
    stripeCustomerId?: string;
    stripeChargeId?: string;
    paypalPaymentId?: string;
    paypalRedirectUrl?: string;
    orderedDate: Date;
    orderStatus: OrderStatusEnum;
    shippingStatus: ShippingStatusEnum;
    paymentStatus: PaymentStatusEnum;
    totalCost: number;
    products: ProductOrder[];
}
export declare class OrderEntity extends BaseOrderEntity {
    orderId: string;
    userId: string;
}
export declare class OrderByUserId extends BaseOrderEntity {
    orderId: string;
}
export declare class GetAllOrderQueryEntity {
    shippingStatus?: string;
    orderStatus?: string;
    paymentStatus?: string;
    skip?: number;
    limit?: number;
    startDate?: Date;
    endDate?: Date;
}
export declare class AllOrdersEntity {
    orders: OrderEntity[];
}
export declare class ChangeStatusEntity {
    orderId: string;
    statusType: string;
    statusValue: string;
}
export declare enum SortTypesDto {
    asc = "asc",
    desc = "desc"
}
export declare enum SortField {
    orderedDate = "orderedDate"
}
export declare class OrderSortQuery {
    sortField?: SortField;
    sortType?: string;
}
export declare class OrderListResponseEntity {
    userId: string;
    orderInfo: OrderByUserId[];
}
export declare class ReOrderQuery {
    orderId: string;
    overWriteCart?: boolean;
    ignoreInvalidItems?: boolean;
}
export declare class CartItem {
    productId: string;
    quantity: number;
}
export declare class Cart {
    items: CartItem[];
}
export declare class CartResponse {
    id?: string;
    userId: string;
    items: CartItem[];
}
