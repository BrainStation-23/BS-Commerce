import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import {
  CreateOrderRequest,
  CreateProductOrderDetails,
  IOrderAddress,
} from '@bs-commerce/models';

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
  @IsOptional()
  country?: string;

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

export class CreateOrderProductDto implements CreateProductOrderDetails {
  @ApiProperty({ example: '052eeb8f-6a08-438d-8799-2fb0bb8d7d98' })
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

export class CreateOrderDto implements CreateOrderRequest {
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
    type: [CreateOrderProductDto],
  })
  @IsNotEmpty()
  @IsArray()
  @Type(() => CreateOrderProductDto)
  @ValidateNested({ always: true })
  products: CreateOrderProductDto[];

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
