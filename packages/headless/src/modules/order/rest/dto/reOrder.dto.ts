import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { IReOrderQuery } from '@bs-commerce/models';

export class ReOrderDto implements IReOrderQuery {
  @ApiProperty()
  orderId: string;

  @ApiProperty()
  @IsOptional()
  overWriteCart?: boolean;

  @ApiProperty()
  @IsOptional()
  ignoreInvalidItems?: boolean;
}
