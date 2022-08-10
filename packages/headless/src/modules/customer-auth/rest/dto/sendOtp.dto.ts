import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEmail, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import {
    SendCreateCustomerOtpErrorResponse,
    SendCreateCustomerOtpRequest,
    SendCreateCustomerOtpSuccessResponse,
    SendCreateCustomerOtpErrorMessages,
    SendCreateCustomerOtpSuccessMessages,
} from 'models';

export class SendCreateCustomerOtpDto implements SendCreateCustomerOtpRequest {
    @ApiProperty()
    @IsOptional()
    @IsString()
    phone: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @IsEmail()
    email: string;
}

export class SendCreateCustomerOtpErrorResponseDto implements SendCreateCustomerOtpErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: SendCreateCustomerOtpErrorMessages.CAN_NOT_SEND_OTP,
        examples: [SendCreateCustomerOtpErrorMessages.CUSTOMER_EMAIL_ALREADY_EXITS, SendCreateCustomerOtpErrorMessages.CUSTOMER_PHONE_ALREADY_EXITS, , SendCreateCustomerOtpErrorMessages.CAN_NOT_SEND_OTP]
    })
    error: SendCreateCustomerOtpErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class SendCreateCustomerOtpMessage {
    @ApiProperty({ example: SendCreateCustomerOtpSuccessMessages.OTP_SEND_SUCCESSFUL })
    @IsString()
    message: SendCreateCustomerOtpSuccessMessages.OTP_SEND_SUCCESSFUL;
}

export class SendCreateCustomerOtpSuccessResponseDto implements SendCreateCustomerOtpSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: SendCreateCustomerOtpMessage;
}