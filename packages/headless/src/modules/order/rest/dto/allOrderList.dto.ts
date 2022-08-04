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
    orderId: string;

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
    orderedDate: Date;

    @ApiProperty()
    orderStatus: string;
  
    @ApiProperty()
    shippingStatus: string;
  
    @ApiProperty()
    paymentStatus: string;
  
    @ApiProperty({ type: [ProductOrderDto] })
    @Type(() => ProductOrderDto)
    products: ProductOrderDto[];

    @ApiProperty()
    productCost: number;
  
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
  
    
  
  

}

export class AllOrderResponseDto {
    @ApiProperty()
    @IsArray()
    orders: AllOrderListDto[]
}