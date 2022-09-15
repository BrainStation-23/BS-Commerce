import { BrandDto } from './brandDto';
import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  DeleteBrandErrorResponse,
  ErrorMessageDeleteBrand,
  DeleteBrandSuccessResponse,
} from '@bs-commerce/models';

export class DeleteBrandErrorResponseDto implements DeleteBrandErrorResponse {
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  code?: number;

  @ApiProperty()
  error:
    | ErrorMessageDeleteBrand.INVALID_BRAND_ID
    | ErrorMessageDeleteBrand.CANNOT_DELETE_BRAND;

  @ApiProperty()
  errors: string[];
}

export class DeleteBrandSuccessResponseDto
  implements DeleteBrandSuccessResponse
{
  @ApiProperty({ default: HttpStatus.OK })
  code: number;

  @ApiProperty()
  data: BrandDto;
}

export type DeleteBrandResponseDto =
  | DeleteBrandErrorResponseDto
  | DeleteBrandSuccessResponseDto;
