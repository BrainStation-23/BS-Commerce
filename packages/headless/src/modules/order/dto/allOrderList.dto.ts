import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsNumber, IsOptional } from "class-validator";
import { IOrderCreateData, GetAllOrderQuery } from "models";
import { OrderAddressDto, ProductOrderDto } from "./order.create.dto";

export class GetAllOrderQueryDto implements GetAllOrderQuery{
    @ApiProperty({ required: false, type: String })
    @IsOptional()
    shippingStatus?: string;

    @ApiProperty({ required: false, type: String })
    @IsOptional()
    orderStatus?: string;

    @ApiProperty({ required: false, type: String })
    @IsOptional()
    paymentStatus?: string;

    @ApiProperty({required: false, type: Date})
    @IsOptional()
    startDate?: Date;

    @ApiProperty({required: false, type: Date})
    @IsOptional()
    endDate?: Date;

    @ApiProperty({ required: false, type: Number })
    @IsOptional()   
    skip?: number

    @ApiProperty({ required: false, type: Number })
    @IsOptional()   
    limit?: number

}
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
    orderedDate: Date;

}

export class AllOrderResponseDto {
    @ApiProperty()
    @IsArray()
    orders: AllOrderListDto[]
}