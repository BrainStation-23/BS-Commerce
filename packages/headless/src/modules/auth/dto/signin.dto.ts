import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { SignInErrorResponse, SignInRequest, SignInSuccessResponse, Token, SignInErrorMessages } from 'models';

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
    token: string;
}

export class SignInErrorResponseDto implements SignInErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    code: number;

    @ApiProperty({
        example: SignInErrorMessages.INVALID_CREDENTIALS
    })
    error: SignInErrorMessages.INVALID_CREDENTIALS;

    @ApiProperty()
    errors: string[];
}

export class SignInSuccessResponseDto implements SignInSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    code: number;

    @ApiProperty()
    data: TokenDto;
}