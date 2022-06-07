import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, MinLength, IsOptional, IsObject, IsNumber } from 'class-validator';

import type { CreateBrandRequest, Info, Meta, CreateBrandSuccessResponse, CreateBrandErrorResponse  } from 'models';

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
    @ApiProperty()
    @IsString()
    status: string;

    @ApiProperty()
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    data: CreateBrandRequest;
}

export class CreateBrandErrorResponseDto implements CreateBrandErrorResponse{
    @ApiProperty()
    code: number;

    @ApiProperty()
    error: 'Can\'t create brand' | 'Brand name already exists' | 'Info is required' | 'Name is required';

    @ApiProperty()
    errors: string[];
}



