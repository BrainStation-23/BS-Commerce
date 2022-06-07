import { HttpStatus } from '@nestjs/common';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, MinLength, IsOptional, IsObject, IsNumber } from 'class-validator';

import { CreateBrandRequest, Info, Meta, CreateBrandSuccessResponse, CreateBrandErrorResponse, ErrorMessage } from 'models';

export class CreateBrandRequestDto implements CreateBrandRequest{
    @ApiProperty()
    @IsOptional()
    @IsString()
    id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    info: Info;

    @ApiProperty()
    @IsOptional()
    @IsObject()
    meta: Meta;
}

export class CreateBrandSuccessResponseDto implements CreateBrandSuccessResponse {
    @ApiProperty({ default: HttpStatus.CREATED })
    code: number;

    @ApiProperty()
    data: CreateBrandRequest;
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



