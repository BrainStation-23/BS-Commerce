import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import {
    GetCustomerAllProductsQuery,
    GetCustomerAllProductsErrorMessages,
    GetCustomerAllProductsErrorResponse,
    GetCustomerAllProductsSuccessResponse,
} from 'models';
import { Type } from 'class-transformer';
import { CustomerProductDto } from './customerProduct.dto';

export class GetCustomerAllProductsQueryDto implements GetCustomerAllProductsQuery {
    @ApiProperty({ required: false, type: Number, })
    @Type(() => Number)
    @IsOptional()
    @IsNumber()
    skip?: number;

    @ApiProperty({ required: false, type: Number })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    limit?: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    brandId?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    categoryId?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    productName?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    @Type(() => Boolean)
    isFeatured?: boolean;
}

export class GetCustomerAllProductsErrorResponseDto implements GetCustomerAllProductsErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({ example: GetCustomerAllProductsErrorMessages.CAN_NOT_GET_ALL_PRODUCTS, })
    @IsString()
    error: GetCustomerAllProductsErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class GetCustomerAllProductsSuccessResponseDto implements GetCustomerAllProductsSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty({ type: () => [CustomerProductDto] })
    @IsObject()
    data: [CustomerProductDto];
}