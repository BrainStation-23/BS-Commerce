import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional } from "class-validator";
import { OrderResponseData } from "models";
import { OrderAddressDto } from "./order.create.dto";
import { OrderProductDto } from "./OrderProduct.dto";

export class OrderDto implements OrderResponseData{
    @ApiProperty()
    orderId: string;

    @ApiProperty()
    userId: string;

    @ApiProperty({ type: OrderAddressDto })
    billingAddress: OrderAddressDto;
  
    @ApiProperty({ type: OrderAddressDto })
    shippingAddress: OrderAddressDto;
  
    @ApiProperty()
    shippingMethod: string;
  
    @ApiProperty()
    paymentMethod: string;

    @ApiProperty()
    orderedDate: Date;

    @ApiProperty()
    orderStatus: string;
  
    @ApiProperty()
    shippingStatus: string;
  
    @ApiProperty()
    paymentStatus: string;
  
    @ApiProperty({ type: [OrderProductDto] })
    @Type(() => OrderProductDto)
    products: OrderProductDto[];

    @ApiProperty()
    productCost: number;
  
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
}