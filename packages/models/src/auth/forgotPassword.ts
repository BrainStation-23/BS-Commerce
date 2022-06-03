import { DescriptiveError, ErrorResponse } from 'src/common/index';
import { SuccessResponse } from 'src/common/index';

export interface ForgotPasswordRequest {
    username: string;
}

export interface ForgotPasswordSuccessResponse extends SuccessResponse {
    code: number;
    data: {
        message: string;
    }
}

export interface ForgotPasswordErrorResponse extends ErrorResponse {
    code: number;
    error: string;
    errors: DescriptiveError;
}

export type ForgotPasswordResponse = ForgotPasswordSuccessResponse | ForgotPasswordErrorResponse;