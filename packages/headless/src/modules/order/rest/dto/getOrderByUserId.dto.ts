import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { OrderByUserId, OrderByUserIdResponse } from '@bs-commerce/models';
import { OrderAddressDto } from './order.create.dto';
import { OrderProductDto } from './OrderProduct.dto';

export class OrderDetails implements OrderByUserId {
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

  @ApiProperty({ type: [OrderProductDto] })
  @Type(() => OrderProductDto)
  products: OrderProductDto[];

  @ApiProperty()
  shippingCost: number;

  @ApiProperty()
  totalCost: number;

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
  orderedDate: Date;
}
export class OrderListByUserIdResponseDto implements OrderByUserIdResponse {
  @ApiProperty()
  userId: string;

  @ApiProperty({ type: OrderDetails })
  @Type(() => OrderDetails)
  @ValidateNested({ always: true })
  orderInfo: OrderDetails[];
}
