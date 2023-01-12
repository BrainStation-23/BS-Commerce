import { GetCustomerProductByURLParams, GetCustomerProductByURLErrorMessages, GetCustomerProductByURLErrorResponse, GetCustomerProductByURLSuccessResponse } from '@bs-commerce/models';
import { ProductDto } from '.';
export declare class GetCustomerProductByURLParamsDto implements GetCustomerProductByURLParams {
    url: string;
}
export declare class GetCustomerProductByURLErrorResponseDto implements GetCustomerProductByURLErrorResponse {
    code: number;
    error: GetCustomerProductByURLErrorMessages;
    errors: string[];
}
export declare class GetCustomerProductByURLSuccessResponseDto implements GetCustomerProductByURLSuccessResponse {
    code: number;
    data: ProductDto;
}
