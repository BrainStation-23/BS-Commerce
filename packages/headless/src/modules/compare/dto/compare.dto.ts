import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import type {
  AddCompareItem,
  CompareData,
  CompareErrorResponse,
  CompareSuccessResponse,
  DescriptiveError,
} from 'models';
import { AddProductToCompareErrorEnum, DeleteCompareErrorEnum, GetCompareErrorEnum } from 'models';

export class AddToCompareDto implements AddCompareItem {
  @ApiProperty({ example: '1dca45d8-b6d1-4767-9edb-6c9578913ca9' })
  @IsString()
  @MaxLength(36)
  @MinLength(36)
  productId: string;
}

export class ProductInfo {
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  shortDescription: string;
  @ApiProperty()
  fullDescription: string;
}
export class ProductDetails {
  @ApiProperty({ type: () => [ProductInfo] })
  info: ProductInfo;

  @ApiProperty()
  photos: string[];
}

export class CompareItemsDetails {
  @ApiProperty()
  productId: string;

  @ApiProperty({ type: () => [ProductDetails] })
  @IsOptional()
  productDetails?: ProductDetails;
}

export class CompareDataDto implements CompareData {
  @ApiProperty()
  id: string;
  @ApiProperty()
  userId: string;
  @ApiProperty({ type: () => [CompareItemsDetails] })
  items: CompareItemsDetails[];
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
      DeleteCompareErrorEnum.INVALID_ID
    ],
  })
  error: AddProductToCompareErrorEnum | GetCompareErrorEnum | DeleteCompareErrorEnum;
  @ApiProperty()
  errors: DescriptiveError;
}

export type CompareResponse = CompareSuccessResponseDto | CompareErrorResponseDto;
