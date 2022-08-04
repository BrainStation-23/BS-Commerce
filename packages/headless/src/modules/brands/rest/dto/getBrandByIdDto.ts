
import { BrandDto } from './brandDto';
import { HttpStatus } from '@nestjs/common';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, MinLength, IsOptional, IsObject, IsNumber, IsArray, ValidateNested, IsBoolean } from 'class-validator';
import  {GetBrandByIdErrorResponse, ErrorMessageGetBrandById, GetBrandByIdSuccessResponse} from 'models';
import { InfoDto } from './infoDto';
import { MetaDto } from './metaDto';

export class GetBrandByIdErrorResponseDto implements GetBrandByIdErrorResponse{
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    code?: number;

    @ApiProperty()
    error: ErrorMessageGetBrandById.INVALID_BRAND_ID | ErrorMessageGetBrandById.CANNOT_FIND_BRAND;

    @ApiProperty()
    errors: string[];
}

export class GetBrandByIdSuccessResponseDto implements GetBrandByIdSuccessResponse{
    @ApiProperty({ default: HttpStatus.OK })
    code: number;

    @ApiProperty()
    data: BrandDto;
}

export type GetBrandByIdResponseDto = GetBrandByIdErrorResponseDto | GetBrandByIdSuccessResponseDto;