import { ApiProperty } from '@nestjs/swagger';
import { OrderIncompleteStat, OrderStat } from '@bs-commerce/models';
import { StatusTypeDto } from '../../../../entity/order';

export class OrderIncompleteStatDto implements OrderIncompleteStat {
  @ApiProperty()
  orderPendingTotal: number;
  @ApiProperty()
  orderPendingCount: number;
  @ApiProperty()
  paymentPendingTotal: number;
  @ApiProperty()
  paymentPendingCount: number;
  @ApiProperty()
  shippingPendingTotal: number;
  @ApiProperty()
  shippingPendingCount: number;
}

export class OrderStatDto implements OrderStat {
  @ApiProperty()
  todayTotal: number;
  @ApiProperty()
  weekTotal: number;
  @ApiProperty()
  monthTotal: number;
  @ApiProperty()
  yearTotal: number;
  @ApiProperty()
  allTimeTotal: number;
}

export class ChangeStatusDto {
  @ApiProperty({ example: '124645320179451' })
  orderId: string;
  @ApiProperty({ enum: StatusTypeDto })
  statusType: StatusTypeDto;
  @ApiProperty({ example: 'Processing' })
  statusValue: string;
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
