import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

export class OrderAddressDto {
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
  postCode?: number;
  @ApiProperty({ example: '01314998877' })
  phoneNumber: string;
}

export class ProductOrderDto {
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

export class CreateOrderDto {
  @ApiProperty({ example: 100 })
  shippingCost: number;

  @ApiProperty()
  @Type(() => OrderAddressDto)
  @ValidateNested({ always: true })
  billingAddress: OrderAddressDto;

  @ApiProperty()
  @Type(() => OrderAddressDto)
  @ValidateNested({ always: true })
  shippingAddress: OrderAddressDto;

  @ApiProperty({ example: 'test' })
  shippingMethod: string;

  @ApiProperty({ example: 'test' })
  paymentMethod: string;

  @ApiProperty({ example: 'test' })
  paymetnInfo: any;

  @ApiProperty({ example: 100 })
  productCost: number;

  @ApiProperty({
    example: [
      {
        productId: '25aaa4fa-69d0-4bc5-85a0-4f9c6828702f',
        name: 'test',
        price: 100,
        quantity: 2,
        sku: 'string',
      },
    ],
  })
  @Type(() => ProductOrderDto)
  @ValidateNested({ always: true })
  products: ProductOrderDto[];

  @ApiProperty({ example: 100 })
  totalCost: number;
}
