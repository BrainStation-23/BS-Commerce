import { DescriptiveError, ErrorResponse, SuccessResponse, User } from "src/index";

export interface GetUserSuccessResponse extends SuccessResponse {
    code: number;
    data: User;
}

export interface GetUserErrorResponse extends ErrorResponse {
    code: number;
    error: string;
    errors: DescriptiveError;
}


export type GetUserResponse = GetUserSuccessResponse | GetUserErrorResponse;