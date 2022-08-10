import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEmail, IsNumber, IsObject, IsOptional, IsString, Length, Max, Min } from 'class-validator';
import {
    VerifyCreateCustomerOtpErrorResponse,
    VerifyCreateCustomerOtpRequest,
    VerifyCreateCustomerOtpSuccessResponse,
    VerifyCreateCustomerOtpErrorMessages,
    VerifyCreateCustomerOtpSuccessMessages,
} from 'models';

export class VerifyCreateCustomerOtpDto implements VerifyCreateCustomerOtpRequest {
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
    @Min(100000)
    @Max(999999)
    otp: number;
}

export class VerifyCreateCustomerOtpErrorResponseDto implements VerifyCreateCustomerOtpErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: VerifyCreateCustomerOtpErrorMessages.OTP_EXPIRED,
        examples: [VerifyCreateCustomerOtpErrorMessages.OTP_EXPIRED, VerifyCreateCustomerOtpErrorMessages.CUSTOMER_EMAIL_ALREADY_EXITS, VerifyCreateCustomerOtpErrorMessages.CUSTOMER_PHONE_ALREADY_EXITS]
    })
    error: VerifyCreateCustomerOtpErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class VerifyCreateCustomerOtpMessage {
    @ApiProperty({ example: VerifyCreateCustomerOtpSuccessMessages.OTP_VERIFIED_SUCCESSFUL })
    @IsString()
    message: VerifyCreateCustomerOtpSuccessMessages.OTP_VERIFIED_SUCCESSFUL;
}

export class VerifyCreateCustomerOtpSuccessResponseDto implements VerifyCreateCustomerOtpSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: VerifyCreateCustomerOtpMessage;
}