import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CreateOrderDto } from './order.create.dto';

export class OrderResponseDto {
  @ApiProperty()
  userId: string;

  @ApiProperty({ type: CreateOrderDto })
  @Type(() => CreateOrderDto)
  @ValidateNested({ always: true })
  orderInfo: CreateOrderDto[];
}
