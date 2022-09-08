import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { CustomerInformationDto } from './customer.dto';
import {
    UpdateCustomerAddressErrorResponse,
    UpdateCustomerAddressSuccessResponse,
    UpdateCustomerAddressErrorMessages,
    UpdateCustomerAddressParams,
} from '@bs-commerce/models';
import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';

export class UpdateCustomerAddressParamsDto implements UpdateCustomerAddressParams {
    @ApiProperty()
    @IsString()
    addressId: string;
}

export class UpdateCustomerAddressErrorResponseDto implements UpdateCustomerAddressErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: UpdateCustomerAddressErrorMessages.CAN_NOT_UPDATE_CUSTOMER_ADDRESS,
    })
    @IsString()
    error: UpdateCustomerAddressErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class UpdateCustomerAddressSuccessResponseDto implements UpdateCustomerAddressSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: CustomerInformationDto;
}