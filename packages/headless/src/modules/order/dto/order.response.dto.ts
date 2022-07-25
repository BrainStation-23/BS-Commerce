import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { IOrderResponseData } from 'models';
import { OrderAddressDto, ProductOrderDto } from './order.create.dto';

export class OrderData implements IOrderResponseData {
  @ApiProperty({ type: OrderAddressDto })
  billingAddress: OrderAddressDto;

  @ApiProperty({ type: OrderAddressDto })
  shippingAddress: OrderAddressDto;

  @ApiProperty()
  shippingMethod: string;

  @ApiProperty()
  paymentMethod: string;

  @ApiProperty()
  productCost: number;

  @ApiProperty({ type: [ProductOrderDto] })
  @Type(() => ProductOrderDto)
  products: ProductOrderDto[];

  @ApiProperty()
  shippingCost: number;

  @ApiProperty()
  @IsOptional()
  totalCost?: number;

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
  orderStatus: string;

  @ApiProperty()
  shippingStatus: string;

  @ApiProperty()
  paymentStatus: string;

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
