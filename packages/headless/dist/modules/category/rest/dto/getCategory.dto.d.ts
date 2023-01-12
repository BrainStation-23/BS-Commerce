import { getCategoryErrorMessage, getCategoryErrorResponse, getCategoryRequest, getCategorySuccessResponse } from '@bs-commerce/models';
import { CategoryDto } from './category.dto';
export declare class getCategoryRequestDto implements getCategoryRequest {
    categoryId: string;
}
export declare class getCategorySuccessResponseDto implements getCategorySuccessResponse {
    code: number;
    data: CategoryDto;
}
export declare class getCategoryErrorResponseDto implements getCategoryErrorResponse {
    code: number;
    error: getCategoryErrorMessage;
    errors: string[];
}
