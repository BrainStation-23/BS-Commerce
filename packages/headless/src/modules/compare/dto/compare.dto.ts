import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';
import type {
  AddCompareItem,
  CompareData,
  CompareItems,
  CompareSuccessResponse,
  ErrorResponse,
} from 'models';

export class AddToCompareDto implements AddCompareItem {
  @ApiProperty()
  @IsMongoId()
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
  @ApiProperty()
  items: CompareItems[];
}

export class CompareItemsDto implements CompareItems {
  @ApiProperty()
  productId: string;
}

export class CompareSuccessResponseDto implements CompareSuccessResponse {
  @ApiProperty({ default: HttpStatus.OK })
  code?: number;
  @ApiProperty()
  data: CompareDataDto;
}

export type CompareErrorResponseDto = ErrorResponse;

export type CompareResponse =
  | CompareSuccessResponseDto
  | CompareErrorResponseDto;
