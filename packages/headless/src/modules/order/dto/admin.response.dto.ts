import { ApiProperty } from "@nestjs/swagger"
import { OrderIncompleteStat, OrderStat } from "models"

export class OrderIncompleteStatDto implements OrderIncompleteStat{
    @ApiProperty()
    orderPendingTotal: number
    @ApiProperty()
    orderPendingCount: number
    @ApiProperty()
    paymentPendingTotal: number
    @ApiProperty()
    paymentPendingCount: number
    @ApiProperty()
    shippingPendingTotal: number
    @ApiProperty()
    shippingPendingCount: number
}

export class OrderStatDto implements OrderStat{
    @ApiProperty()
    todayTotal: number
    @ApiProperty()
    weekTotal: number
    @ApiProperty()
    monthTotal: number
    @ApiProperty()
    yearTotal: number
    @ApiProperty()
    allTimeTotal: number
}

export enum StatusTypeDto {
    orderStatus ='orderStatus',
    paymentStatus = 'paymentStatus',
    shippingStatus= 'shippingStatus'
}

export class ChangeStatusDto { 
    @ApiProperty({example:"84dab8b9-8461-4f2f-9863-b6934ed9cc27"})
    orderId: string
    @ApiProperty({enum: StatusTypeDto})
    statusType: StatusTypeDto
    @ApiProperty({example:"Processing"})
    statusValue: string
}


// enum type
export class OrderStatusEnums {
    Pending: string;
    Processing: string;
    Completed: string;
    Cancelled: string;
}

export class PaymentStatusEnums {
    Pending: string;
    Paid: string;
    Cancelled: string;
}

export class ShippingStatusEnum {
    NotYetShipped: string;
    PartiallyShipped: string;
    Shipped: string;
    Delivered: string;
}

export class OrderStatusEnumDto {
    orderStatusEnums: OrderStatusEnums;
    paymentStatusEnums: PaymentStatusEnums;
    shippingStatusEnum: ShippingStatusEnum;
}

   