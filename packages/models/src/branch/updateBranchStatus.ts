import { DescriptiveError, ErrorResponse, SuccessResponse } from "src/index";
import { StoreBranchStatus } from "src/tmp-store-branch/index";

export interface UpdateBranchStatusRequestBody {
    status: StoreBranchStatus,
}

export interface UpdateBranchStatusParams {
    branchId: string;
}

export interface UpdateBranchStatusSuccessResponse extends SuccessResponse{
    code: number;
    data: {
        message: UpdateBranchStatusSuccessMessage,
    };
}

export interface UpdateBranchStatusErrorResponse extends ErrorResponse {
    code?: number;
    error: UpdateBranchStatusErrorMessage;
    errors: DescriptiveError;
}

export const enum UpdateBranchStatusSuccessMessage {
    SUCCESSFULLY_APPROVED = 'SUCCESSFULLY_APPROVED',
    REJECTED_FROM_SUPER_ADMIN = 'REJECTED_FROM_SUPER_ADMIN',
}

export const enum UpdateBranchStatusErrorMessage {
    CAN_NOT_UPDATE_BRANCH_STATUS = 'CAN_NOT_UPDATE_BRANCH_STATUS',
}

export type UpdateBranchStatusResponse =
    | UpdateBranchStatusSuccessResponse
    | UpdateBranchStatusErrorResponse;
