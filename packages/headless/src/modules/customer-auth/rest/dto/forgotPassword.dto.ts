import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsArray, IsObject, IsOptional, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import {
  CustomerForgotPasswordErrorResponse,
  CustomerForgotPasswordRequest,
  CustomerForgotPasswordMessage,
  CustomerForgotPasswordErrorMessages,
  CustomerForgotPasswordSuccessResponse,
} from 'models';

export class CustomerForgotPasswordDto implements CustomerForgotPasswordRequest {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'Password is too short. Minimal length is $constraint1 characters', })
  password: string;
}

export class CustomerForgotPasswordSuccessMessage implements CustomerForgotPasswordMessage {
  @ApiProperty()
  @IsString()
  message: string;
}

export class CustomerForgotPasswordErrorResponseDto implements CustomerForgotPasswordErrorResponse {
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  @IsNumber()
  code: number;

  @ApiProperty({
    example: CustomerForgotPasswordErrorMessages.CAN_NOT_UPDATE_CUSTOMER_PASSWORD,
    examples: [CustomerForgotPasswordErrorMessages.CAN_NOT_GET_CUSTOMER, CustomerForgotPasswordErrorMessages.CAN_NOT_UPDATE_CUSTOMER_PASSWORD]
  })
  @IsString()
  error: CustomerForgotPasswordErrorMessages;

  @ApiProperty()
  @IsArray()
  errors: string[];
}

export class CustomerForgotPasswordSuccessResponseDto implements CustomerForgotPasswordSuccessResponse {
  @ApiProperty({ default: HttpStatus.OK })
  @IsNumber()
  code: number;

  @ApiProperty()
  @IsObject()
  data: CustomerForgotPasswordSuccessMessage;
}