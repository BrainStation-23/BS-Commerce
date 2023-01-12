import { CustomerSignInErrorResponse, CustomerSignInRequest, CustomerSignInSuccessResponse, CustomerSignInErrorMessages } from '@bs-commerce/models';
export declare class CustomerSignInDto implements CustomerSignInRequest {
    phone?: string;
    email?: string;
    password: string;
}
export declare class CustomerSignInErrorResponseDto implements CustomerSignInErrorResponse {
    code: number;
    error: CustomerSignInErrorMessages;
    errors: string[];
}
export declare class TokenDto {
    token: string;
}
export declare class CustomerSignInSuccessResponseDto implements CustomerSignInSuccessResponse {
    code: number;
    data: TokenDto;
}
