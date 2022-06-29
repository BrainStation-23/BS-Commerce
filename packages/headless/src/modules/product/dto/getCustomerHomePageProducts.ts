import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { ProductDto } from '.';
import {
    GetAllProductsErrorMessages,
    GetAllProductsErrorResponse,
    GetAllProductsSuccessResponse,
} from 'models';


export class GetAllHomePageProductsErrorResponseDto implements GetAllProductsErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({ example: GetAllProductsErrorMessages.CAN_NOT_GET_ALL_PRODUCTS, })
    @IsString()
    error: GetAllProductsErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class GetAllHomePageProductsSuccessResponseDto implements GetAllProductsSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty({ type: () => [ProductDto] })
    @IsObject()
    data: [ProductDto];
}