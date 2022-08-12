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
  ValidateNested
} from 'class-validator';
import { CreateOrderRequest, CreateProductOrderDetails, IOrderAddress, OrderProductData } from 'models';
import { OrderProductPhotoDto } from './orderProductPhoto.dto';

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

export class CreateOrderProductDto implements CreateProductOrderDetails{
  @ApiProperty({ example: "6e9fb5dc-a3ad-4d35-81d2-16fc6e2dc54e" })
  @IsNumber()
  productId: string;

  @ApiProperty({ example: 2 })
  @IsNumber()
  quantity: number;
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
