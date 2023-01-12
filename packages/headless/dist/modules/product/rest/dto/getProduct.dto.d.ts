import { GetProductParams, GetProductErrorMessages, GetProductErrorResponse, GetProductSuccessResponse } from '@bs-commerce/models';
import { ProductDto } from '.';
export declare class GetProductParamsDto implements GetProductParams {
    productId: string;
}
export declare class GetProductErrorResponseDto implements GetProductErrorResponse {
    code: number;
    error: GetProductErrorMessages;
    errors: string[];
}
export declare class GetProductSuccessResponseDto implements GetProductSuccessResponse {
    code: number;
    data: ProductDto;
}
