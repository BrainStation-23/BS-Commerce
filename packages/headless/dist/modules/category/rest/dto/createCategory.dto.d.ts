import { createCategoryErrorMessage, createCategoryErrorResponse, createCategoryRequest, createCategorySuccessResponse } from '@bs-commerce/models';
import { CategoryDto, CategoryMetaDto, PhotoDto } from './category.dto';
export declare class createCategoryRequestDto implements createCategoryRequest {
    name: string;
    parentSlug?: string;
    photo?: PhotoDto;
    description?: string;
    showOnHomePage?: boolean;
    includeInTopMenu?: boolean;
    allowToSelectPageSize?: boolean;
    published?: boolean;
    displayOrder?: number;
    meta?: CategoryMetaDto;
}
export declare class createCategorySuccessResponseDto implements createCategorySuccessResponse {
    code: number;
    data: CategoryDto;
}
export declare class createCategoryErrorResponseDto implements createCategoryErrorResponse {
    code: number;
    error: createCategoryErrorMessage;
    errors: string[];
}
