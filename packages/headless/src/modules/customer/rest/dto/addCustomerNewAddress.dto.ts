import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { CustomerInformationDto } from './customer.dto';
import {
    AddCustomerNewAddressErrorResponse,
    AddCustomerNewAddressSuccessResponse,
    AddCustomerNewAddressErrorMessages,
} from '@bs-commerce/models';
import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';

export class AddCustomerNewAddressErrorResponseDto implements AddCustomerNewAddressErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: AddCustomerNewAddressErrorMessages.CAN_NOT_ADD_CUSTOMER_NEW_ADDRESS,
    })
    @IsString()
    error: AddCustomerNewAddressErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class AddCustomerNewAddressSuccessResponseDto implements AddCustomerNewAddressSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: CustomerInformationDto;
}