import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, MinLength, IsOptional } from 'class-validator';
import type { SignInRequest, CreateUserRequest, ForgotPasswordRequest, CreateUserErrorResponse, ErrorMessages } from 'models'

export class SignInDataDto implements SignInRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  @MinLength(6, {
    message: 'Invalid Credentials',
  })
  password: string;
}

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

export class ForgotPasswordDto implements ForgotPasswordRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;
}

export class UserDto {
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

export class ErrorResponseDto implements CreateUserErrorResponse {
  @ApiProperty()
  code: number;

  @ApiProperty()
  error: ErrorMessages;

  @ApiProperty()
  errors: string[];
}


