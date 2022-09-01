import { AddProductToCompareErrorEnum, DescriptiveError, ErrorResponse, SuccessResponse } from "src/index";
import { ICompareItems } from "./compare";

export interface ComparePublicSuccessResponse extends SuccessResponse {
	code: number;
	data: ICompareItems[];
}

export interface ComparePublicErrorResponse extends ErrorResponse {
	code?: number;
	error: AddProductToCompareErrorEnum
	errors: DescriptiveError;
}

export type ComparePublicResponse = ComparePublicSuccessResponse | ComparePublicErrorResponse;
