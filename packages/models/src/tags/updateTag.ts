import { DescriptiveError, ErrorResponse, SuccessResponse } from "src/index";

export interface updateTag {
    id: string;
    name: string;
}

export interface updateTagRequest {
    name?:string;
    isHomePageProductsTag?: boolean;
}

export interface updateTagSuccessResponse extends SuccessResponse {
    code: number;
    data: updateTag;
}

export const enum updateTagErrorMessages {
    CAN_NOT_UPDATE_TAG = 'CAN_NOT_UPDATE_TAG',
}

export interface updateTagErrorResponse extends ErrorResponse {
    code?: number;
    error: updateTagErrorMessages;
    errors: DescriptiveError;
}

export type updateTagResponse = updateTagSuccessResponse | updateTagErrorResponse;