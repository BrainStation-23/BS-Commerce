import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { SignInErrorResponse, SignInRequest, SignInSuccessResponse, Token } from "models";

export class SignInDataDto implements SignInRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty()
    @IsString()
    @MinLength(6, {
        message: 'INVALID_CREDENTIALS',
    })
    password: string;
}

export class TokenDto implements Token {
    @ApiProperty()
    token: string;
}

export class SignInErrorResponseDto implements SignInErrorResponse {
    @ApiProperty()
    code: number;

    @ApiProperty()
    error: 'INVALID_CREDENTIALS';

    @ApiProperty()
    errors: string[];
}

export class SignInSuccessResponseDto implements SignInSuccessResponse {
    @ApiProperty()
    code: number;

    @ApiProperty()
    data: TokenDto;
}