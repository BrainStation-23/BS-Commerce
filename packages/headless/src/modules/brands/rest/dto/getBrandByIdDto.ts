import { BrandDto } from './brandDto';
import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  GetBrandByIdErrorResponse,
  ErrorMessageGetBrandById,
  GetBrandByIdSuccessResponse,
} from '@bs-commerce/models';

export class GetBrandByIdErrorResponseDto implements GetBrandByIdErrorResponse {
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  code?: number;

  @ApiProperty()
  error:
    | ErrorMessageGetBrandById.INVALID_BRAND_ID
    | ErrorMessageGetBrandById.CANNOT_FIND_BRAND;

  @ApiProperty()
  errors: string[];
}

export class GetBrandByIdSuccessResponseDto
  implements GetBrandByIdSuccessResponse
{
  @ApiProperty({ default: HttpStatus.OK })
  code: number;

  @ApiProperty()
  data: BrandDto;
}

export type GetBrandByIdResponseDto =
  | GetBrandByIdErrorResponseDto
  | GetBrandByIdSuccessResponseDto;
