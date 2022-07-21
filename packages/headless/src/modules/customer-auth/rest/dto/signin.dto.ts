import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEmail, IsJWT, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MinLength } from 'class-validator';
import {
    CustomerSignInErrorResponse,
    CustomerSignInRequest,
    CustomerSignInSuccessResponse,
    CustomerSignInErrorMessages,
} from 'models';

export class CustomerSignInDto implements CustomerSignInRequest {
    @ApiProperty()
    @IsOptional()
    @IsString()
    phone: string;

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

export class CustomerSignInErrorResponseDto implements CustomerSignInErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({ example: CustomerSignInErrorMessages.INVALID_CREDENTIALS, })
    error: CustomerSignInErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class TokenDto {
    @ApiProperty()
    @IsJWT()
    token: string;
}

export class CustomerSignInSuccessResponseDto implements CustomerSignInSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: TokenDto;
}