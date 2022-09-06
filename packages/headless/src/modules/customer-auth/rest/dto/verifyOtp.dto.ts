import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEmail, IsNumber, IsObject, IsOptional, IsString, Max, Min } from 'class-validator';
import {
    VerifyOtpErrorResponse,
    VerifyOtpRequest,
    VerifyOtpSuccessResponse,
    VerifyOtpErrorMessages,
    VerifyOtpSuccessMessages,
} from 'bs-commerce-models';

export class VerifyOtpDto implements VerifyOtpRequest {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    phone?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    @IsEmail()
    email?: string;

    @ApiProperty({ default: '123456' })
    @IsNumber()
    @Min(100000, { message: "OTP must have 6 digits" })
    @Max(999999, { message: "OTP must have 6 digits" })
    otp: number;
}

export class VerifyOtpErrorResponseDto implements VerifyOtpErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: VerifyOtpErrorMessages.OTP_EXPIRED_OR_INVALID_OTP,
        examples: [VerifyOtpErrorMessages.OTP_EXPIRED_OR_INVALID_OTP, VerifyOtpErrorMessages.CUSTOMER_EMAIL_ALREADY_EXITS, VerifyOtpErrorMessages.CUSTOMER_PHONE_ALREADY_EXITS]
    })
    error: VerifyOtpErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class VerifyOtpMessage {
    @ApiProperty({ example: VerifyOtpSuccessMessages.OTP_VERIFIED_SUCCESSFUL })
    @IsString()
    message: VerifyOtpSuccessMessages.OTP_VERIFIED_SUCCESSFUL;
}

export class VerifyOtpSuccessResponseDto implements VerifyOtpSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: VerifyOtpMessage;
}