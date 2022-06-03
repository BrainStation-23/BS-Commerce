import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';
import type { AddCompareItem } from 'models';
export class AddToCompareDto implements AddCompareItem {
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
