import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';

export class AddToCompareDto {
  @ApiProperty()
  @IsMongoId()
  productId: string;
}

export interface CompareResponseDto {
  id: string;
  userId: string;
  items: CompareItems[];
}

export interface CompareItems {
  productId: string;
  products: any;
}
