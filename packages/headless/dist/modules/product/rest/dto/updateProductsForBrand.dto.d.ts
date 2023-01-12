import { ProductDto } from '.';
import { UpdateProductsForBrandRequest, UpdateProductsForBrandErrorMessages, UpdateProductsForBrandErrorResponse, UpdateProductsForBrandSuccessResponse } from '@bs-commerce/models';
export declare class updateProductsForBrandRequestDto implements UpdateProductsForBrandRequest {
    productIds: string[];
    brandId: string;
}
export declare class UpdateProductsForBrandErrorResponseDto implements UpdateProductsForBrandErrorResponse {
    code: number;
    error: UpdateProductsForBrandErrorMessages;
    errors: string[];
}
export declare class UpdateProductsForBrandSuccessResponseDto implements UpdateProductsForBrandSuccessResponse {
    code: number;
    data: [ProductDto];
}
