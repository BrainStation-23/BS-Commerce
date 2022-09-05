import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, MaxLength, MinLength } from 'class-validator';
import type { AddCompareItem, CompareData, ICompareItems } from 'models';
import { IServiceResponse } from 'src/utils/response/service.response.interface';

export class AddToCompareDto implements AddCompareItem {
  @ApiProperty({ example: '1dca45d8-b6d1-4767-9edb-6c9578913ca9' })
  @IsString()
  @MaxLength(36)
  @MinLength(36)
  productId: string;
}

export class CompareItemsDto implements ICompareItems {
  @ApiProperty()
  productId: string;
}

export class CompareDataDto implements CompareData {
  @ApiProperty()
  @Expose()
  id: string;
  @ApiProperty()
  @Expose()
  userId: string;
  @ApiProperty({ type: () => [CompareItemsDto] })
  @Expose()
  items: ICompareItems[];
}
export type CompareResponse<T> = IServiceResponse<T>;
