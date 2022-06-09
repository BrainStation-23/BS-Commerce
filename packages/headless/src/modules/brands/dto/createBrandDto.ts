import { HttpStatus } from '@nestjs/common';
import { Type } from 'class-transformer';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, MinLength, IsOptional, IsObject, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { CreateBrandRequest, Info, Meta, CreateBrandSuccessResponse, CreateBrandErrorResponse, ErrorMessage } from 'models';

export class InfoDto implements Info{
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    
    @ApiProperty()
    @IsOptional()
    description?: string;
    
    @ApiProperty()
    @IsOptional()
    allowToSelectPageSize?: boolean;

    @ApiProperty()
    @IsOptional()
    published?: boolean;

    @ApiProperty()
    @IsOptional()
    displayOrder?: number;

    @ApiProperty()
    @IsOptional()
    @IsArray()
    pageSizeOptions?: number[];

}

export class MetaDto implements Meta{
    @ApiProperty()
    @IsOptional()
    keywords?: string;

    @ApiProperty()
    @IsOptional()
    description?: string;

    @ApiProperty()
    @IsOptional()
    title?: string;

    @ApiProperty()
    @IsOptional()
    SEFN?: string;
}

export class CreateBrandRequestDto implements CreateBrandRequest{
    @ApiProperty()
    @IsNotEmpty()
    // @Type(() => InfoDto)
    // @ValidateNested()
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



