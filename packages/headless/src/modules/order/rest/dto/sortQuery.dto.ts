import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { OrderSortingQuery } from 'models';
import { SortTypesDto } from 'src/entity/order';
export class OrderSortQueryDto implements OrderSortingQuery{
    @ApiProperty({ required: false, type: String })
    @IsOptional()
    sortField?: string;

    @ApiProperty({ required: false, type: String, enum: SortTypesDto })
    @IsOptional()
    sortType?: SortTypesDto;
}