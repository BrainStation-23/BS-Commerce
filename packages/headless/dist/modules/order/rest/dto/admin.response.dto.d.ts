import { OrderIncompleteStat, OrderStat } from '@bs-commerce/models';
import { StatusTypeDto } from '../../../../entity/order';
export declare class OrderIncompleteStatDto implements OrderIncompleteStat {
    orderPendingTotal: number;
    orderPendingCount: number;
    paymentPendingTotal: number;
    paymentPendingCount: number;
    shippingPendingTotal: number;
    shippingPendingCount: number;
}
export declare class OrderStatDto implements OrderStat {
    todayTotal: number;
    weekTotal: number;
    monthTotal: number;
    yearTotal: number;
    allTimeTotal: number;
}
export declare class ChangeStatusDto {
    orderId: string;
    statusType: StatusTypeDto;
    statusValue: string;
}
export declare class OrderStatusEnums {
    Pending: string;
    Processing: string;
    Completed: string;
    Cancelled: string;
}
export declare class PaymentStatusEnums {
    Pending: string;
    Paid: string;
    Cancelled: string;
}
export declare class ShippingStatusEnum {
    NotYetShipped: string;
    PartiallyShipped: string;
    Shipped: string;
    Delivered: string;
}
export declare class OrderStatusEnumDto {
    orderStatusEnums: OrderStatusEnums;
    paymentStatusEnums: PaymentStatusEnums;
    shippingStatusEnum: ShippingStatusEnum;
}
