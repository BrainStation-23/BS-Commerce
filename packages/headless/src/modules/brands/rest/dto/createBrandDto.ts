import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsObject } from 'class-validator';
import { ValidateNested as CustomValidator } from '../../../../decorators/service.validator';
import {
  CreateBrandRequest,
  CreateBrandSuccessResponse,
  CreateBrandErrorResponse,
  ErrorMessage,
} from '@bs-commerce/models';
import { BrandDto } from './brandDto';
import { InfoDto } from './infoDto';
import { MetaDto } from './metaDto';

export class CreateBrandRequestDto implements CreateBrandRequest {
  @ApiProperty({ type: InfoDto })
  @IsNotEmpty()
  @CustomValidator(InfoDto)
  @IsObject()
  info: InfoDto;

  @ApiProperty({ type: MetaDto })
  @IsOptional()
  @CustomValidator(MetaDto)
  @IsObject()
  meta: MetaDto;
}

export class CreateBrandSuccessResponseDto
  implements CreateBrandSuccessResponse
{
  @ApiProperty({ default: HttpStatus.CREATED })
  code: number;

  @ApiProperty()
  data: BrandDto;
}

export class CreateBrandErrorResponseDto implements CreateBrandErrorResponse {
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  code?: number;

  @ApiProperty()
  error:
    | ErrorMessage.CANNOT_CREATE_BRAND
    | ErrorMessage.BRAND_ALREADY_EXISTS
    | ErrorMessage.NAME_REQUIRED
    | ErrorMessage.NAME_BE_VALID;

  @ApiProperty()
  errors: string[];
}

export type CreateBrandResponseDto =
  | CreateBrandErrorResponseDto
  | CreateBrandSuccessResponseDto;
