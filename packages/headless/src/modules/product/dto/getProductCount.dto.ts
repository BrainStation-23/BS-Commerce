import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsObject, IsString, } from 'class-validator';
import {
    GetProductCountErrorMessages,
    GetProductCountErrorResponse,
    GetProductCountSuccessResponse,
} from 'models';

export class GetProductCountErrorResponseDto implements GetProductCountErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({ example: GetProductCountErrorMessages.CAN_NOT_GET_PRODUCT_COUNT, })
    @IsString()
    error: GetProductCountErrorMessages;

    @ApiProperty()
    @IsArray()
    @IsString()
    errors: string[];
}

export class Count {
    @ApiProperty()
    @IsNumber()
    count: number;
}

export class GetProductCountSuccessResponseDto implements GetProductCountSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: Count;
}