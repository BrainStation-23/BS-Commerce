import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';
import type {
  AddCompareItem,
  AddProductToCompareErrorEnum,
  CompareData,
  CompareErrorResponse,
  CompareItems,
  CompareSuccessResponse,
  DeleteCompareErrorEnum,
  DescriptiveError,
  GetCompareErrorEnum,
} from 'models';

export class AddToCompareDto implements AddCompareItem {
  @ApiProperty({ example: '1dca45d8-b6d1-4767-9edb-6c9578913ca9' })
  @IsString()
  @MaxLength(36)
  @MinLength(36)
  productId: string;
}

export class CompareResponseDto implements CompareSuccessResponse {
  @ApiProperty()
  code: number;

  @ApiProperty()
  data: CompareData;
}

export class CompareDataDto implements CompareData {
  @ApiProperty()
  id: string;
  @ApiProperty()
  userId: string;
  @ApiProperty({ type: () => [CompareItemsDto] })
  items: CompareItems[];
}

export class CompareItemsDto implements CompareItems {
  @ApiProperty()
  productId: string;
}

export class CompareSuccessResponseDto implements CompareSuccessResponse {
  @ApiProperty({ default: HttpStatus.OK })
  code: number;
  @ApiProperty()
  data: CompareDataDto;
}

export class CompareErrorResponseDto implements CompareErrorResponse {
  code?: number;
  error:
    | AddProductToCompareErrorEnum
    | GetCompareErrorEnum
    | DeleteCompareErrorEnum;
  errors: DescriptiveError;
}

export type CompareResponse =
  | CompareSuccessResponseDto
  | CompareErrorResponseDto;
