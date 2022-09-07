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

export interface OrderStatusTypes {
    Pending: string;
    Processing: string;
    Completed: string;
    Cancelled: string;
}

export interface PaymentStatusTypes {
    Pending: string;
    Paid: string;
    Cancelled: string;
}

export interface ShippingStatusTypes {
    NotYetShipped: string;
    PartiallyShipped: string;
    Shipped: string;
    Delivered: string;
}
export interface OrderStatusModel {
    orderStatusEnums: OrderStatusTypes;
    paymentStatusEnums: PaymentStatusTypes;
    shippingStatusEnum: ShippingStatusTypes;
}

export interface ChangeStatusModel { 
    orderId: string;
    statusType: string;
    statusValue: string
  }
