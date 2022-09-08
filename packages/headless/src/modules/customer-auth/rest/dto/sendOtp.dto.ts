import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEmail, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import {
    SendOtpErrorResponse,
    SendOtpRequest,
    SendOtpSuccessResponse,
    SendOtpErrorMessages,
    SendOtpSuccessMessages,
} from '@bs-commerce/models';

export class SendOtpDto implements SendOtpRequest {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    phone?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    @IsEmail()
    email?: string;
}

export class SendOtpErrorResponseDto implements SendOtpErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: SendOtpErrorMessages.CAN_NOT_SEND_OTP,
        examples: [SendOtpErrorMessages.CUSTOMER_EMAIL_ALREADY_EXITS, SendOtpErrorMessages.CUSTOMER_PHONE_ALREADY_EXITS, , SendOtpErrorMessages.CAN_NOT_SEND_OTP]
    })
    error: SendOtpErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class SendOtpMessage {
    @ApiProperty({ example: SendOtpSuccessMessages.OTP_SEND_SUCCESSFUL })
    @IsString()
    message: SendOtpSuccessMessages.OTP_SEND_SUCCESSFUL;
}

export class SendOtpSuccessResponseDto implements SendOtpSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: SendOtpMessage;
}