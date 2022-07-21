import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray } from "class-validator";
import { IOrderCreateData } from "models";
import { OrderAddressDto, ProductOrderDto } from "./order.create.dto";

export class AllOrderListDto implements IOrderCreateData{
    @ApiProperty()
    userId?: string;

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

export class AllOrderResponseDto {
    @ApiProperty()
    @IsArray()
    orders: AllOrderListDto[]
}