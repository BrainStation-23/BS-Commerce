import { DescriptiveError, ErrorResponse, SuccessResponse, User } from "src/index";
import { Address } from "./address";

/**
 * API Path: /user
 * method: PATCH
 * body: UpdatedUserRequest
 * response: UpdateUserResponse
 */

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
    code?: number;
    error: 'CANT\'T_GET_USER' | 'CANT\'T_UPDATE_USER_ADDRESS' | 'CANT\'T_ADD_USER_NEW_ADDRESS' | 'CANT\'T_UPDATE_USER';
    errors: DescriptiveError;
}

export type UpdateUserResponse = UpdateUserSuccessResponse | UpdateUserErrorResponse;
