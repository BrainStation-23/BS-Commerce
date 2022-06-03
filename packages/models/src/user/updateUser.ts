import { DescriptiveError, ErrorResponse, SuccessResponse, User } from "src/index";
import { Address } from "./address";

export interface UpdatedUserRequest {
    firstName?: string;
    lastName?: string;
    provider?: string;
    providerData?: object;
    additionalProviderData?: object;
    phone?: string;
    address?: Address;
    active?: boolean;
    gender?: string;
    status?: string;
}

export interface UpdateUserSuccessResponse extends SuccessResponse {
    code: number;
    data: User;
}

export interface UpdateUserErrorResponse extends ErrorResponse {
    code: number;
    error: string;
    errors: DescriptiveError;
}

export type UpdateUserResponse = UpdateUserSuccessResponse | UpdateUserErrorResponse;
