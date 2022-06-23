import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';
import type {
  AddCompareItem,
  CompareData,
  CompareErrorResponse,
  CompareItems,
  CompareSuccessResponse,
  DescriptiveError,
} from 'models';
import {
  AddProductToCompareErrorEnum,
  DeleteCompareErrorEnum,
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
  @ApiProperty()
  code?: number;
  @ApiProperty({
    examples: [
      AddProductToCompareErrorEnum.CAN_NOT_ADD_ITEM_FOR_COMPARING,
      GetCompareErrorEnum.COMPARISON_LIST_IS_EMPTY,
      GetCompareErrorEnum.COMPARISON_NOT_FOUND,
      DeleteCompareErrorEnum.COMPARISON_CAN_NOT_BE_DELETED_OR_NOT_EXIST,
      DeleteCompareErrorEnum.ITEM_CAN_NOT_BE_DELETED,
    ],
  })
  error:
    | AddProductToCompareErrorEnum
    | GetCompareErrorEnum
    | DeleteCompareErrorEnum;
  @ApiProperty()
  errors: DescriptiveError;
}

export type CompareResponse =
  | CompareSuccessResponseDto
  | CompareErrorResponseDto;
