
import { BrandDto } from './brandDto';
import { HttpStatus } from '@nestjs/common';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, MinLength, IsOptional, IsObject, IsNumber, IsArray, ValidateNested, IsBoolean } from 'class-validator';
import { UpdateBrandSuccessResponse, UpdateBrandErrorResponse ,UpdateBrandRequest, ErrorMessageUpdate, UpdatedBrand, BrandUpdateInfo } from '@bs-commerce/models';

import { InfoDto } from './infoDto';
import { MetaDto } from './metaDto';

export class UpdateInfoDto implements BrandUpdateInfo{
    @ApiProperty()
    @IsOptional()
    @IsString()
    description?: string;
    
    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    allowToSelectPageSize?: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    published?: boolean;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    displayOrder?: number;

    @ApiProperty({
        example: [1, 2]
    })
    @IsOptional()
    @IsArray()
    pageSizeOptions?: number[];
}
export class UpdateBrandRequestdto implements UpdateBrandRequest{
    @ApiProperty()
    @IsOptional()
    @IsObject()
    info?: UpdateInfoDto;

    @ApiProperty()
    @IsOptional()
    @IsObject()
    meta?: MetaDto;
}

export class UpdateBrandErrorResponseDto implements UpdateBrandErrorResponse{
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    code?: number;

    @ApiProperty()
    error: ErrorMessageUpdate.INVALID_BRAND_ID | ErrorMessageUpdate.CANNOT_UPDATE_BRAND | ErrorMessageUpdate.BRAND_ALREADY_EXISTS | ErrorMessageUpdate.INFO_OR_META_OBJECT_MISSING;

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