import { ErrorResponse, SuccessResponse } from "src/index";

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

export interface CompareErrorResponse extends ErrorResponse {}

export type CompareResponse = CompareSuccessResponse | CompareErrorResponse;
