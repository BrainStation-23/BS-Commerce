
import { BrandDto } from './brandDto';
import { HttpStatus } from '@nestjs/common';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, MinLength, IsOptional, IsObject, IsNumber, IsArray, ValidateNested, IsBoolean } from 'class-validator';
import { UpdateBrandSuccessResponse, UpdateBrandErrorResponse ,UpdateBrandRequest, ErrorMessageUpdate, UpdatedBrand } from 'models';

import { InfoDto } from './infoDto';
import { MetaDto } from './metaDto';

export class UpdateBrandRequestdto implements UpdateBrandRequest{

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    info: InfoDto;

    @ApiProperty()
    @IsOptional()
    @IsObject()
    meta?: MetaDto;

}

export class UpdateBrandErrorResponseDto implements UpdateBrandErrorResponse{
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    code?: number;

    @ApiProperty()
    error: ErrorMessageUpdate.INVALID_BRAND_ID | ErrorMessageUpdate.CANNOT_UPDATE_BRAND | ErrorMessageUpdate.BRAND_ALREADY_EXISTS;

    @ApiProperty()
    errors: string[];
}

export class UpdateBrandSuccessResponseDto implements UpdateBrandSuccessResponse{
    @ApiProperty({ default: HttpStatus.OK })
    code: number;

    @ApiProperty()
    @IsOptional()
    data?: BrandDto;
}

export type UpdateBrandResponseDto = UpdateBrandErrorResponseDto | UpdateBrandSuccessResponseDto;