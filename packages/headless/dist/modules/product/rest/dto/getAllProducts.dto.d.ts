import { ProductDto } from '.';
import { GetAllProductsQuery, GetAllProductsErrorMessages, GetAllProductsErrorResponse, GetAllProductsSuccessResponse } from '@bs-commerce/models';
export declare class GetAllProductsQueryDto implements GetAllProductsQuery {
    skip?: number;
    limit?: number;
}
export declare class GetAllProductsErrorResponseDto implements GetAllProductsErrorResponse {
    code: number;
    error: GetAllProductsErrorMessages;
    errors: string[];
}
export declare class GetAllProductsSuccessResponseDto implements GetAllProductsSuccessResponse {
    code: number;
    data: [ProductDto];
}
