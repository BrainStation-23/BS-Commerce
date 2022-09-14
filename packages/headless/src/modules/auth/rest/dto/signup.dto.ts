import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  MinLength,
} from 'class-validator';
import {
  CreateUserErrorResponse,
  CreateUserRequest,
  CreateUserSuccessResponse,
  SignUpErrorMessages,
  SignUpSuccessMessages,
} from '@bs-commerce/models';

export class CreateUserDto implements CreateUserRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
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

export class CreateUserErrorResponseDto implements CreateUserErrorResponse {
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  @IsNumber()
  code: number;

  @ApiProperty({
    example: SignUpErrorMessages.CAN_NOT_CREATE_USER,
    examples: [
      SignUpErrorMessages.USER_ALREADY_EXITS,
      SignUpErrorMessages.CAN_NOT_CREATE_USER,
    ],
  })
  error: SignUpErrorMessages;

  @ApiProperty()
  @IsArray()
  errors: string[];
}

export class CreateUserMessage {
  @ApiProperty({ example: SignUpSuccessMessages.USER_CREATED_SUCCESSFUL })
  @IsString()
  message: SignUpSuccessMessages.USER_CREATED_SUCCESSFUL;
}

export class CreateUserSuccessResponseDto implements CreateUserSuccessResponse {
  @ApiProperty({ default: HttpStatus.OK })
  @IsNumber()
  code: number;

  @ApiProperty()
  @IsObject()
  data: CreateUserMessage;
}
