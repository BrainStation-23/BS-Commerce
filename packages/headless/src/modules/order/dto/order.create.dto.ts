import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { IOrderAddress, IOrderCreateData, IProductOrderData } from 'models';

export class OrderAddressDto implements IOrderAddress {
  @ApiProperty({ example: 'test' })
  firstName: string;
  @ApiProperty({ example: 'test' })
  lastName: string;
  @ApiProperty({ example: 'test@mail.com' })
  email: string;
  @ApiProperty({ example: 'test' })
  addressLine1: string;
  @ApiProperty({ example: 'test' })
  addressLine2: string;
  @ApiProperty({ example: 'test' })
  city: string;
  @ApiProperty({ example: 'test' })
  country: string;
  @ApiProperty()
  postCode?: string;
  @ApiProperty({ example: '01314998877' })
  phoneNumber: string;
}

export class ProductOrderDto implements IProductOrderData {
  @ApiProperty({ example: '25aaa4fa-69d0-4bc5-85a0-4f9c6828702f' })
  productId: string;
  @ApiProperty({ example: 'test' })
  name: string;
  @ApiProperty({ example: 100 })
  price: number;
  @ApiProperty({ example: 2 })
  quantity: number;
  @ApiProperty({ example: 'string' })
  sku: string;
}

export class CreateOrderDto implements IOrderCreateData {
  @ApiProperty({ example: 100 })
  shippingCost: number;

  @ApiProperty({ type: OrderAddressDto })
  @Type(() => OrderAddressDto)
  @ValidateNested({ always: true })
  billingAddress: OrderAddressDto;

  @ApiProperty({ type: OrderAddressDto })
  @Type(() => OrderAddressDto)
  @ValidateNested({ always: true })
  shippingAddress: OrderAddressDto;

  @ApiProperty({ example: 'test' })
  shippingMethod: string;

  @ApiProperty({ example: 'test' })
  paymentMethod: string;

  @ApiProperty({ example: 100 })
  productCost: number;

  @ApiProperty({
    type: [ProductOrderDto],
  })
  @IsNotEmpty()
  @IsArray()
  @Type(() => ProductOrderDto)
  @ValidateNested({ always: true })
  products: ProductOrderDto[];

  @ApiProperty({ example: 100 })
  totalCost: number;

  @ApiProperty({ example: '' })
  stripeToken?: string;

  @ApiProperty({ example: '' })
  stripeCustomerId?: string;

  @ApiProperty({ example: '' })
  stripeChargeId?: string;

  @ApiProperty({ example: '' })
  paypalPaymentId?: string;

  @ApiProperty({ example: '' })
  paypalRedirectUrl?: string;
}
