import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsOptional } from 'class-validator';
import type { AddCompareItem, CompareResponse, CompareItems } from 'models';
export class AddToCompareDto implements AddCompareItem {
  @ApiProperty()
  @IsMongoId()
  productId: string;
}

export class CompareResponseDto implements CompareResponse {
  @ApiProperty()
  id: string;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  items: CompareItem[];
}

export class CompareItem implements CompareItems {
  @ApiProperty()
  productId: string;
  @ApiProperty()
  @IsOptional()
  products?: any;
}
