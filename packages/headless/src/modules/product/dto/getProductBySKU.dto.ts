import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsObject, IsString, } from 'class-validator';
import {
    GetProductBySKUParams,
    GetProductBySKUErrorMessages,
    GetProductBySKUErrorResponse,
    GetProductBySKUSuccessResponse,
} from 'models';
import { ProductDto } from '.';

export class GetProductBySKUParamsDto implements GetProductBySKUParams {
    @ApiProperty()
    @IsString()
    sku: string;
}

export class GetProductBySKUErrorResponseDto implements GetProductBySKUErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: GetProductBySKUErrorMessages.CAN_NOT_GET_PRODUCT,
    })
    @IsString()
    error: GetProductBySKUErrorMessages;

    @ApiProperty()
    @IsArray()
    @IsString()
    errors: string[];
}

export class GetProductBySKUSuccessResponseDto implements GetProductBySKUSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty({ type: () => ProductDto })
    @IsObject()
    data: ProductDto;
}