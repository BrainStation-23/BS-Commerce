import { BrandDto } from './brandDto';
import { HttpStatus } from '@nestjs/common';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  IsOptional,
  IsObject,
  IsNumber,
  IsArray,
  ValidateNested,
  IsBoolean,
} from 'class-validator';
import {
  DeleteBrandErrorResponse,
  ErrorMessageDeleteBrand,
  DeleteBrandSuccessResponse,
} from '@bs-commerce/models';
import { InfoDto } from './infoDto';
import { MetaDto } from './metaDto';

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
