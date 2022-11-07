import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional } from 'class-validator';
import { GetAllOrderQuery } from 'models';
import { OrderDto } from './order.dto';

export class GetAllOrderQueryDto implements GetAllOrderQuery {
  @ApiProperty({ required: false, type: String })
  @IsOptional()
  shippingStatus?: string;

  @ApiProperty({ required: false, type: String })
  @IsOptional()
  branchId?: string;

  @ApiProperty({ required: false, type: String })
  @IsOptional()
  orderStatus?: string;

  @ApiProperty({ required: false, type: String })
  @IsOptional()
  paymentStatus?: string;

  @ApiProperty({ required: false, type: Date })
  @IsOptional()
  startDate?: Date;

  @ApiProperty({ required: false, type: Date })
  @IsOptional()
  endDate?: Date;

  @ApiProperty({ required: false, type: Number })
  @IsOptional()
  skip?: number;

  @ApiProperty({ required: false, type: Number })
  @IsOptional()
  limit?: number;
}
export class AllOrderResponseDto {
  @ApiProperty()
  @IsArray()
  orders: OrderDto[];
}
