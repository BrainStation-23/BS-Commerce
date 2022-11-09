import { SuccessResponse, ErrorResponse, DescriptiveError } from "src/index";
import { Branch, BranchAddress, IBranchPhoto } from "./branch";


export interface CreateBranchRequest {
  store: string;
  name: string;
  isActive: boolean;
  inActiveReason?: InActiveReason;
  image?: IBranchPhoto;
  address: BranchAddress;
  description: string;
}

export const enum InActiveReason{
  BLOCKED_BY_ADMIN = 'BLOCKED_BY_ADMIN',
  UNDER_MAINTENANCE = 'UNDER_MAINTENANCE'
}

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
  INVALID_STORE_ID = "INVALID STORE ID",
  URL_ALREADY_EXISTS = "URL ALREADY EXISTS"
}

export type CreateBranchResponse =
  | CreateBranchErrorResponse
  | CreateBranchSuccessResponse;
