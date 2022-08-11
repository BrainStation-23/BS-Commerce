import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { OrderSortingQuery } from 'models';
import { SortField, SortTypesDto } from 'src/entity/order';
export class OrderSortQueryDto implements OrderSortingQuery{
    @ApiProperty({ required: false, type: String, enum: SortField })
    @IsOptional()
    sortField?: SortField;

    @ApiProperty({ required: false, type: String, enum: SortTypesDto })
    @IsOptional()
    sortType?: SortTypesDto;
}