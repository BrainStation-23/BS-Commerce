import { GetCustomizedProductsErrorMessages, GetCustomizedProductsErrorResponse, GetCustomizedProductsQuery, GetCustomizedProductsSuccessResponse } from '@bs-commerce/models';
import { ProductDto } from './product.dto';
export declare class GetCustomizedProductsQueryDto implements GetCustomizedProductsQuery {
    skip?: number;
    limit?: number;
    tag: string;
}
export declare class GetCustomizedProductsErrorResponseDto implements GetCustomizedProductsErrorResponse {
    code: number;
    error: GetCustomizedProductsErrorMessages;
    errors: string[];
}
export declare class GetCustomizedProductsSuccessResponseDto implements GetCustomizedProductsSuccessResponse {
    code: number;
    data: ProductDto[];
}
