import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEmail, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import {
    GetCustomerErrorResponse,
    GetCustomerQuery,
    GetCustomerSuccessResponse,
    GetCustomerErrorMessages,
} from 'models';
import { CustomerDto } from './customer.dto';

export class GetCustomerQueryDto implements GetCustomerQuery {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    phone: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    @IsEmail()
    email: string;
}

export class GetCustomerErrorResponseDto implements GetCustomerErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({ example: GetCustomerErrorMessages.CAN_NOT_GET_CUSTOMER, })
    error: GetCustomerErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class GetCustomerSuccessResponseDto implements GetCustomerSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: CustomerDto;
}