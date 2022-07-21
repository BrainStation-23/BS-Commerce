import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MinLength } from 'class-validator';
import {
    CreateCustomerErrorResponse,
    CreateCustomerRequest,
    CreateCustomerSuccessResponse,
    CreateCustomerErrorMessages,
    CreateCustomerSuccessMessages,
} from 'models';

export class CreateCustomerDto implements CreateCustomerRequest {
    @ApiProperty()
    @IsOptional()
    @IsString()
    phone: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    otp: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(6, {
        message: 'Password is too short. Minimal length is $constraint1 characters',
    })
    password: string;
}

export class CreateCustomerErrorResponseDto implements CreateCustomerErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: CreateCustomerErrorMessages.CAN_NOT_CREATE_CUSTOMER,
        examples: [CreateCustomerErrorMessages.CUSTOMER_EMAIL_ALREADY_EXITS, CreateCustomerErrorMessages.CUSTOMER_PHONE_ALREADY_EXITS, , CreateCustomerErrorMessages.CAN_NOT_CREATE_CUSTOMER]
    })
    error: CreateCustomerErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class CreateCustomerMessage {
    @ApiProperty({ example: CreateCustomerSuccessMessages.CUSTOMER_CREATED_SUCCESSFUL })
    @IsString()
    message: CreateCustomerSuccessMessages.CUSTOMER_CREATED_SUCCESSFUL;
}

export class CreateCustomerSuccessResponseDto implements CreateCustomerSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: CreateCustomerMessage;
}