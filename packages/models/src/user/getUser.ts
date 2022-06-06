import { DescriptiveError, ErrorResponse, SuccessResponse, User } from 'src/index';

/**
 * API Path: /user
 * method: GET
 * response: GetUserResponse
 */

export interface GetUserSuccessResponse extends SuccessResponse {
    code: number;
    data: User;
}

export interface GetUserErrorResponse extends ErrorResponse {
    code?: number;
    error: 'CANT\'T_GET_USER';
    errors: DescriptiveError;
}

export type GetUserResponse = GetUserSuccessResponse | GetUserErrorResponse;