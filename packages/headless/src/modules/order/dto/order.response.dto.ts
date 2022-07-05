import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CreateOrderDto } from './order.create.dto';

export class OrderData extends CreateOrderDto {
  @ApiProperty()
  orderStatus: string;
  @ApiProperty()
  shippingStatus: string;
  @ApiProperty()
  paymentStatus: string;
  @ApiProperty()
  stripeToken?: string;
  @ApiProperty()
  stripeCustomerId?: string;
  @ApiProperty()
  stripeChargeId?: string;
  @ApiProperty()
  paypalPaymentId?: string;
  @ApiProperty()
  paypalRedirectUrl?: string;
  @ApiProperty()
  orderId: string;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  orderedDate: Date;
}
export class OrderResponseDto {
  @ApiProperty()
  userId: string;

  @ApiProperty({ type: OrderData })
  @Type(() => OrderData)
  @ValidateNested({ always: true })
  orderInfo: OrderData[];
}
