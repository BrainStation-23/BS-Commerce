import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { CustomerInformationDto } from './customer.dto';
import {
    DeleteCustomerAddressErrorResponse,
    DeleteCustomerAddressSuccessResponse,
    DeleteCustomerAddressErrorMessages,
    DeleteCustomerAddressParams,
} from 'bs-commerce-models';
import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';

export class DeleteCustomerAddressParamsDto implements DeleteCustomerAddressParams {
    @ApiProperty()
    @IsString()
    addressId: string;
}

export class DeleteCustomerAddressErrorResponseDto implements DeleteCustomerAddressErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: DeleteCustomerAddressErrorMessages.CAN_NOT_DELETE_CUSTOMER_ADDRESS,
    })
    @IsString()
    error: DeleteCustomerAddressErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class DeleteCustomerAddressSuccessResponseDto implements DeleteCustomerAddressSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: CustomerInformationDto;
}