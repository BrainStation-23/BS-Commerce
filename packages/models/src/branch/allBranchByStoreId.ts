import { DescriptiveError, ErrorResponse, SuccessResponse } from "src/index";
import { Branch } from "./branch";

export interface AllBranchByStoreId{
    store: string;
    branchList: Branch[];
}

export interface GetAllBranchByStoreIdSuccessResponse extends SuccessResponse {
    code: number;
    data: AllBranchByStoreId;
  }
  
export interface GetAllBranchByStoreIdErrorResponse extends ErrorResponse {
    code?: number;
    error: GetAllBranchByStoreIdErrorMessage;
    errors: DescriptiveError;
}

export const enum GetAllBranchByStoreIdErrorMessage {
    INVALID_STORE_ID = "INVALID STORE ID",
    CANNOT_GET_BRANCHES = "CANNOT GET BRANCHES"
  }
  
export type GetAllBranchByStoreIdResponse =
| GetAllBranchByStoreIdErrorResponse
| GetAllBranchByStoreIdSuccessResponse;
  