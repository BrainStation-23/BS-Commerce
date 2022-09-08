import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { CustomerInformationDto } from './customer.dto';
import {
    GetCustomerInformationErrorResponse,
    GetCustomerInformationSuccessResponse,
    GetCustomerInformationErrorMessages
} from '@bs-commerce/models';
import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';

export class GetCustomerInformationErrorResponseDto implements GetCustomerInformationErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: GetCustomerInformationErrorMessages.CUSTOMER_NOT_FOUND
    })
    @IsString()
    error: GetCustomerInformationErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class GetCustomerInformationSuccessResponseDto implements GetCustomerInformationSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: CustomerInformationDto;
}