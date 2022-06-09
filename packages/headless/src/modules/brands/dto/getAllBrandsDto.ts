import { IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { GetAllBrands } from 'models';
import { GetAllBrandsSuccessResponse, GetAllBrandsErrorResponse } from 'models';

import { HttpStatus } from '@nestjs/common';

import { BrandDto } from './brandDto';
import { InfoDto, MetaDto } from "./createBrandDto";


export class GetAllBrandsDto implements GetAllBrands{
    @ApiProperty()
    @IsArray()
    brands: BrandDto[]
}

export class GetAllBrandsSuccessResponseDto implements GetAllBrandsSuccessResponse{
    @ApiProperty({ default: HttpStatus.OK })
    code: number;

    @ApiProperty()
    data: GetAllBrandsDto;
}

export class GetAllBrandsErrorResponseDto implements GetAllBrandsErrorResponse{
    @ApiProperty({ default: HttpStatus.INTERNAL_SERVER_ERROR })
    code?: number;

    @ApiProperty()
    error: string;

    @ApiProperty()
    errors: string[];
}

export type GetAllBrandsResponseDto = GetAllBrandsSuccessResponseDto | GetAllBrandsErrorResponseDto;