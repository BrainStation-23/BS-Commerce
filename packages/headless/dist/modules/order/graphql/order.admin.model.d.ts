import { GetAllOrderQuery, OrderIncompleteStat, OrderStat, OrderStatusTypes, PaymentStatusTypes, ShippingStatusTypes, OrderStatusModel, ChangeStatusModel } from '@bs-commerce/models';
import { OrderResponse } from './order.customer.model';
export declare class OrderStatusTypesModel implements OrderStatusTypes {
    Pending: string;
    Processing: string;
    Completed: string;
    Cancelled: string;
}
export declare class PaymentStatusTypesModel implements PaymentStatusTypes {
    Pending: string;
    Paid: string;
    Cancelled: string;
}
export declare class ShippingStatusTypesModel implements ShippingStatusTypes {
    NotYetShipped: string;
    PartiallyShipped: string;
    Shipped: string;
    Delivered: string;
}
export declare class StatusTypesModel implements OrderStatusModel {
    orderStatusEnums: OrderStatusTypesModel;
    paymentStatusEnums: PaymentStatusTypesModel;
    shippingStatusEnum: ShippingStatusTypesModel;
}
export declare class StatusTypesResponse {
    error?: string;
    code: number;
    data: StatusTypesModel;
}
export declare class OrderStatModel implements OrderStat {
    todayTotal: number;
    weekTotal: number;
    monthTotal: number;
    yearTotal: number;
    allTimeTotal: number;
}
export declare class OrderStatResponse {
    error?: string;
    code: number;
    data: OrderStatModel;
}
export declare class OrderIncompleteStatModel implements OrderIncompleteStat {
    orderPendingTotal: number;
    orderPendingCount: number;
    paymentPendingTotal: number;
    paymentPendingCount: number;
    shippingPendingTotal: number;
    shippingPendingCount: number;
}
export declare class OrderIncompleteStatResponse {
    error?: string;
    code: number;
    data: OrderIncompleteStatModel;
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
export declare class ChangeStatus implements ChangeStatusModel {
    orderId: string;
    statusType: string;
    statusValue: string;
}
export declare class OrderList {
    orders: OrderResponse[];
}
export declare class OrderListResponse {
    error?: string;
    code: number;
    data: OrderList;
}
