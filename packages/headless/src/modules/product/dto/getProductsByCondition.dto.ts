import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsNumber, IsObject, IsOptional, IsString, } from 'class-validator';
import { ProductDto } from '.';
import {
    GetProductsByConditionQuery,
    GetProductsByConditionErrorMessages,
    GetProductsByConditionErrorResponse,
    GetProductsByConditionSuccessResponse,
} from 'models';

export class GetProductsByConditionQueryDto implements GetProductsByConditionQuery {
    @ApiProperty({ required: false, type: Number, })
    @IsOptional()
    @IsNumber()
    skip?: number;

    @ApiProperty({ required: false, type: Number })
    @IsOptional()
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
    isFeatured?: boolean;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    slug?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    orderBy?: string;
}

export class GetProductsByConditionErrorResponseDto implements GetProductsByConditionErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: GetProductsByConditionErrorMessages.CAN_NOT_GET_PRODUCTS,
    })
    @IsString()
    error: GetProductsByConditionErrorMessages;

    @ApiProperty()
    @IsArray()
    @IsString()
    errors: string[];
}

export class GetProductsObject {
    @ApiProperty({ type: () => [ProductDto] })
    @IsObject()
    products: ProductDto[]

    @ApiProperty()
    @IsNumber()
    count: number;
}

export class GetProductsByConditionSuccessResponseDto implements GetProductsByConditionSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: GetProductsObject;
}