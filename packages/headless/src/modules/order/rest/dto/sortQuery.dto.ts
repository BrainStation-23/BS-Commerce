import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { OrderSortingQuery } from '@bs-commerce/models';
import { SortField, SortTypesDto } from '../../../../entity/order';
export class OrderSortQueryDto implements OrderSortingQuery {
  @ApiProperty({ required: false, type: String, enum: SortField })
  @IsOptional()
  sortField?: SortField;

  @ApiProperty({ required: false, type: String, enum: SortTypesDto })
  @IsOptional()
  sortType?: SortTypesDto;
}
