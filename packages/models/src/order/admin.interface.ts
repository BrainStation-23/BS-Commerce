export interface OrderIncompleteStat{
    orderPendingTotal: number
    orderPendingCount: number
    paymentPendingTotal: number
    paymentPendingCount: number
    shippingPendingTotal: number
    shippingPendingCount: number
}

export interface OrderStat{
    todayTotal: number
    weekTotal: number
    monthTotal: number
    yearTotal: number
    allTimeTotal: number
}

export interface OrderStatusEnumModel {
    Pending: string;
    Processing: string;
    Completed: string;
    Cancelled: string;
}

export interface PaymentStatusEnumModel {
    Pending: string;
    Paid: string;
    Cancelled: string;
}

export interface ShippingStatusEnumModel {
    NotYetShipped: string;
    PartiallyShipped: string;
    Shipped: string;
    Delivered: string;
}
export interface OrderStatusModel {
    orderStatusEnums: OrderStatusEnumModel;
    paymentStatusEnums: PaymentStatusEnumModel;
    shippingStatusEnum: ShippingStatusEnumModel;
}

export interface ChangeStatusModel { 
    orderId: string;
    statusType: string;
    statusValue: string
  }
