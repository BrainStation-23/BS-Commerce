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