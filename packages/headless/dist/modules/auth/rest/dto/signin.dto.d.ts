import { SignInErrorResponse, SignInRequest, SignInSuccessResponse, Token, SignInErrorMessages } from '@bs-commerce/models';
export declare class SignInDataDto implements SignInRequest {
    username: string;
    password: string;
}
export declare class TokenDto implements Token {
    token: string;
}
export declare class SignInErrorResponseDto implements SignInErrorResponse {
    code: number;
    error: SignInErrorMessages;
    errors: string[];
}
export declare class SignInSuccessResponseDto implements SignInSuccessResponse {
    code: number;
    data: TokenDto;
}
