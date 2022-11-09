import { DescriptiveError, ErrorResponse, SuccessResponse } from "src/index";
import { StoreBranch, StoreBranchAddress, StoreBranchImage } from "./storeBranch";

export interface CreateStoreBranchRequest {
    store: string;
    name: string;
    image?: StoreBranchImage
    address: StoreBranchAddress;
    description: string;
}

export interface CreateStoreBranchSuccessResponse extends SuccessResponse {
    code: number;
    data: StoreBranch;
}

export const enum CreateStoreBranchErrorMessages {
    STORE_BRANCH_ALREADY_EXIST = 'STORE_BRANCH_ALREADY_EXIST',
    CAN_NOT_CREATE_STORE_BRANCH_REQUEST = 'CAN_NOT_CREATE_STORE_BRANCH_REQUEST',
}

export interface CreateStoreBranchErrorResponse extends ErrorResponse {
    code?: number;
    error: CreateStoreBranchErrorMessages;
    errors: DescriptiveError;
}

export type CreateStoreBranchResponse =
    | CreateStoreBranchSuccessResponse
    | CreateStoreBranchErrorResponse;