import { GetProductCountErrorMessages, GetProductCountErrorResponse, GetProductCountSuccessResponse } from '@bs-commerce/models';
export declare class GetProductCountErrorResponseDto implements GetProductCountErrorResponse {
    code: number;
    error: GetProductCountErrorMessages;
    errors: string[];
}
export declare class Count {
    count: number;
}
export declare class GetProductCountSuccessResponseDto implements GetProductCountSuccessResponse {
    code: number;
    data: Count;
}
