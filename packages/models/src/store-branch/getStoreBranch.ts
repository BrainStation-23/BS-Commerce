import { DescriptiveError, ErrorResponse, SuccessResponse } from "src/index";
import { StoreBranch } from "./storeBranch";


export interface GetStoreBranchRequest {
    branchId: string;
}
export interface GetStoreBranchSuccessResponse extends SuccessResponse {
    code: number;
    data: StoreBranch;
}

export const enum GetStoreBranchErrorMessages {
    CAN_NOT_GET_STORE_BRANCH = 'CAN_NOT_GET_STORE_BRANCH',
}

export interface GetStoreBranchErrorResponse extends ErrorResponse {
    code?: number;
    error: GetStoreBranchErrorMessages;
    errors: DescriptiveError;
}

export type GetStoreBranchResponse =
    | GetStoreBranchSuccessResponse
    | GetStoreBranchErrorResponse;