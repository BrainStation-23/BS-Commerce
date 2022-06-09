import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsObject, IsOptional, IsString, } from 'class-validator';
import { ProductDto } from '.';
import {
    GetAllProductsQuery,
    GetAllProductsErrorMessages,
    GetAllProductsErrorResponse,
    GetAllProductsSuccessResponse,
} from 'models';

export class GetAllProductsQueryDto implements GetAllProductsQuery {
    @ApiProperty({ required: false, type: Number, })
    @IsOptional()
    @IsNumber()
    skip?: number;

    @ApiProperty({ required: false, type: Number })
    @IsOptional()
    @IsNumber()
    limit?: number;
}

export class GetAllProductsErrorResponseDto implements GetAllProductsErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: GetAllProductsErrorMessages.CAN_NOT_GET_ALL_PRODUCTS,
    })
    @IsString()
    error: GetAllProductsErrorMessages;

    @ApiProperty()
    @IsArray()
    @IsString()
    errors: string[];
}

export class GetAllProductsSuccessResponseDto implements GetAllProductsSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty({ type: () => [ProductDto] })
    @IsObject()
    data: [ProductDto];
}