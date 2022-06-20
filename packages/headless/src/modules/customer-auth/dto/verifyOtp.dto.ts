import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import {
    CreateCustomerVerifyOtpErrorResponse,
    CreateCustomerVerifyOtpRequest,
    CreateCustomerVerifyOtpSuccessResponse,
    CreateCustomerVerifyOtpErrorMessages,
} from 'models';

export class CreateCustomerVerifyOtpDto implements CreateCustomerVerifyOtpRequest {
    @ApiProperty()
    @IsOptional()
    @IsString()
    phone: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    otp: string;
}

export class CreateCustomerVerifyOtpErrorResponseDto implements CreateCustomerVerifyOtpErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: CreateCustomerVerifyOtpErrorMessages.CAN_NOT_VERIFY_OTP,
        examples: [CreateCustomerVerifyOtpErrorMessages.OTP_ALREADY_VERIFIED, CreateCustomerVerifyOtpErrorMessages.CAN_NOT_GET_CUSTOMER, CreateCustomerVerifyOtpErrorMessages.INVALID_OTP, CreateCustomerVerifyOtpErrorMessages.CAN_NOT_VERIFY_OTP]
    })
    error: CreateCustomerVerifyOtpErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class CreateCustomerVerifyOtpMessage {
    @ApiProperty()
    @IsString()
    message: string;
}

export class CreateCustomerVerifyOtpSuccessResponseDto implements CreateCustomerVerifyOtpSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: CreateCustomerVerifyOtpMessage;
}