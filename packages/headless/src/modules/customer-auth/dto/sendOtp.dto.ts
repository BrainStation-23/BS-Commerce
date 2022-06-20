import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import {
    CreateCustomerSendOtpErrorResponse,
    CreateCustomerSendOtpRequest,
    CreateCustomerSendOtpSuccessResponse,
    CreateCustomerSendOtpErrorMessages,
} from 'models';

export class CreateCustomerSendOtpDto implements CreateCustomerSendOtpRequest {
    @ApiProperty({required: false})
    @IsOptional()
    @IsString()
    phone: string;

    @ApiProperty({required: false})
    @IsOptional()
    @IsString()
    email: string;
}

export class CreateCustomerSendOtpErrorResponseDto implements CreateCustomerSendOtpErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: CreateCustomerSendOtpErrorMessages.CAN_NOT_SEND_OTP,
        examples: [CreateCustomerSendOtpErrorMessages.OTP_ALREADY_VERIFIED, CreateCustomerSendOtpErrorMessages.CAN_NOT_GET_CUSTOMER, CreateCustomerSendOtpErrorMessages.CAN_NOT_SEND_OTP]
    })
    error: CreateCustomerSendOtpErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class CreateCustomerSendOtpMessage {
    @ApiProperty()
    @IsString()
    message: string;
}

export class CreateCustomerSendOtpSuccessResponseDto implements CreateCustomerSendOtpSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: CreateCustomerSendOtpMessage;
}