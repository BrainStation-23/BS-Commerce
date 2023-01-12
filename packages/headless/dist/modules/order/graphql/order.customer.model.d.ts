import { GetAllOrderQuery, IReOrderQuery, OrderSortingQuery, ReOrderData, CreateOrderRequest, CreateProductOrderDetails, IOrderAddress, IOrderProduct, IOrderProductPhoto, OrderByUserIdResponse, OrderResponseData } from '@bs-commerce/models';
export declare class OrderProductPhotoModel implements IOrderProductPhoto {
    url?: string;
    id?: string;
    title?: string;
    alt?: string;
    displayOrder?: number;
}
export declare class OrderProductModel implements IOrderProduct {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    sku: string;
    photos?: OrderProductPhotoModel[];
    totalPrice: number;
}
export declare class OrderAddressModel implements IOrderAddress {
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
export declare class OrderResponse implements OrderResponseData {
    orderId: string;
    userId: string;
    billingAddress: OrderAddressModel;
    shippingAddress: OrderAddressModel;
    shippingMethod: string;
    paymentMethod: string;
    orderedDate: Date;
    orderStatus: string;
    shippingStatus: string;
    paymentStatus: string;
    products: OrderProductModel[];
    productCost: number;
    shippingCost: number;
    totalCost: number;
    stripeToken?: string;
    stripeCustomerId?: string;
    stripeChargeId?: string;
    paypalPaymentId?: string;
    paypalRedirectUrl?: string;
}
declare const OrderResponseSingleUser_base: import("@nestjs/common").Type<Omit<OrderResponse, "userId">>;
export declare class OrderResponseSingleUser extends OrderResponseSingleUser_base {
}
export declare class OrderListByUserId implements OrderByUserIdResponse {
    userId: string;
    orderInfo: OrderResponseSingleUser[];
}
export declare class ReOrderDataModel implements ReOrderData {
    id?: string;
    userId?: string;
    products?: OrderProductModel[];
    reDirectHome?: boolean;
    message?: string;
}
export declare class SingleOrderResponse {
    error?: string;
    code: number;
    data: OrderResponse;
}
export declare class SingleUserOrderList {
    error?: string;
    code: number;
    data: OrderListByUserId;
}
export declare class ReOrderResponse {
    error?: string;
    code: number;
    data: ReOrderDataModel;
}
export declare class OrderAddressInput implements IOrderAddress {
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
export declare class CreateOrderProduct implements CreateProductOrderDetails {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    sku: string;
}
export declare class CreateOrderModel implements CreateOrderRequest {
    billingAddress: OrderAddressInput;
    shippingAddress: OrderAddressInput;
    shippingMethod: string;
    paymentMethod: string;
    productCost: number;
    shippingCost: number;
    stripeToken?: string;
    stripeCustomerId?: string;
    stripeChargeId?: string;
    paypalPaymentId?: string;
    paypalRedirectUrl?: string;
    products: CreateOrderProduct[];
}
export declare class GetAllOrderQueryModel implements GetAllOrderQuery {
    shippingStatus?: string;
    orderStatus?: string;
    paymentStatus?: string;
    skip?: number;
    limit?: number;
    startDate?: Date;
    endDate?: Date;
}
declare enum SortField {
    orderedDate = "orderedDate"
}
export declare class OrderSortingQueryModel implements OrderSortingQuery {
    sortField?: SortField;
    sortType?: string;
}
export declare class ReOrderRequestModel implements IReOrderQuery {
    orderId: string;
    overWriteCart?: boolean;
    ignoreInvalidItems?: boolean;
}
export {};
