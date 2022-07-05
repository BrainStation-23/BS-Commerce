import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested
} from 'class-validator';
import { IOrderAddress, IOrderCreateData, IProductOrderData } from 'models';

export class OrderAddressDto implements IOrderAddress {
  @ApiProperty({ example: 'test' })
  @MinLength(1)
  @MaxLength(30)
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'test' })
  @MinLength(1)
  @MaxLength(30)
  @IsString()
  lastName: string;

  @ApiProperty({ example: 'test@mail.com' })
  @MaxLength(60)
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'test' })
  @MinLength(1)
  @MaxLength(100)
  @IsString()
  addressLine1: string;

  @ApiProperty({ example: 'test' })
  @MinLength(1)
  @MaxLength(100)
  @IsString()
  addressLine2: string;

  @ApiProperty({ example: 'test' })
  @MinLength(3)
  @MaxLength(100)
  @IsString()
  city: string;

  @ApiProperty({ example: 'test' })
  @MinLength(2)
  @MaxLength(30)
  @IsString()
  country: string;

  @ApiProperty({ example: '3421' })
  @MinLength(2)
  @MaxLength(30)
  @IsString()
  postCode?: string;

  @ApiProperty({ example: '01314998877' })
  @MinLength(10)
  @MaxLength(15)
  @IsString()
  phoneNumber: string;
}

export class ProductOrderDto implements IProductOrderData {
  @ApiProperty({ example: '25aaa4fa-69d0-4bc5-85a0-4f9c6828702f' })
  @IsString()
  productId: string;

  @ApiProperty({ example: 'test' })
  @MaxLength(100)
  @IsString()
  name: string;

  @ApiProperty({ example: 100 })
  @IsNumber()
  price: number;

  @ApiProperty({ example: 2 })
  @IsNumber()
  quantity: number;

  @ApiProperty({ example: 'string' })
  @IsString()
  @MaxLength(100)
  sku: string;
}

export class CreateOrderDto implements IOrderCreateData {
  @ApiProperty({ example: 100 })
  @IsNumber()
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
  @IsString()
  @MaxLength(20)
  shippingMethod: string;

  @ApiProperty({ example: 'test' })
  @IsString()
  @MaxLength(20)
  paymentMethod: string;

  @ApiProperty({ example: 100 })
  @IsNumber()
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
  @IsNumber()
  totalCost: number;

  @ApiProperty({ example: '' })
  @IsString()
  @MaxLength(300)
  stripeToken?: string;

  @ApiProperty({ example: '' })
  @IsString()
  @MaxLength(300)
  stripeCustomerId?: string;

  @ApiProperty({ example: '' })
  @IsString()
  @MaxLength(300)
  stripeChargeId?: string;

  @ApiProperty({ example: '' })
  @IsString()
  @MaxLength(300)
  paypalPaymentId?: string;

  @ApiProperty({ example: '' })
  @IsString()
  @MaxLength(300)
  paypalRedirectUrl?: string;
}
