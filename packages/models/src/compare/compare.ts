import { DescriptiveError, ErrorResponse, SuccessResponse } from "src/index";
import {
    AddProductToCompareErrorEnum,
    DeleteCompareErrorEnum,
    GetCompareErrorEnum,
} from "./compareErrorEnum";

export interface AddCompareItem {
    productId: string;
}

export interface CompareItems {
    productId: string;
    products?: any;
}

export interface CompareData {
    id: string;
    userId: string;
    items: CompareItems[];
}

export interface CompareSuccessResponse extends SuccessResponse {
    code: number;
    data: CompareData;
}

export interface CompareErrorResponse extends ErrorResponse {
    code?: number;
    error:
        | AddProductToCompareErrorEnum
        | DeleteCompareErrorEnum
        | GetCompareErrorEnum;
    errors: DescriptiveError;
}

export type CompareResponse = CompareSuccessResponse | CompareErrorResponse;
