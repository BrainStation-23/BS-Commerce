import { GetProductBySKUParams, GetProductBySKUErrorMessages, GetProductBySKUErrorResponse, GetProductBySKUSuccessResponse } from '@bs-commerce/models';
import { ProductDto } from '.';
export declare class GetProductBySKUParamsDto implements GetProductBySKUParams {
    sku: string;
}
export declare class GetProductBySKUErrorResponseDto implements GetProductBySKUErrorResponse {
    code: number;
    error: GetProductBySKUErrorMessages;
    errors: string[];
}
export declare class GetProductBySKUSuccessResponseDto implements GetProductBySKUSuccessResponse {
    code: number;
    data: ProductDto;
}
