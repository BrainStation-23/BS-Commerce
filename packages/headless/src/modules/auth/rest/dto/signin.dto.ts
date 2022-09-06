import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsJWT, IsNotEmpty, IsNumber, IsObject, IsString, MinLength } from 'class-validator';
import {
    SignInErrorResponse,
    SignInRequest,
    SignInSuccessResponse,
    Token,
    SignInErrorMessages
} from 'bs-commerce-models';

export class SignInDataDto implements SignInRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty()
    @IsString()
    @MinLength(6, {
        message: SignInErrorMessages.INVALID_CREDENTIALS,
    })
    password: string;
}

export class TokenDto implements Token {
    @ApiProperty()
    @IsJWT()
    token: string;
}

export class SignInErrorResponseDto implements SignInErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: SignInErrorMessages.INVALID_CREDENTIALS
    })
    @IsString()
    error: SignInErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class SignInSuccessResponseDto implements SignInSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: TokenDto;
}