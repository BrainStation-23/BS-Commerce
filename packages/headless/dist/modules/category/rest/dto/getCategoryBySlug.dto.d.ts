import { getCategoryBySlugErrorMessage, getCategoryBySlugErrorResponse, getCategoryBySlugRequest, getCategoryBySlugSuccessResponse } from '@bs-commerce/models';
import { CategoryDto } from './category.dto';
export declare class getCategoryBySlugRequestDto implements getCategoryBySlugRequest {
    slug: string;
}
export declare class getCategoryBySlugSuccessResponseDto implements getCategoryBySlugSuccessResponse {
    code: number;
    data: CategoryDto;
}
export declare class getCategoryBySlugErrorResponseDto implements getCategoryBySlugErrorResponse {
    code: number;
    error: getCategoryBySlugErrorMessage;
    errors: string[];
}
