import { SuccessResponse, ErrorResponse, ErrorMessage, DescriptiveError } from "src/index";
import { Branch } from "./branch";


export type CreateBranchRequest = Omit<Branch, 'id'>;

export interface CreateBranchSuccessResponse extends SuccessResponse {
  code: number;
  data: Branch;
}

export interface CreateBranchErrorResponse extends ErrorResponse {
  code?: number;
  error: CreateBranchErrorMessage;
  errors: DescriptiveError;
}

export const enum CreateBranchErrorMessage {
  CANNOT_CREATE_BRANCH = "CANNOT CREATE BRANCH",
  BRANCH_ALREADY_EXISTS = "BRANCH ALREADY EXISTS",
  INVALID_STORE_ID = "INVALID STORE ID"
}

export type CreateBranchResponse =
  | CreateBranchErrorResponse
  | CreateBranchSuccessResponse;
