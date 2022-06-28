import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsEmail, MinLength, IsOptional, IsObject, IsNumber, IsArray, ValidateNested, IsBoolean } from 'class-validator';
import { CreateBrandRequest, Info, Meta, CreateBrandSuccessResponse, CreateBrandErrorResponse, ErrorMessage } from 'models';

import { InfoDto } from './infoDto';
import { MetaDto } from './metaDto';

export class CreateBrandRequestDto implements CreateBrandRequest{
    @ApiProperty()
    @IsOptional()
    id: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @ValidateNested({ each: true })
    @IsObject()
    info: InfoDto;

    @ApiProperty()
    @IsOptional()
    @IsObject()
    meta: MetaDto;

}

export class CreateBrandSuccessResponseDto implements CreateBrandSuccessResponse {
    @ApiProperty({ default: HttpStatus.CREATED })
    code: number;

    @ApiProperty()
    data: CreateBrandRequestDto;
}

export class CreateBrandErrorResponseDto implements CreateBrandErrorResponse{
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    code?: number;

    @ApiProperty()
    error: ErrorMessage.CANNOT_CREATE_BRAND | ErrorMessage.BRAND_ALREADY_EXISTS | ErrorMessage.NAME_REQUIRED | ErrorMessage.NAME_BE_VALID;

    @ApiProperty()
    errors: string[];
}

export type CreateBrandResponseDto = CreateBrandErrorResponseDto | CreateBrandSuccessResponseDto;



