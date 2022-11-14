import { DescriptiveError, ErrorResponse, SuccessResponse } from "src/index";
import { StoreBranch } from "./storeBranch";

export interface GetAllStoreBranchQuery {
    skip?: number;
    limit?: number;
  }

export interface GetAllStoreBranchSuccessResponse extends SuccessResponse {
    code: number;
    data: StoreBranch[];
}

export const enum GetAllStoreBranchErrorMessages {
    CAN_NOT_GET_ALL_STORE_BRANCH = 'CAN_NOT_GET_ALL_STORE_BRANCH',
}

export interface GetAllStoreBranchErrorResponse extends ErrorResponse {
    code?: number;
    error: GetAllStoreBranchErrorMessages;
    errors: DescriptiveError;
}

export type GetAllStoreBranchResponse =
    | GetAllStoreBranchSuccessResponse
    | GetAllStoreBranchErrorResponse;